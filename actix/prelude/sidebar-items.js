initSidebarItems({"enum":[["ActorState","Actor execution state"],["MailboxError","The errors that can occur during the message delivery process."],["Running",""],["SendError",""]],"struct":[["ActorResponse","A helper type for representing different types of message responses."],["Addr","The address of an actor."],["Arbiter","Arbiters provide an asynchronous execution environment for actors, functions and futures. When an Arbiter is created, it spawns a new OS thread, and hosts an event loop. Some Arbiter functions execute on the current thread."],["Context","An actor execution context."],["MessageResult","A helper type that implements the `MessageResponse` trait."],["Recipient","The `Recipient` type allows to send one specific message to an actor."],["RecipientRequest","A `Future` which represents an asynchronous message sending process."],["Request","A `Future` which represents an asynchronous message sending process."],["Response","Helper type for representing different type of message responses"],["SpawnHandle","A handle to a spawned future."],["Supervisor","Actor supervisor"],["System","System is a runtime manager."],["SystemRunner","Helper object that runs System's event loop"]],"trait":[["Actor","Actors are objects which encapsulate state and behavior."],["ActorContext","Actor execution context."],["AsyncContext","Asynchronous execution context."],["ContextFutureSpawner","Helper trait which can spawn a future into the actor's context."],["Future","A future represents an asynchronous computation."],["Handler","Describes how to handle messages of a specific type."],["Message","Represent message that can be handled by an actor."],["Stream","A stream of values produced asynchronously."],["StreamHandler","Stream handler"],["Supervised","Actors with the ability to restart after failure."]],"type":[["ResponseActFuture","A specialized actor future for asynchronous message handling."],["ResponseFuture","A specialized future for asynchronous message handling."]]});