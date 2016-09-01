export interface ResourceRight {
    [resource: string]: void;
}

export class ACLComponent {
    /***
     * Check if the user is authenticated
     */
    private isAuthenticated: boolean;
    /**
     * Rights owned by the connected user
     */
    private rights: { [right: string]: ResourceRight };
    /**
     * Check if the user has the rights to perfom the action and check that rights limitations
     */
    public HasRight(right: string, resource?: string) {

        if (this.rights[right] === undefined) {
            return false;
        } else {
            return true;
        }
    }
    /**
     * Check that the connected has a login
     */
    public isLoggedIn(): Boolean {

        // return boolean
        return this.isAuthenticated;
    }
    /**
     * Create new component for connected user
     */
    constructor(isAuthenticated: boolean) {

        // bind input
        this.isAuthenticated = isAuthenticated;
    }

}