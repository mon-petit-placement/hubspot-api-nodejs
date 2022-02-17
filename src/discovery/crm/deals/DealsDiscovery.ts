import * as _ from 'lodash'
import { Configuration, createConfiguration } from '../../../../codegen/crm/deals/configuration'
import {
  AssociationsApi,
  BasicApi,
  BatchApi,
  RequestContext,
  ResponseContext,
  SearchApi,
  SimplePublicObjectWithAssociations,
} from '../../../../codegen/crm/deals/index'
import { Observable } from '../../../../codegen/crm/deals/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import { IConfiguration } from '../../../configuration/IConfiguration'
import { getAll } from '../../../services/getAll'

export class DealsDiscovery {
  public associationsApi: AssociationsApi
  public basicApi: BasicApi
  public batchApi: BatchApi
  public searchApi: SearchApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>
      >(config, Observable, Observable),
    )

    this.associationsApi = new AssociationsApi(configuration)
    this.basicApi = new BasicApi(configuration)
    this.batchApi = new BatchApi(configuration)
    this.searchApi = new SearchApi(configuration)
  }

  public async getAll(
    limit?: number,
    after?: string,
    properties?: string[],
    associations?: string[],
    archived?: boolean,
  ): Promise<SimplePublicObjectWithAssociations[]> {
    return await getAll<SimplePublicObjectWithAssociations, Configuration>(
      this.basicApi,
      limit,
      after,
      properties,
      associations,
      archived,
    )
  }
}