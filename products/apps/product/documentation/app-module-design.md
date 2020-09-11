---
---

# Add/Update Product

## Document History

| **Version Number** |  **Date**  | **Edited by** | **Change/Comments**  |
| :----------------: | :--------: | :-----------: | :------------------: |
|        1.0         | 11-09-2020 |  Deepak Shah  | Intial Documentation |

## 1.0 Document Purpose and target group

This document is a part of the application of products.

## Introduction

```
This is a application which contains two tab i.e, Home and Add product. Home intrgrate the product list feature and Add product integrate the add product feature.
```
## Project Overview

![](media/documentation_overview.PNG)

### Screen (Add Product- 001)

**Layout**

```
The below layout shows the haeder of application.
```
![](media/home.PNG)


**Element Definition**

| **Element Name** |           **Discription**           | **Data Type** | **Label Element** | **Plaveholder Key** | **Displayed** | **Mandatory** | **Enabled** | **Default** | **Tab Order** |
| :--------------: | :---------------------------------: | :-----------: | :---------------: | :-----------------: | :-----------: | :-----------: | :---------: | :---------: | :-----------: |
|       home       | tab for home page i.e, product list |   hyperlink   |        N/A        |         N/A         |     Home      |      Yes      |     Yes     |     N/A     |       0       |
|   add product    |         tab for add product         |   hyperlink   |        N/A        |         N/A         |  Add Product  |      Yes      |     Yes     |     N/A     |       0       |

**Actions**

| **Element Name** | **User Action** |     **System Action**     | **Status** |
| :--------------: | :-------------: | :-----------------------: | :--------: |
|       home       |      Click      | open product list feature |  Enabled   |
|   add product    |      Click      | open add product feature  |  Enabled   |

**Localization**

| **Element** | **Localization Key** | **English Text** | **Other language Text** |
| :---------: | :------------------: | :--------------: | :---------------------: |
|     N/A     |         N/A          |       N/A        |           N/A           |

**Error Message**

| **Discription** | **Trigger** |
| :-------------: | :---------: |
|       N/A       |     N/A     |

## Dependency

App contains two feature which mentioned at below links:

[Product list](../../../libs/shared/product-list/documentation/product-list-module-design.md)

[Add Product](../../../libs/shared/add-product/documentation/add-product-module-design.md)
