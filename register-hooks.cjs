const { registerHooks } = require('module');

const hook1 = {
    resolve(specifier, context, nextResolver) {
        console.log('hook1', specifier, context);
        return nextResolver(specifier, context);
    }
}
const hook2 = {
    resolve(specifier, context, nextResolver) {
        console.log('hook2', specifier, context);
        return nextResolver(specifier, context);
    }
}

const registered = registerHooks(hook1);
registerHooks(hook2);

registered.deregister();