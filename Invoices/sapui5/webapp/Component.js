// @ts-nocheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "logaligroup/sapui5/model/Models",
    //    "sap/ui/model/json/JSONModel"
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     */
    function (UIComponent, Models, ResourceModel) {

        return UIComponent.extend("logaligroup.sapui5.Component", {

            metadata: {
                manifest : "json"
                // "rootView": {
                //     "viewName": "logaligroup.sapui5.view.App",
                //     "type": "XML",
                //     "async": true,
                //     "id": "app"
                // }
            },

            init: function () {
                //call init function parent
                UIComponent.prototype.init.apply(this, arguments);
                //               this.getView().setModel(oModel); set data
                this.setModel(Models.createRecipient());
                //              set i18n model on the view
                var i18nModel = new ResourceModel({ bundleName: "logaligroup.sapui5.i18n.i18n" });
                this.setModel(i18nModel, "i18n");
            }
        });
    });