/**
 * ACTION TYPES
*/
export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCESS = '@repositories/LOAD_SUCCESS',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE',
}

/**
 * DATA TYPES
*/
export interface Repository {
  id: number
  name: string
}

/**
 * STATE TYPE
*/
export interface RepositoriesState {
  readonly data: Repository[]
  readonly loading: boolean
  readonly error: boolean
}
