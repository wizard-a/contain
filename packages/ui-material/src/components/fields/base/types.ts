// export interface BaseWrapperInterface {
// }

export enum BaseFieldStatus {
  normal = 'normal',
  disable = 'disable',
  readonly = 'readonly',
}

export type BaseField = {

  status: BaseFieldStatus;

}
