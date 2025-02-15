import {Update as OUpdate} from '../Object/Update'
import {Cast} from '../Any/Cast'
import {Index} from '../_Internal'

/** Update in **`T`** the entries of key **`K`** with **`A`**
 * @param T to update
 * @param K to chose fields
 * @param A to update with
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Update<T extends any[], K extends Index, A extends any> =
    Cast<OUpdate<T, K, A>, any[]>
