#[derive(woab::WidgetsFromBuilder)]
pub struct WindowWidgets {
    pub app_window: gtk::ApplicationWindow,
    pub text_buffer: gtk::TextBuffer,
}

struct WindowActor {
    widgets: WindowWidgets,
    counter: usize,
}

impl woab::WoabActor for WindowActor {
    type Widgets = WindowWidgets;
    type Signal = WindowSingal;
}

impl actix::Actor for WindowActor {
    type Context = actix::Context<Self>;

    fn started(&mut self, _ctx: &mut Self::Context) {
        use gtk::WidgetExt;
        self.widgets.app_window.show();
    }
}

#[derive(woab::BuilderSignal)]
enum WindowSingal {
    ClickButton(gtk::Button),
}

impl actix::StreamHandler<WindowSingal> for WindowActor {
    fn handle(&mut self, signal: WindowSingal, _ctx: &mut Self::Context) {
        match signal {
            WindowSingal::ClickButton(_button) => {
                self.counter += 1;
                use gtk::TextBufferExt;
                self.widgets.text_buffer.set_text(&format!("{}", self.counter));
            }
        }
    }
}

fn main() {
    use woab::WoabActor;

    gtk::init().unwrap();
    woab::run_actix_inside_gtk_event_loop("example").unwrap();
    let builder = gtk::Builder::from_file("woab/examples/example.glade");
    WindowActor::woab_create(&builder, |_, widgets| WindowActor { widgets, counter: 0});
    gtk::main();
}
