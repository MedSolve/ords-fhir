import {Promise}                    from 'es6-promise';
export *                            from './Hookables';

export interface Stack {
    [key: string]: {
        per: {
            [key: string]: Function
        };
        post: {
            [key: string]: Function
        };
        pre: {
            [key: string]: Function
        };
    };
}

export interface GenericIdentityFn<T> {
    (arg: T, next: Function): any;
}

/**
 * Hook manager and container for commands executed within the application
 * @class Hook
 */
export class HookManager {
    /**
     * Container of all hooks related to their commands
     * @type {StringMapFunction}
     */
    private stack: Stack = {};
    /**
     * Add a named hook prior to a speicific command or create a new command and add the hook to that command
     * @param   {string}      command   command to be hooked into
     * @param   {string}      name      name of the hook being added
     * @param   {Function}    hook      the hook function itself
     * @returns {void}        no feedback is provided  
     */
    public addHookPre<T>(cmd: any, name: string, hook: GenericIdentityFn<T>): void {

        // add hooks
        if (this.stack[cmd] === undefined) {

            this.stack[cmd] = {
                per: {},
                post: {},
                pre: {}
            };
        }
        
        // save hook
        this.stack[cmd].pre[name] = hook;
    }
    /**
     * Add a named hook post a speicific command or create a new command and add the hook to that command
     * @param   {string}      command   command to be hooked into
     * @param   {string}      name      name of the hook being added
     * @param   {Function}    hook      the hook function itself
     * @returns {void}        no feedback is provided  
     */
    public addHookPost<T>(cmd: any, name: string, hook: GenericIdentityFn<T>): void {

        // add hooks
        if (this.stack[cmd] === undefined) {

            this.stack[cmd] = {
                per: {},
                post: {},
                pre: {}
            };
        }
        
        // save hook
        this.stack[cmd].post[name] = hook;
    }
    /**
     * Add a named hook to a speicific command or create a new command and add the hook to that command
     * @param   {string}      command   command to be hooked into
     * @param   {string}      name      name of the hook being added
     * @param   {Function}    hook      the hook function itself
     * @returns {void}        no feedback is provided  
     */
    public addHookPer<T>(cmd: any, name: string, hook: GenericIdentityFn<T>): void {

        // add hooks
        if (this.stack[cmd] === undefined) {

            this.stack[cmd] = {
                per: {},
                post: {},
                pre: {}
            };
        }
        
        // save hook
        this.stack[cmd].per[name] = hook;
    }
    /**
     * Execute hooks for a specfic command and apply one or more arguments to the hooks
     * @param   {string}      command   command for which hooks is executed
     * @param   {...any}      args      arguments to be used in the hooks 
     * @returns {Promise}     Indication of weather or not command exsists
     */
    public doHooks<T>(command: string, args: T): Promise<any> {

        // return the promise
        return new Promise((resolve: Function, reject: Function) => {

            // validate it exsists
            if (this.stack[command] === undefined) {

                // do nothing
                resolve(args);

            } else {

                // calculate functions to run and sort them by alphanumeric
                let funcsToRun: Array<string> = Object.keys(this.stack[command].pre).sort();               
                Array.prototype.push.apply(funcsToRun, Object.keys(this.stack[command].post).sort());
                Array.prototype.push.apply(funcsToRun, Object.keys(this.stack[command].per).sort());

                // keep ref to self
                let self: any = this;

                // the next function
                let next: any = function (): void {

                    // check if any functions are left to run
                    if (funcsToRun.length === 0) {
                        resolve(args);
                    }

                    // next function to run
                    let funcName: string = funcsToRun.shift();

                    try {
                        self.stack[command][funcName](args, next);
                    } catch (err) {
                        reject(err);
                    }
                };

                // start next
                next();
            }
        });
    }
    /**
     * Remove a hook by a given name from a command
     * @param   {string}      command   command to remove the hook from
     * @param   {string}      name      name of the hook being removed
     * @returns {void}        no feedback is provided 
     * @throws  Error is thrown if command does not exsists 
     */
    public removeHook(cmd: string, name: string): void {

        // validate it exsists
        if (this.stack[cmd] === undefined) {
            throw new Error('Command does not exsists');
        }

        // delete hook from wherever it is added
        delete this.stack[cmd].pre[name];
        delete this.stack[cmd].per[name];
        delete this.stack[cmd].post[name];
    }
}
