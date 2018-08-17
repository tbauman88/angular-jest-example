(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('my-awesome-lib', ['exports', '@angular/core'], factory) :
    (factory((global['my-awesome-lib'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MyAwesomeLibService = (function () {
        function MyAwesomeLibService() {
        }
        MyAwesomeLibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        MyAwesomeLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ MyAwesomeLibService.ngInjectableDef = i0.defineInjectable({ factory: function MyAwesomeLibService_Factory() { return new MyAwesomeLibService(); }, token: MyAwesomeLibService, providedIn: "root" });
        return MyAwesomeLibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MyAwesomeLibComponent = (function () {
        function MyAwesomeLibComponent() {
        }
        /**
         * @return {?}
         */
        MyAwesomeLibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        MyAwesomeLibComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-my-awesome-lib',
                        template: "\n    <p>\n      my-awesome-lib works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        MyAwesomeLibComponent.ctorParameters = function () { return []; };
        return MyAwesomeLibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MyAwesomeLibModule = (function () {
        function MyAwesomeLibModule() {
        }
        MyAwesomeLibModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [MyAwesomeLibComponent],
                        exports: [MyAwesomeLibComponent]
                    },] },
        ];
        return MyAwesomeLibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.MyAwesomeLibService = MyAwesomeLibService;
    exports.MyAwesomeLibComponent = MyAwesomeLibComponent;
    exports.MyAwesomeLibModule = MyAwesomeLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktYXdlc29tZS1saWIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9teS1hd2Vzb21lLWxpYi9saWIvbXktYXdlc29tZS1saWIuc2VydmljZS50cyIsIm5nOi8vbXktYXdlc29tZS1saWIvbGliL215LWF3ZXNvbWUtbGliLmNvbXBvbmVudC50cyIsIm5nOi8vbXktYXdlc29tZS1saWIvbGliL215LWF3ZXNvbWUtbGliLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE15QXdlc29tZUxpYlNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbXktYXdlc29tZS1saWInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgbXktYXdlc29tZS1saWIgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE15QXdlc29tZUxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTXlBd2Vzb21lTGliQ29tcG9uZW50IH0gZnJvbSAnLi9teS1hd2Vzb21lLWxpYi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbiAgZGVjbGFyYXRpb25zOiBbTXlBd2Vzb21lTGliQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW015QXdlc29tZUxpYkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTXlBd2Vzb21lTGliTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7a0NBSkQ7Ozs7Ozs7QUNBQTtRQWFFO1NBQWlCOzs7O1FBRWpCLHdDQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxvQkFBb0I7d0JBQzlCLFFBQVEsRUFBRSxzREFJVDt3QkFDRCxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7OztvQ0FWRDs7Ozs7OztBQ0FBOzs7O29CQUdDQyxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLEVBQUU7d0JBQ1gsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7d0JBQ3JDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO3FCQUNqQzs7aUNBUEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=