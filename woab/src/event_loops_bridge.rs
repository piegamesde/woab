pub fn run_actix_inside_gtk_event_loop(name: impl Into<String>) -> std::io::Result<()> {
    let mut runtime = tokio::runtime::Runtime::new()?;
    let local_set = tokio::task::LocalSet::new();
    local_set.spawn_local(actix::System::run_in_tokio(name.into(), &local_set));
    gtk::idle_add(move || {
        local_set.block_on(&mut runtime, async {
            tokio::time::delay_for(tokio::time::Duration::new(0, 0)).await;
        });
        glib::source::Continue(true)
    });
    Ok(())
}
