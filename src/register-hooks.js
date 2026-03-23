const { registerHooks } = require('@jest/hooks');

registerHooks({
    resolve(specifier, context, nextResolver) {
        console.log(specifier, context);
    }
});