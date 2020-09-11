---
---

# Add/Update Product

## Document History

| **Version Number** |  **Date**  | **Edited by** |  **Change/Comments**  |
| :----------------: | :--------: | :-----------: | :-------------------: |
|        1.0         | 11-09-2020 |  Deepak Shah  | Initial Documentation |

## Introduction

```
This is a feature which can be inject in any of the angular application.
This feature allow to add and update the product. this require uuid(product Id) to update product.
```

## Preconditions

To integrate this feature we need to add dependency into application module file along with route file.
{ path: 'addProduct/:id', loadChildren: () => import('@new/shared/add-product').then((m) => m.SharedAddProductModule) }

OR

<products-add-product></products-add-product>

For Product update, need uuid(Product Id)

## Logic

**Add Product**
In add product adding new product in to list.for this we have one feature called add-product.
In this feature created object of product details and sending call to state.
In NGXS, states are classes along with decorators to describe metadata and action mappings. So created a states folder inside src >> app and inside that folder, created one file called
add product state and one action file into same folder.
one more folder called services.in this class all https request (get,patch,delete,set,post) available.
component to state passing data to service.

overview of state
![](media/ngxs.PNG)

The store is a global state manager that dispatches actions your state containers listen to and provides a way to select data slices out from the global state.

# Select

in component data binding through @select.
Selects are functions that slice a specific portion of state from the global state container.
In NGXS, there are two methods to select state, we can either call the select method on the Store service or use the @Select decorator. First let's look at the @Select decorator.


in component data binding through @select

@Select(AddProductState.getErrorObj) errorObj: Observable<Product[]>;

# Creating actions

An action example in list-view.actions.ts.

Ex. export class AddProduct {
    static readonly type = AddProductActionType.ADD;
    constructor(public payload: any) {
    }
}

# Dispatching actions from component

    1.Internal action
    2.simple action
    3.action with metadata


# Dispatching actions from component

    1.Internal action
    2.simple action
    3.action with metadata

To dispatch actions, you need to inject the Store service into your component/service and invoke the dispatch function with an action or an array of actions you wish to trigger.like this

Ex.    this.store.dispatch(new AddProduct(products))

# Defining a State

States are classes along with decorators to describe metadata and action mappings.

After dispatch it will go to action then state after that it will call http call from service


Ex.    return this.http.post<Product>('https://comlyn.com/rnd/api/product', payload);

1st way to add
for this feature we need to add
{ path: 'addProduct/:id', loadChildren: () => import('@new/shared/add-product').then((m) => m.SharedAddProductModule) }

2nd way to add
<products-add-product></products-add-product>

**Update Product**
In edit product updating new product in to list.for this we have one feature called add-product.
In this feature updating object of product details and sending call to state.
In NGXS, states are classes along with decorators to describe metadata and action mappings. So created a states folder inside src >> app and inside that folder, created one file called
add product state and one action file into same folder.
one more folder called services.in this class all https request (get,patch,delete,set,post) available.
component to state passing data to service.
here we have one feature which will do update and add both.

The store is a global state manager that dispatches actions your state containers listen to and provides a way to select data slices out from the global state.

# Select

in component data binding through @select.
Selects are functions that slice a specific portion of state from the global state container.
In NGXS, there are two methods to select state, we can either call the select method on the Store service or use the @Select decorator. First let's look at the @Select decorator.

Select Decorators
Ex. @Select(AddProductState.getErrorObj) errorObj: Observable<Product[]>;

Store Select Function
Ex. this.store.select(state => state.getErrorObj)

# Creating actions

An action example in list-view.actions.ts.

Ex. export class UpdateProduct {
static readonly type = AddProductActionType.UPDATE;
constructor(public payload: any, public id: string) {
}
}

# Dispatching actions from component

    1.Internal action
    2.simple action
    3.action with metadata

To dispatch actions, you need to inject the Store service into your component/service and invoke the dispatch function with an action or an array of actions you wish to trigger.like this

Ex. this.store.dispatch(new UpdateProduct(products, this.uuid))

# Defining a State

States are classes along with decorators to describe metadata and action mappings.

After dispatch it will go to action then state after that it will call http call from service

Ex. return this.http.patch<Product>(`https://comlyn.com/rnd/api/product/${uuid}`, payload);

# Snapshots

You can get a snapshot of the state by calling store.snapshot(). This will return the entire value of the store for that point in time.

Ex. const selectedProduct = this.store.selectSnapshot(AddProductState.getSelectedProduct);

1st way to add
for this feature we need to add
Ex. { path: 'addProduct/:id', loadChildren: () => import('@new/shared/add-product').then((m) => m.SharedAddProductModule) }

2nd way to add
<products-add-product></products-add-product>

## Post-conditions

After completion of call data will add into database.
