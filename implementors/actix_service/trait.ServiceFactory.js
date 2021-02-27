(function() {var implementors = {};
implementors["actix_connect"] = [{"text":"impl&lt;T:&nbsp;Address&gt; ServiceFactory for TcpConnectorFactory&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Address&gt; ServiceFactory for ResolverFactory&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Address&gt; ServiceFactory for ConnectServiceFactory&lt;T&gt;","synthetic":false,"types":[]}];
implementors["actix_http"] = [{"text":"impl&lt;T, S, B, X, U&gt; ServiceFactory for HttpService&lt;T, S, B, X, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: AsyncRead + AsyncWrite + Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: ServiceFactory&lt;Config = (), Request = Request&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Error: Into&lt;Error&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::InitError: Debug,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Response: Into&lt;Response&lt;B&gt;&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S::Service as Service&gt;::Future: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: MessageBody + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;X: ServiceFactory&lt;Config = (), Request = Request, Response = Request&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;X::Error: Into&lt;Error&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;X::InitError: Debug,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;X::Service as Service&gt;::Future: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: ServiceFactory&lt;Config = (), Request = (Request, Framed&lt;T, Codec&gt;), Response = ()&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;U::Error: Display + Into&lt;Error&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;U::InitError: Debug,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;U::Service as Service&gt;::Future: 'static,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl ServiceFactory for ExpectHandler","synthetic":false,"types":[]},{"text":"impl&lt;T, S, B, X, U&gt; ServiceFactory for H1Service&lt;T, S, B, X, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: AsyncRead + AsyncWrite + Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: ServiceFactory&lt;Config = (), Request = Request&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Error: Into&lt;Error&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Response: Into&lt;Response&lt;B&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::InitError: Debug,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: MessageBody,<br>&nbsp;&nbsp;&nbsp;&nbsp;X: ServiceFactory&lt;Config = (), Request = Request, Response = Request&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;X::Error: Into&lt;Error&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;X::InitError: Debug,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: ServiceFactory&lt;Config = (), Request = (Request, Framed&lt;T, Codec&gt;), Response = ()&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;U::Error: Display + Into&lt;Error&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;U::InitError: Debug,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; ServiceFactory for OneRequest&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: AsyncRead + AsyncWrite + Unpin,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; ServiceFactory for UpgradeHandler&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, S, B&gt; ServiceFactory for H2Service&lt;T, S, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: AsyncRead + AsyncWrite + Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: ServiceFactory&lt;Config = (), Request = Request&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Error: Into&lt;Error&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Response: Into&lt;Response&lt;B&gt;&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S::Service as Service&gt;::Future: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: MessageBody + 'static,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["actix_service"] = [];
implementors["actix_utils"] = [{"text":"impl&lt;A, B&gt; ServiceFactory for Either&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: ServiceFactory,<br>&nbsp;&nbsp;&nbsp;&nbsp;A::Config: Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: ServiceFactory&lt;Config = A::Config, Response = A::Response, Error = A::Error, InitError = A::InitError&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;R, E, F&gt; ServiceFactory for KeepAlive&lt;R, E, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Fn() -&gt; E + Clone,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl ServiceFactory for LowResTime","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()