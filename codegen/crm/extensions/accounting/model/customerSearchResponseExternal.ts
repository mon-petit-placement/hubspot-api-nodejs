/**
 * Accounting Extension
 * These APIs allow you to interact with HubSpot\'s Accounting Extension. It allows you to: * Specify the URLs that HubSpot will use when making webhook requests to your external accounting system. * Respond to webhook calls made to your external accounting system by HubSpot 
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { AccountingExtensionCustomer } from './accountingExtensionCustomer';

/**
* A response to a search for customers.
*/
export class CustomerSearchResponseExternal {
    /**
    * Designates if the response is a success (\'OK\') or failure (\'ERR\').
    */
    'result': CustomerSearchResponseExternal.ResultEnum;
    /**
    * The list of customers that matched the search criteria.
    */
    'customers': Array<AccountingExtensionCustomer>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "result",
            "baseName": "@result",
            "type": "CustomerSearchResponseExternal.ResultEnum"
        },
        {
            "name": "customers",
            "baseName": "customers",
            "type": "Array<AccountingExtensionCustomer>"
        }    ];

    static getAttributeTypeMap() {
        return CustomerSearchResponseExternal.attributeTypeMap;
    }
}

export namespace CustomerSearchResponseExternal {
    export enum ResultEnum {
        OK = <any> 'OK',
        ERR = <any> 'ERR'
    }
}