'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">products documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-ff897c5fe6bf8bd79032f4a8b1a43f1b"' : 'data-target="#xs-components-links-module-AppModule-ff897c5fe6bf8bd79032f4a8b1a43f1b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-ff897c5fe6bf8bd79032f4a8b1a43f1b"' :
                                            'id="xs-components-links-module-AppModule-ff897c5fe6bf8bd79032f4a8b1a43f1b"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedAddProductModule.html" data-type="entity-link">SharedAddProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedAddProductModule-5725e1b5b13235e6489e4043351ddfb7"' : 'data-target="#xs-components-links-module-SharedAddProductModule-5725e1b5b13235e6489e4043351ddfb7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedAddProductModule-5725e1b5b13235e6489e4043351ddfb7"' :
                                            'id="xs-components-links-module-SharedAddProductModule-5725e1b5b13235e6489e4043351ddfb7"' }>
                                            <li class="link">
                                                <a href="components/AddProductComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddProductComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedProductListModule.html" data-type="entity-link">SharedProductListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedProductListModule-9f46e541310c8b0e5bfadba44575f472"' : 'data-target="#xs-components-links-module-SharedProductListModule-9f46e541310c8b0e5bfadba44575f472"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedProductListModule-9f46e541310c8b0e5bfadba44575f472"' :
                                            'id="xs-components-links-module-SharedProductListModule-9f46e541310c8b0e5bfadba44575f472"' }>
                                            <li class="link">
                                                <a href="components/ProductListViewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductListViewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AddProduct.html" data-type="entity-link">AddProduct</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddProductStateModel.html" data-type="entity-link">AddProductStateModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteProduct.html" data-type="entity-link">DeleteProduct</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetProducts.html" data-type="entity-link">GetProducts</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetSelectedProduct.html" data-type="entity-link">GetSelectedProduct</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductStateModel.html" data-type="entity-link">ProductStateModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetErrorObj.html" data-type="entity-link">SetErrorObj</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetErrorObj-1.html" data-type="entity-link">SetErrorObj</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetSuccessObj.html" data-type="entity-link">SetSuccessObj</a>
                            </li>
                            <li class="link">
                                <a href="classes/SetSuccessObj-1.html" data-type="entity-link">SetSuccessObj</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProduct.html" data-type="entity-link">UpdateProduct</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AddProductService.html" data-type="entity-link">AddProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AddProductState.html" data-type="entity-link">AddProductState</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductListState.html" data-type="entity-link">ProductListState</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductListViewService.html" data-type="entity-link">ProductListViewService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Chainable.html" data-type="entity-link">Chainable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link">Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product-1.html" data-type="entity-link">Product</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});