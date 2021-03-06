use crate::util::{iter_attrs_parameters, path_to_single_string};
use quote::quote;
use syn::parse::Error;
use syn::spanned::Spanned;

pub fn impl_widgets_from_builder_derive(ast: &syn::DeriveInput) -> Result<proc_macro2::TokenStream, Error> {
    let fields = if let syn::Data::Struct(syn::DataStruct {
        fields: syn::Fields::Named(fields),
        ..
    }) = &ast.data
    {
        fields
    } else {
        return Err(Error::new_spanned(
            ast,
            "WidgetsFromBuilder only supports structs with named fields",
        ));
    };
    let struct_ident = &ast.ident;
    let ctor_arms = fields
        .named
        .iter()
        .map(|field| {
            /* Handle renaming */
            let mut name = None;
            iter_attrs_parameters(&field.attrs, "widget", |attr_name, value| {
                match path_to_single_string(&attr_name)?.as_str() {
                    "name" => {
                        let value = value.ok_or_else(|| Error::new_spanned(attr_name, "attribute `name` must have a value"))?;
                        if name.is_some() {
                            return Err(Error::new_spanned(value, "attribute `name` can only be specified once"));
                        }
                        name = Some(value);
                    }
                    _ => {
                        return Err(Error::new_spanned(attr_name, "unknown attribute"));
                    }
                }
                Ok(())
            })?;

            let field_ident = field
                .ident
                .as_ref()
                .ok_or_else(|| Error::new(field.span(), "Nameless field"))?;
            let field_type = &field.ty;
            let ident_as_str = match name {
                Some(syn::Expr::Lit(syn::ExprLit {
                    lit: syn::Lit::Str(name),
                    ..
                })) => name,
                None => syn::LitStr::new(&field_ident.to_string(), field_ident.span()),
                _ => return Err(Error::new_spanned(name, "`name` attribute must have a string literal value")),
            };
            Ok(quote! {
                #field_ident: builder.get_object(#ident_as_str).ok_or_else(|| {
                    if let Some(object) = builder.get_object::<glib::Object>(#ident_as_str) {
                        use glib::object::ObjectExt;
                        woab::Error::IncorrectWidgetTypeInBuilder {
                            widget_id: #ident_as_str.to_owned(),
                            expected_type: <#field_type as glib::types::StaticType>::static_type(),
                            actual_type: object.get_type(),
                        }
                    } else {
                        woab::Error::WidgetMissingInBuilder(#ident_as_str.to_owned())
                    }
                })?,
            })
        })
        .collect::<Result<Vec<_>, Error>>()?;
    Ok(quote! {
        impl std::convert::TryFrom<&gtk::Builder> for #struct_ident {
            type Error = woab::Error;

            fn try_from(builder: &gtk::Builder) -> Result<Self, Self::Error> {
                use gtk::prelude::BuilderExtManual;
                Ok(Self {
                    #(#ctor_arms)*
                })
            }
        }

        impl std::convert::TryFrom<gtk::Builder> for #struct_ident {
            type Error = woab::Error;

            fn try_from(builder: gtk::Builder) -> Result<Self, Self::Error> {
                <Self as std::convert::TryFrom<&gtk::Builder>>::try_from(&builder)
            }
        }
    })
}
