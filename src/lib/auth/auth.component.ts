import {Request}                            from 'express';
import {HookableComponent, HookableModels}  from 'make-it-hookable';
import {User}                               from './models/user';

/**
 * Connect to a database and perform operation in that
 */
export class AuthComponent {
    /**
     * Get the user performing a request
     */
    public getUser: HookableModels.Returnable<Request, User> = HookableComponent.returnable();
    /**
     * Create a new user based upon the information in the request
     */
    public createUser: HookableModels.Returnable<Request, User> = HookableComponent.returnable();
    /**
     * Update information about the user
     */
    public updateUser: HookableModels.Returnable<Request, User> = HookableComponent.returnable();
    /**
     * Delete the user performing the request
     */
    public deleteUser: HookableModels.Returnable<Request, User> = HookableComponent.returnable();
}
