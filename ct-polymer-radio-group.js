import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { mixinBehaviors } from "@polymer/polymer/lib/legacy/class.js";

import { clDefaultTemplate } from "cl-polymer-element-helpers/cl-default-template.js";
import { clDefaultStyle } from "cl-polymer-element-helpers/cl-default-style.js";

import { __decorate } from "cl-polymer-element-helpers/cl-helpers.js";
import { property, observe, customElement } from "@polymer/decorators";

import "@polymer/paper-radio-group/paper-radio-group.js";
import "@polymer/paper-radio-button/paper-radio-button.js";

import "cl-polymer-element-helpers/ct-element-style.js";

let ctPolymerRadioGroupTemplate;
let ctPolymerRadioGroupTemplateDefault;
let ctPolymerRadioGroupBase = mixinBehaviors([], PolymerElement);
class ctPolymerRadioGroup extends ctPolymerRadioGroupBase {
    constructor () {
        super();
        this.isReadOnlyMode = false;
    }

    onPaperRadioGroupIronActivate (event) {
        let groups = this.groups;
        for(let index = 0; index < groups.length; index++) {
            let item = groups[index];
            if (item.name == event.detail.selected) {
                this.fire("ct-radio-group-selection-changed", [this.get("groups." + index), index])
                this.name = item.name;
            } else {
                this.fire("ct-radio-group-non-selection-changed", [this.get("groups." + index), index])
            }
        }
    }

    fireMetadataChanged (name) {
        this.fire("ct-radio-group-changed", {name})
    }
  	
  	static get template() {
    	if ( void 0 === ctPolymerRadioGroupTemplate || null === ctPolymerRadioGroupTemplate ) {
            
            let template = document.createElement("template");
            template.innerHTML = `
            <style>
                :host{
                    display: flex;
                    flex-direction: column;
                }

                paper-radio-group{
                    display: flex;
                    flex-direction: var(--ct-radio-group-paper-radio-group-flex-direction, column);
                }

                paper-radio-button {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: var(--ct-radio-group-paper-radio-button-align-items, flex-start);
                    min-width: max-content;
                }

                .item-description{
                    flex: 1;
                    margin-top: 8px;
                    font-family: var(--ct-primary-font-family);
                    -webkit-font-smoothing: var(--ct-primary-font-smoothing);
                    font-weight: 400;
                    font-size: 13px;
                    line-height: 20px;
                    color: var(--ct-secondary-text-color);
                }

            </style>
            <paper-radio-group aria-label$="[[ariaLabel]]" selected="[[selected]]" on-iron-activate="onPaperRadioGroupIronActivate">
                <template is="dom-repeat" items="[[groups]]" restamp="">
                    <paper-radio-button disabled$\="[[isReadOnlyMode]]" name$="[[item.name]]" index$="[[index]]">
                        <span>[[item.label]]</span>
                        <template is="dom-if" if="[[item.discription]]" restamp="">
                            <div class="item-description">[[item.discription]]</div>
                        </template>
                    </paper-radio-button>

                    <template is="dom-if" if="[[item.itemSlotted]]" restamp="">
                        <slot></slot>
                    </template>
                </template>
            </paper-radio-group>
            `;
            template.content.insertBefore(clDefaultStyle().content.cloneNode(true), template.content.firstChild);
            let templateContent = template.content;
            let templateInsertBefore = templateContent.insertBefore;
            let defaultTemplate;
            if (void 0 === ctPolymerRadioGroupTemplateDefault || null === ctPolymerRadioGroupTemplateDefault) {
                defaultTemplate = clDefaultTemplate();
                ctPolymerRadioGroupTemplateDefault = defaultTemplate
            }
            defaultTemplate = ctPolymerRadioGroupTemplateDefault;
            templateInsertBefore.call(templateContent, defaultTemplate.content.cloneNode(true), template.content.firstChild);

            return ctPolymerRadioGroupTemplate = template;
        }

        return ctPolymerRadioGroupTemplate;
  	}
}

__decorate(
    [
        property({ type: Object })
    ], 
    ctPolymerRadioGroup.prototype, 
    "groups", 
    void 0
);

__decorate(
    [
        property({ type: Boolean })
    ], 
    ctPolymerRadioGroup.prototype, 
    "isReadOnlyMode", 
    void 0
);

__decorate(
    [
        property({ type: String })
    ], 
    ctPolymerRadioGroup.prototype, 
    "ariaLabel", 
    void 0
);

__decorate(
    [
        property({ type: String })
    ], 
    ctPolymerRadioGroup.prototype, 
    "selected", 
    void 0
);

__decorate(
    [
        property({ type: String })
    ], 
    ctPolymerRadioGroup.prototype, 
    "name", 
    void 0
);

__decorate(
    [
        property({ type: Function }),
        observe("name")
    ], 
    ctPolymerRadioGroup.prototype, 
    "fireMetadataChanged", 
    null
);

ctPolymerRadioGroup = __decorate([
    customElement("ct-polymer-radio-group")
], ctPolymerRadioGroup);

export { ctPolymerRadioGroup };