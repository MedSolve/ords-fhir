import {Router}                             from './Router';
import {IConformance}                       from '../models/internal/Conformance';
import {DI}                                 from './DependencyInjector';
import {HookManager}                        from './HookManager';
import {ConformanceManager}                 from './ConformanceManager';

// auto load routes
import '../routes/TypeRoute';
import '../routes/SystemRoute';
import '../routes/InstanceRoute';

/**
 * Working child of the cluster
 * @class ChildWorker
 */
export class ChildWorker {
    /**
     * Reference to resourcemanager
     */
    @DI.inject(Router)
    private router: Router;
    /**
     * Reference to conformance manager
     */
    @DI.inject(ConformanceManager)
    private conformanceManager: ConformanceManager;
    /**
     * Reference to router
     */
    @DI.inject(HookManager)
    private hookManager: HookManager;
    /**
     * Startup all tasks for the worker 
     * @param   {IConformance}          conformance   conformance from the server
     */
    constructor(conformance: any) {

        // set some of the autogenerated conformance fields
        this.conformanceManager.addAutoConformance(conformance);

        // build conformance
        this.hookManager.doHooks('conformance.configure', conformance).then((conf: IConformance): void => {

            // build conformance
            this.conformanceManager.buildConformance(conf);

            // start http server when conformance is build
            this.router.listen(process.env.PORT);

        });
    }
}
