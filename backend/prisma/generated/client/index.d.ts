
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model PropertyListing
 * 
 */
export type PropertyListing = $Result.DefaultSelection<Prisma.$PropertyListingPayload>
/**
 * Model RentalIncome
 * 
 */
export type RentalIncome = $Result.DefaultSelection<Prisma.$RentalIncomePayload>
/**
 * Model InterestExpense
 * 
 */
export type InterestExpense = $Result.DefaultSelection<Prisma.$InterestExpensePayload>
/**
 * Model CapitalRepayments
 * 
 */
export type CapitalRepayments = $Result.DefaultSelection<Prisma.$CapitalRepaymentsPayload>
/**
 * Model DisallowableExpenses
 * 
 */
export type DisallowableExpenses = $Result.DefaultSelection<Prisma.$DisallowableExpensesPayload>
/**
 * Model AllowableExpenses
 * 
 */
export type AllowableExpenses = $Result.DefaultSelection<Prisma.$AllowableExpensesPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PropertyListings
 * const propertyListings = await prisma.propertyListing.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more PropertyListings
   * const propertyListings = await prisma.propertyListing.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.propertyListing`: Exposes CRUD operations for the **PropertyListing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyListings
    * const propertyListings = await prisma.propertyListing.findMany()
    * ```
    */
  get propertyListing(): Prisma.PropertyListingDelegate<ExtArgs>;

  /**
   * `prisma.rentalIncome`: Exposes CRUD operations for the **RentalIncome** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RentalIncomes
    * const rentalIncomes = await prisma.rentalIncome.findMany()
    * ```
    */
  get rentalIncome(): Prisma.RentalIncomeDelegate<ExtArgs>;

  /**
   * `prisma.interestExpense`: Exposes CRUD operations for the **InterestExpense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InterestExpenses
    * const interestExpenses = await prisma.interestExpense.findMany()
    * ```
    */
  get interestExpense(): Prisma.InterestExpenseDelegate<ExtArgs>;

  /**
   * `prisma.capitalRepayments`: Exposes CRUD operations for the **CapitalRepayments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CapitalRepayments
    * const capitalRepayments = await prisma.capitalRepayments.findMany()
    * ```
    */
  get capitalRepayments(): Prisma.CapitalRepaymentsDelegate<ExtArgs>;

  /**
   * `prisma.disallowableExpenses`: Exposes CRUD operations for the **DisallowableExpenses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DisallowableExpenses
    * const disallowableExpenses = await prisma.disallowableExpenses.findMany()
    * ```
    */
  get disallowableExpenses(): Prisma.DisallowableExpensesDelegate<ExtArgs>;

  /**
   * `prisma.allowableExpenses`: Exposes CRUD operations for the **AllowableExpenses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AllowableExpenses
    * const allowableExpenses = await prisma.allowableExpenses.findMany()
    * ```
    */
  get allowableExpenses(): Prisma.AllowableExpensesDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    PropertyListing: 'PropertyListing',
    RentalIncome: 'RentalIncome',
    InterestExpense: 'InterestExpense',
    CapitalRepayments: 'CapitalRepayments',
    DisallowableExpenses: 'DisallowableExpenses',
    AllowableExpenses: 'AllowableExpenses'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'propertyListing' | 'rentalIncome' | 'interestExpense' | 'capitalRepayments' | 'disallowableExpenses' | 'allowableExpenses'
      txIsolationLevel: never
    },
    model: {
      PropertyListing: {
        payload: Prisma.$PropertyListingPayload<ExtArgs>
        fields: Prisma.PropertyListingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyListingFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyListingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyListingFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyListingPayload>
          }
          findFirst: {
            args: Prisma.PropertyListingFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyListingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyListingFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyListingPayload>
          }
          findMany: {
            args: Prisma.PropertyListingFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyListingPayload>[]
          }
          create: {
            args: Prisma.PropertyListingCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyListingPayload>
          }
          createMany: {
            args: Prisma.PropertyListingCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PropertyListingDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyListingPayload>
          }
          update: {
            args: Prisma.PropertyListingUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyListingPayload>
          }
          deleteMany: {
            args: Prisma.PropertyListingDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyListingUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PropertyListingUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropertyListingPayload>
          }
          aggregate: {
            args: Prisma.PropertyListingAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePropertyListing>
          }
          groupBy: {
            args: Prisma.PropertyListingGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PropertyListingGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PropertyListingFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.PropertyListingAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.PropertyListingCountArgs<ExtArgs>,
            result: $Utils.Optional<PropertyListingCountAggregateOutputType> | number
          }
        }
      }
      RentalIncome: {
        payload: Prisma.$RentalIncomePayload<ExtArgs>
        fields: Prisma.RentalIncomeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RentalIncomeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RentalIncomePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RentalIncomeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RentalIncomePayload>
          }
          findFirst: {
            args: Prisma.RentalIncomeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RentalIncomePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RentalIncomeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RentalIncomePayload>
          }
          findMany: {
            args: Prisma.RentalIncomeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RentalIncomePayload>[]
          }
          create: {
            args: Prisma.RentalIncomeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RentalIncomePayload>
          }
          createMany: {
            args: Prisma.RentalIncomeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RentalIncomeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RentalIncomePayload>
          }
          update: {
            args: Prisma.RentalIncomeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RentalIncomePayload>
          }
          deleteMany: {
            args: Prisma.RentalIncomeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RentalIncomeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RentalIncomeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RentalIncomePayload>
          }
          aggregate: {
            args: Prisma.RentalIncomeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRentalIncome>
          }
          groupBy: {
            args: Prisma.RentalIncomeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RentalIncomeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RentalIncomeFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.RentalIncomeAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.RentalIncomeCountArgs<ExtArgs>,
            result: $Utils.Optional<RentalIncomeCountAggregateOutputType> | number
          }
        }
      }
      InterestExpense: {
        payload: Prisma.$InterestExpensePayload<ExtArgs>
        fields: Prisma.InterestExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterestExpenseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InterestExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterestExpenseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InterestExpensePayload>
          }
          findFirst: {
            args: Prisma.InterestExpenseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InterestExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterestExpenseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InterestExpensePayload>
          }
          findMany: {
            args: Prisma.InterestExpenseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InterestExpensePayload>[]
          }
          create: {
            args: Prisma.InterestExpenseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InterestExpensePayload>
          }
          createMany: {
            args: Prisma.InterestExpenseCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.InterestExpenseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InterestExpensePayload>
          }
          update: {
            args: Prisma.InterestExpenseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InterestExpensePayload>
          }
          deleteMany: {
            args: Prisma.InterestExpenseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.InterestExpenseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.InterestExpenseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InterestExpensePayload>
          }
          aggregate: {
            args: Prisma.InterestExpenseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInterestExpense>
          }
          groupBy: {
            args: Prisma.InterestExpenseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InterestExpenseGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.InterestExpenseFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.InterestExpenseAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.InterestExpenseCountArgs<ExtArgs>,
            result: $Utils.Optional<InterestExpenseCountAggregateOutputType> | number
          }
        }
      }
      CapitalRepayments: {
        payload: Prisma.$CapitalRepaymentsPayload<ExtArgs>
        fields: Prisma.CapitalRepaymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CapitalRepaymentsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CapitalRepaymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CapitalRepaymentsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CapitalRepaymentsPayload>
          }
          findFirst: {
            args: Prisma.CapitalRepaymentsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CapitalRepaymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CapitalRepaymentsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CapitalRepaymentsPayload>
          }
          findMany: {
            args: Prisma.CapitalRepaymentsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CapitalRepaymentsPayload>[]
          }
          create: {
            args: Prisma.CapitalRepaymentsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CapitalRepaymentsPayload>
          }
          createMany: {
            args: Prisma.CapitalRepaymentsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CapitalRepaymentsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CapitalRepaymentsPayload>
          }
          update: {
            args: Prisma.CapitalRepaymentsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CapitalRepaymentsPayload>
          }
          deleteMany: {
            args: Prisma.CapitalRepaymentsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CapitalRepaymentsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CapitalRepaymentsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CapitalRepaymentsPayload>
          }
          aggregate: {
            args: Prisma.CapitalRepaymentsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCapitalRepayments>
          }
          groupBy: {
            args: Prisma.CapitalRepaymentsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CapitalRepaymentsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CapitalRepaymentsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.CapitalRepaymentsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.CapitalRepaymentsCountArgs<ExtArgs>,
            result: $Utils.Optional<CapitalRepaymentsCountAggregateOutputType> | number
          }
        }
      }
      DisallowableExpenses: {
        payload: Prisma.$DisallowableExpensesPayload<ExtArgs>
        fields: Prisma.DisallowableExpensesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisallowableExpensesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DisallowableExpensesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisallowableExpensesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DisallowableExpensesPayload>
          }
          findFirst: {
            args: Prisma.DisallowableExpensesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DisallowableExpensesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisallowableExpensesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DisallowableExpensesPayload>
          }
          findMany: {
            args: Prisma.DisallowableExpensesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DisallowableExpensesPayload>[]
          }
          create: {
            args: Prisma.DisallowableExpensesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DisallowableExpensesPayload>
          }
          createMany: {
            args: Prisma.DisallowableExpensesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DisallowableExpensesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DisallowableExpensesPayload>
          }
          update: {
            args: Prisma.DisallowableExpensesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DisallowableExpensesPayload>
          }
          deleteMany: {
            args: Prisma.DisallowableExpensesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DisallowableExpensesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DisallowableExpensesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DisallowableExpensesPayload>
          }
          aggregate: {
            args: Prisma.DisallowableExpensesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDisallowableExpenses>
          }
          groupBy: {
            args: Prisma.DisallowableExpensesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DisallowableExpensesGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DisallowableExpensesFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.DisallowableExpensesAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.DisallowableExpensesCountArgs<ExtArgs>,
            result: $Utils.Optional<DisallowableExpensesCountAggregateOutputType> | number
          }
        }
      }
      AllowableExpenses: {
        payload: Prisma.$AllowableExpensesPayload<ExtArgs>
        fields: Prisma.AllowableExpensesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AllowableExpensesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AllowableExpensesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AllowableExpensesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AllowableExpensesPayload>
          }
          findFirst: {
            args: Prisma.AllowableExpensesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AllowableExpensesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AllowableExpensesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AllowableExpensesPayload>
          }
          findMany: {
            args: Prisma.AllowableExpensesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AllowableExpensesPayload>[]
          }
          create: {
            args: Prisma.AllowableExpensesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AllowableExpensesPayload>
          }
          createMany: {
            args: Prisma.AllowableExpensesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AllowableExpensesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AllowableExpensesPayload>
          }
          update: {
            args: Prisma.AllowableExpensesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AllowableExpensesPayload>
          }
          deleteMany: {
            args: Prisma.AllowableExpensesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AllowableExpensesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AllowableExpensesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AllowableExpensesPayload>
          }
          aggregate: {
            args: Prisma.AllowableExpensesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAllowableExpenses>
          }
          groupBy: {
            args: Prisma.AllowableExpensesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AllowableExpensesGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AllowableExpensesFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.AllowableExpensesAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.AllowableExpensesCountArgs<ExtArgs>,
            result: $Utils.Optional<AllowableExpensesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model PropertyListing
   */

  export type AggregatePropertyListing = {
    _count: PropertyListingCountAggregateOutputType | null
    _min: PropertyListingMinAggregateOutputType | null
    _max: PropertyListingMaxAggregateOutputType | null
  }

  export type PropertyListingMinAggregateOutputType = {
    ID: string | null
    PropertyName: string | null
  }

  export type PropertyListingMaxAggregateOutputType = {
    ID: string | null
    PropertyName: string | null
  }

  export type PropertyListingCountAggregateOutputType = {
    ID: number
    PropertyName: number
    _all: number
  }


  export type PropertyListingMinAggregateInputType = {
    ID?: true
    PropertyName?: true
  }

  export type PropertyListingMaxAggregateInputType = {
    ID?: true
    PropertyName?: true
  }

  export type PropertyListingCountAggregateInputType = {
    ID?: true
    PropertyName?: true
    _all?: true
  }

  export type PropertyListingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyListing to aggregate.
     */
    where?: PropertyListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyListings to fetch.
     */
    orderBy?: PropertyListingOrderByWithRelationInput | PropertyListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyListings
    **/
    _count?: true | PropertyListingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyListingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyListingMaxAggregateInputType
  }

  export type GetPropertyListingAggregateType<T extends PropertyListingAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyListing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyListing[P]>
      : GetScalarType<T[P], AggregatePropertyListing[P]>
  }




  export type PropertyListingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyListingWhereInput
    orderBy?: PropertyListingOrderByWithAggregationInput | PropertyListingOrderByWithAggregationInput[]
    by: PropertyListingScalarFieldEnum[] | PropertyListingScalarFieldEnum
    having?: PropertyListingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyListingCountAggregateInputType | true
    _min?: PropertyListingMinAggregateInputType
    _max?: PropertyListingMaxAggregateInputType
  }

  export type PropertyListingGroupByOutputType = {
    ID: string
    PropertyName: string
    _count: PropertyListingCountAggregateOutputType | null
    _min: PropertyListingMinAggregateOutputType | null
    _max: PropertyListingMaxAggregateOutputType | null
  }

  type GetPropertyListingGroupByPayload<T extends PropertyListingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyListingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyListingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyListingGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyListingGroupByOutputType[P]>
        }
      >
    >


  export type PropertyListingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    PropertyName?: boolean
  }, ExtArgs["result"]["propertyListing"]>

  export type PropertyListingSelectScalar = {
    ID?: boolean
    PropertyName?: boolean
  }


  export type $PropertyListingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyListing"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: string
      PropertyName: string
    }, ExtArgs["result"]["propertyListing"]>
    composites: {}
  }


  type PropertyListingGetPayload<S extends boolean | null | undefined | PropertyListingDefaultArgs> = $Result.GetResult<Prisma.$PropertyListingPayload, S>

  type PropertyListingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PropertyListingFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PropertyListingCountAggregateInputType | true
    }

  export interface PropertyListingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyListing'], meta: { name: 'PropertyListing' } }
    /**
     * Find zero or one PropertyListing that matches the filter.
     * @param {PropertyListingFindUniqueArgs} args - Arguments to find a PropertyListing
     * @example
     * // Get one PropertyListing
     * const propertyListing = await prisma.propertyListing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PropertyListingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PropertyListingFindUniqueArgs<ExtArgs>>
    ): Prisma__PropertyListingClient<$Result.GetResult<Prisma.$PropertyListingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PropertyListing that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PropertyListingFindUniqueOrThrowArgs} args - Arguments to find a PropertyListing
     * @example
     * // Get one PropertyListing
     * const propertyListing = await prisma.propertyListing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PropertyListingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PropertyListingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PropertyListingClient<$Result.GetResult<Prisma.$PropertyListingPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PropertyListing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyListingFindFirstArgs} args - Arguments to find a PropertyListing
     * @example
     * // Get one PropertyListing
     * const propertyListing = await prisma.propertyListing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PropertyListingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PropertyListingFindFirstArgs<ExtArgs>>
    ): Prisma__PropertyListingClient<$Result.GetResult<Prisma.$PropertyListingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PropertyListing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyListingFindFirstOrThrowArgs} args - Arguments to find a PropertyListing
     * @example
     * // Get one PropertyListing
     * const propertyListing = await prisma.propertyListing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PropertyListingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PropertyListingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PropertyListingClient<$Result.GetResult<Prisma.$PropertyListingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PropertyListings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyListingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyListings
     * const propertyListings = await prisma.propertyListing.findMany()
     * 
     * // Get first 10 PropertyListings
     * const propertyListings = await prisma.propertyListing.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const propertyListingWithIDOnly = await prisma.propertyListing.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends PropertyListingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PropertyListingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyListingPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PropertyListing.
     * @param {PropertyListingCreateArgs} args - Arguments to create a PropertyListing.
     * @example
     * // Create one PropertyListing
     * const PropertyListing = await prisma.propertyListing.create({
     *   data: {
     *     // ... data to create a PropertyListing
     *   }
     * })
     * 
    **/
    create<T extends PropertyListingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PropertyListingCreateArgs<ExtArgs>>
    ): Prisma__PropertyListingClient<$Result.GetResult<Prisma.$PropertyListingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PropertyListings.
     *     @param {PropertyListingCreateManyArgs} args - Arguments to create many PropertyListings.
     *     @example
     *     // Create many PropertyListings
     *     const propertyListing = await prisma.propertyListing.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PropertyListingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PropertyListingCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PropertyListing.
     * @param {PropertyListingDeleteArgs} args - Arguments to delete one PropertyListing.
     * @example
     * // Delete one PropertyListing
     * const PropertyListing = await prisma.propertyListing.delete({
     *   where: {
     *     // ... filter to delete one PropertyListing
     *   }
     * })
     * 
    **/
    delete<T extends PropertyListingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PropertyListingDeleteArgs<ExtArgs>>
    ): Prisma__PropertyListingClient<$Result.GetResult<Prisma.$PropertyListingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PropertyListing.
     * @param {PropertyListingUpdateArgs} args - Arguments to update one PropertyListing.
     * @example
     * // Update one PropertyListing
     * const propertyListing = await prisma.propertyListing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PropertyListingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PropertyListingUpdateArgs<ExtArgs>>
    ): Prisma__PropertyListingClient<$Result.GetResult<Prisma.$PropertyListingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PropertyListings.
     * @param {PropertyListingDeleteManyArgs} args - Arguments to filter PropertyListings to delete.
     * @example
     * // Delete a few PropertyListings
     * const { count } = await prisma.propertyListing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PropertyListingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PropertyListingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyListings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyListingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyListings
     * const propertyListing = await prisma.propertyListing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PropertyListingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PropertyListingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PropertyListing.
     * @param {PropertyListingUpsertArgs} args - Arguments to update or create a PropertyListing.
     * @example
     * // Update or create a PropertyListing
     * const propertyListing = await prisma.propertyListing.upsert({
     *   create: {
     *     // ... data to create a PropertyListing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyListing we want to update
     *   }
     * })
    **/
    upsert<T extends PropertyListingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PropertyListingUpsertArgs<ExtArgs>>
    ): Prisma__PropertyListingClient<$Result.GetResult<Prisma.$PropertyListingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more PropertyListings that matches the filter.
     * @param {PropertyListingFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const propertyListing = await prisma.propertyListing.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: PropertyListingFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PropertyListing.
     * @param {PropertyListingAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const propertyListing = await prisma.propertyListing.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: PropertyListingAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of PropertyListings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyListingCountArgs} args - Arguments to filter PropertyListings to count.
     * @example
     * // Count the number of PropertyListings
     * const count = await prisma.propertyListing.count({
     *   where: {
     *     // ... the filter for the PropertyListings we want to count
     *   }
     * })
    **/
    count<T extends PropertyListingCountArgs>(
      args?: Subset<T, PropertyListingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyListingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyListing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyListingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyListingAggregateArgs>(args: Subset<T, PropertyListingAggregateArgs>): Prisma.PrismaPromise<GetPropertyListingAggregateType<T>>

    /**
     * Group by PropertyListing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyListingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyListingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyListingGroupByArgs['orderBy'] }
        : { orderBy?: PropertyListingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyListingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyListingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyListing model
   */
  readonly fields: PropertyListingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyListing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyListingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PropertyListing model
   */ 
  interface PropertyListingFieldRefs {
    readonly ID: FieldRef<"PropertyListing", 'String'>
    readonly PropertyName: FieldRef<"PropertyListing", 'String'>
  }
    

  // Custom InputTypes

  /**
   * PropertyListing findUnique
   */
  export type PropertyListingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyListing
     */
    select?: PropertyListingSelect<ExtArgs> | null
    /**
     * Filter, which PropertyListing to fetch.
     */
    where: PropertyListingWhereUniqueInput
  }


  /**
   * PropertyListing findUniqueOrThrow
   */
  export type PropertyListingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyListing
     */
    select?: PropertyListingSelect<ExtArgs> | null
    /**
     * Filter, which PropertyListing to fetch.
     */
    where: PropertyListingWhereUniqueInput
  }


  /**
   * PropertyListing findFirst
   */
  export type PropertyListingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyListing
     */
    select?: PropertyListingSelect<ExtArgs> | null
    /**
     * Filter, which PropertyListing to fetch.
     */
    where?: PropertyListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyListings to fetch.
     */
    orderBy?: PropertyListingOrderByWithRelationInput | PropertyListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyListings.
     */
    cursor?: PropertyListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyListings.
     */
    distinct?: PropertyListingScalarFieldEnum | PropertyListingScalarFieldEnum[]
  }


  /**
   * PropertyListing findFirstOrThrow
   */
  export type PropertyListingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyListing
     */
    select?: PropertyListingSelect<ExtArgs> | null
    /**
     * Filter, which PropertyListing to fetch.
     */
    where?: PropertyListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyListings to fetch.
     */
    orderBy?: PropertyListingOrderByWithRelationInput | PropertyListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyListings.
     */
    cursor?: PropertyListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyListings.
     */
    distinct?: PropertyListingScalarFieldEnum | PropertyListingScalarFieldEnum[]
  }


  /**
   * PropertyListing findMany
   */
  export type PropertyListingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyListing
     */
    select?: PropertyListingSelect<ExtArgs> | null
    /**
     * Filter, which PropertyListings to fetch.
     */
    where?: PropertyListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyListings to fetch.
     */
    orderBy?: PropertyListingOrderByWithRelationInput | PropertyListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyListings.
     */
    cursor?: PropertyListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyListings.
     */
    skip?: number
    distinct?: PropertyListingScalarFieldEnum | PropertyListingScalarFieldEnum[]
  }


  /**
   * PropertyListing create
   */
  export type PropertyListingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyListing
     */
    select?: PropertyListingSelect<ExtArgs> | null
    /**
     * The data needed to create a PropertyListing.
     */
    data: XOR<PropertyListingCreateInput, PropertyListingUncheckedCreateInput>
  }


  /**
   * PropertyListing createMany
   */
  export type PropertyListingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyListings.
     */
    data: PropertyListingCreateManyInput | PropertyListingCreateManyInput[]
  }


  /**
   * PropertyListing update
   */
  export type PropertyListingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyListing
     */
    select?: PropertyListingSelect<ExtArgs> | null
    /**
     * The data needed to update a PropertyListing.
     */
    data: XOR<PropertyListingUpdateInput, PropertyListingUncheckedUpdateInput>
    /**
     * Choose, which PropertyListing to update.
     */
    where: PropertyListingWhereUniqueInput
  }


  /**
   * PropertyListing updateMany
   */
  export type PropertyListingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyListings.
     */
    data: XOR<PropertyListingUpdateManyMutationInput, PropertyListingUncheckedUpdateManyInput>
    /**
     * Filter which PropertyListings to update
     */
    where?: PropertyListingWhereInput
  }


  /**
   * PropertyListing upsert
   */
  export type PropertyListingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyListing
     */
    select?: PropertyListingSelect<ExtArgs> | null
    /**
     * The filter to search for the PropertyListing to update in case it exists.
     */
    where: PropertyListingWhereUniqueInput
    /**
     * In case the PropertyListing found by the `where` argument doesn't exist, create a new PropertyListing with this data.
     */
    create: XOR<PropertyListingCreateInput, PropertyListingUncheckedCreateInput>
    /**
     * In case the PropertyListing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyListingUpdateInput, PropertyListingUncheckedUpdateInput>
  }


  /**
   * PropertyListing delete
   */
  export type PropertyListingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyListing
     */
    select?: PropertyListingSelect<ExtArgs> | null
    /**
     * Filter which PropertyListing to delete.
     */
    where: PropertyListingWhereUniqueInput
  }


  /**
   * PropertyListing deleteMany
   */
  export type PropertyListingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyListings to delete
     */
    where?: PropertyListingWhereInput
  }


  /**
   * PropertyListing findRaw
   */
  export type PropertyListingFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * PropertyListing aggregateRaw
   */
  export type PropertyListingAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * PropertyListing without action
   */
  export type PropertyListingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyListing
     */
    select?: PropertyListingSelect<ExtArgs> | null
  }



  /**
   * Model RentalIncome
   */

  export type AggregateRentalIncome = {
    _count: RentalIncomeCountAggregateOutputType | null
    _avg: RentalIncomeAvgAggregateOutputType | null
    _sum: RentalIncomeSumAggregateOutputType | null
    _min: RentalIncomeMinAggregateOutputType | null
    _max: RentalIncomeMaxAggregateOutputType | null
  }

  export type RentalIncomeAvgAggregateOutputType = {
    Rental: number | null
  }

  export type RentalIncomeSumAggregateOutputType = {
    Rental: number | null
  }

  export type RentalIncomeMinAggregateOutputType = {
    ID: string | null
    StartPeriod: string | null
    EndPeriod: string | null
    Rental: number | null
    PropertyID: string | null
  }

  export type RentalIncomeMaxAggregateOutputType = {
    ID: string | null
    StartPeriod: string | null
    EndPeriod: string | null
    Rental: number | null
    PropertyID: string | null
  }

  export type RentalIncomeCountAggregateOutputType = {
    ID: number
    StartPeriod: number
    EndPeriod: number
    Rental: number
    PropertyID: number
    _all: number
  }


  export type RentalIncomeAvgAggregateInputType = {
    Rental?: true
  }

  export type RentalIncomeSumAggregateInputType = {
    Rental?: true
  }

  export type RentalIncomeMinAggregateInputType = {
    ID?: true
    StartPeriod?: true
    EndPeriod?: true
    Rental?: true
    PropertyID?: true
  }

  export type RentalIncomeMaxAggregateInputType = {
    ID?: true
    StartPeriod?: true
    EndPeriod?: true
    Rental?: true
    PropertyID?: true
  }

  export type RentalIncomeCountAggregateInputType = {
    ID?: true
    StartPeriod?: true
    EndPeriod?: true
    Rental?: true
    PropertyID?: true
    _all?: true
  }

  export type RentalIncomeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentalIncome to aggregate.
     */
    where?: RentalIncomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalIncomes to fetch.
     */
    orderBy?: RentalIncomeOrderByWithRelationInput | RentalIncomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RentalIncomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalIncomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalIncomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RentalIncomes
    **/
    _count?: true | RentalIncomeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RentalIncomeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RentalIncomeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentalIncomeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentalIncomeMaxAggregateInputType
  }

  export type GetRentalIncomeAggregateType<T extends RentalIncomeAggregateArgs> = {
        [P in keyof T & keyof AggregateRentalIncome]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRentalIncome[P]>
      : GetScalarType<T[P], AggregateRentalIncome[P]>
  }




  export type RentalIncomeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalIncomeWhereInput
    orderBy?: RentalIncomeOrderByWithAggregationInput | RentalIncomeOrderByWithAggregationInput[]
    by: RentalIncomeScalarFieldEnum[] | RentalIncomeScalarFieldEnum
    having?: RentalIncomeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentalIncomeCountAggregateInputType | true
    _avg?: RentalIncomeAvgAggregateInputType
    _sum?: RentalIncomeSumAggregateInputType
    _min?: RentalIncomeMinAggregateInputType
    _max?: RentalIncomeMaxAggregateInputType
  }

  export type RentalIncomeGroupByOutputType = {
    ID: string
    StartPeriod: string
    EndPeriod: string
    Rental: number
    PropertyID: string
    _count: RentalIncomeCountAggregateOutputType | null
    _avg: RentalIncomeAvgAggregateOutputType | null
    _sum: RentalIncomeSumAggregateOutputType | null
    _min: RentalIncomeMinAggregateOutputType | null
    _max: RentalIncomeMaxAggregateOutputType | null
  }

  type GetRentalIncomeGroupByPayload<T extends RentalIncomeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentalIncomeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentalIncomeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentalIncomeGroupByOutputType[P]>
            : GetScalarType<T[P], RentalIncomeGroupByOutputType[P]>
        }
      >
    >


  export type RentalIncomeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    StartPeriod?: boolean
    EndPeriod?: boolean
    Rental?: boolean
    PropertyID?: boolean
  }, ExtArgs["result"]["rentalIncome"]>

  export type RentalIncomeSelectScalar = {
    ID?: boolean
    StartPeriod?: boolean
    EndPeriod?: boolean
    Rental?: boolean
    PropertyID?: boolean
  }


  export type $RentalIncomePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RentalIncome"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: string
      StartPeriod: string
      EndPeriod: string
      Rental: number
      PropertyID: string
    }, ExtArgs["result"]["rentalIncome"]>
    composites: {}
  }


  type RentalIncomeGetPayload<S extends boolean | null | undefined | RentalIncomeDefaultArgs> = $Result.GetResult<Prisma.$RentalIncomePayload, S>

  type RentalIncomeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RentalIncomeFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: RentalIncomeCountAggregateInputType | true
    }

  export interface RentalIncomeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RentalIncome'], meta: { name: 'RentalIncome' } }
    /**
     * Find zero or one RentalIncome that matches the filter.
     * @param {RentalIncomeFindUniqueArgs} args - Arguments to find a RentalIncome
     * @example
     * // Get one RentalIncome
     * const rentalIncome = await prisma.rentalIncome.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RentalIncomeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RentalIncomeFindUniqueArgs<ExtArgs>>
    ): Prisma__RentalIncomeClient<$Result.GetResult<Prisma.$RentalIncomePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one RentalIncome that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RentalIncomeFindUniqueOrThrowArgs} args - Arguments to find a RentalIncome
     * @example
     * // Get one RentalIncome
     * const rentalIncome = await prisma.rentalIncome.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RentalIncomeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RentalIncomeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RentalIncomeClient<$Result.GetResult<Prisma.$RentalIncomePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first RentalIncome that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalIncomeFindFirstArgs} args - Arguments to find a RentalIncome
     * @example
     * // Get one RentalIncome
     * const rentalIncome = await prisma.rentalIncome.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RentalIncomeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RentalIncomeFindFirstArgs<ExtArgs>>
    ): Prisma__RentalIncomeClient<$Result.GetResult<Prisma.$RentalIncomePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first RentalIncome that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalIncomeFindFirstOrThrowArgs} args - Arguments to find a RentalIncome
     * @example
     * // Get one RentalIncome
     * const rentalIncome = await prisma.rentalIncome.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RentalIncomeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RentalIncomeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RentalIncomeClient<$Result.GetResult<Prisma.$RentalIncomePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more RentalIncomes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalIncomeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RentalIncomes
     * const rentalIncomes = await prisma.rentalIncome.findMany()
     * 
     * // Get first 10 RentalIncomes
     * const rentalIncomes = await prisma.rentalIncome.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const rentalIncomeWithIDOnly = await prisma.rentalIncome.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends RentalIncomeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RentalIncomeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalIncomePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a RentalIncome.
     * @param {RentalIncomeCreateArgs} args - Arguments to create a RentalIncome.
     * @example
     * // Create one RentalIncome
     * const RentalIncome = await prisma.rentalIncome.create({
     *   data: {
     *     // ... data to create a RentalIncome
     *   }
     * })
     * 
    **/
    create<T extends RentalIncomeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RentalIncomeCreateArgs<ExtArgs>>
    ): Prisma__RentalIncomeClient<$Result.GetResult<Prisma.$RentalIncomePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many RentalIncomes.
     *     @param {RentalIncomeCreateManyArgs} args - Arguments to create many RentalIncomes.
     *     @example
     *     // Create many RentalIncomes
     *     const rentalIncome = await prisma.rentalIncome.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RentalIncomeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RentalIncomeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RentalIncome.
     * @param {RentalIncomeDeleteArgs} args - Arguments to delete one RentalIncome.
     * @example
     * // Delete one RentalIncome
     * const RentalIncome = await prisma.rentalIncome.delete({
     *   where: {
     *     // ... filter to delete one RentalIncome
     *   }
     * })
     * 
    **/
    delete<T extends RentalIncomeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RentalIncomeDeleteArgs<ExtArgs>>
    ): Prisma__RentalIncomeClient<$Result.GetResult<Prisma.$RentalIncomePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one RentalIncome.
     * @param {RentalIncomeUpdateArgs} args - Arguments to update one RentalIncome.
     * @example
     * // Update one RentalIncome
     * const rentalIncome = await prisma.rentalIncome.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RentalIncomeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RentalIncomeUpdateArgs<ExtArgs>>
    ): Prisma__RentalIncomeClient<$Result.GetResult<Prisma.$RentalIncomePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more RentalIncomes.
     * @param {RentalIncomeDeleteManyArgs} args - Arguments to filter RentalIncomes to delete.
     * @example
     * // Delete a few RentalIncomes
     * const { count } = await prisma.rentalIncome.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RentalIncomeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RentalIncomeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RentalIncomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalIncomeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RentalIncomes
     * const rentalIncome = await prisma.rentalIncome.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RentalIncomeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RentalIncomeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RentalIncome.
     * @param {RentalIncomeUpsertArgs} args - Arguments to update or create a RentalIncome.
     * @example
     * // Update or create a RentalIncome
     * const rentalIncome = await prisma.rentalIncome.upsert({
     *   create: {
     *     // ... data to create a RentalIncome
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RentalIncome we want to update
     *   }
     * })
    **/
    upsert<T extends RentalIncomeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RentalIncomeUpsertArgs<ExtArgs>>
    ): Prisma__RentalIncomeClient<$Result.GetResult<Prisma.$RentalIncomePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more RentalIncomes that matches the filter.
     * @param {RentalIncomeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const rentalIncome = await prisma.rentalIncome.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: RentalIncomeFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a RentalIncome.
     * @param {RentalIncomeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const rentalIncome = await prisma.rentalIncome.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: RentalIncomeAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of RentalIncomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalIncomeCountArgs} args - Arguments to filter RentalIncomes to count.
     * @example
     * // Count the number of RentalIncomes
     * const count = await prisma.rentalIncome.count({
     *   where: {
     *     // ... the filter for the RentalIncomes we want to count
     *   }
     * })
    **/
    count<T extends RentalIncomeCountArgs>(
      args?: Subset<T, RentalIncomeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentalIncomeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RentalIncome.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalIncomeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RentalIncomeAggregateArgs>(args: Subset<T, RentalIncomeAggregateArgs>): Prisma.PrismaPromise<GetRentalIncomeAggregateType<T>>

    /**
     * Group by RentalIncome.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalIncomeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RentalIncomeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RentalIncomeGroupByArgs['orderBy'] }
        : { orderBy?: RentalIncomeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RentalIncomeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalIncomeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RentalIncome model
   */
  readonly fields: RentalIncomeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RentalIncome.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RentalIncomeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the RentalIncome model
   */ 
  interface RentalIncomeFieldRefs {
    readonly ID: FieldRef<"RentalIncome", 'String'>
    readonly StartPeriod: FieldRef<"RentalIncome", 'String'>
    readonly EndPeriod: FieldRef<"RentalIncome", 'String'>
    readonly Rental: FieldRef<"RentalIncome", 'Int'>
    readonly PropertyID: FieldRef<"RentalIncome", 'String'>
  }
    

  // Custom InputTypes

  /**
   * RentalIncome findUnique
   */
  export type RentalIncomeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalIncome
     */
    select?: RentalIncomeSelect<ExtArgs> | null
    /**
     * Filter, which RentalIncome to fetch.
     */
    where: RentalIncomeWhereUniqueInput
  }


  /**
   * RentalIncome findUniqueOrThrow
   */
  export type RentalIncomeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalIncome
     */
    select?: RentalIncomeSelect<ExtArgs> | null
    /**
     * Filter, which RentalIncome to fetch.
     */
    where: RentalIncomeWhereUniqueInput
  }


  /**
   * RentalIncome findFirst
   */
  export type RentalIncomeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalIncome
     */
    select?: RentalIncomeSelect<ExtArgs> | null
    /**
     * Filter, which RentalIncome to fetch.
     */
    where?: RentalIncomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalIncomes to fetch.
     */
    orderBy?: RentalIncomeOrderByWithRelationInput | RentalIncomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentalIncomes.
     */
    cursor?: RentalIncomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalIncomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalIncomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalIncomes.
     */
    distinct?: RentalIncomeScalarFieldEnum | RentalIncomeScalarFieldEnum[]
  }


  /**
   * RentalIncome findFirstOrThrow
   */
  export type RentalIncomeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalIncome
     */
    select?: RentalIncomeSelect<ExtArgs> | null
    /**
     * Filter, which RentalIncome to fetch.
     */
    where?: RentalIncomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalIncomes to fetch.
     */
    orderBy?: RentalIncomeOrderByWithRelationInput | RentalIncomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentalIncomes.
     */
    cursor?: RentalIncomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalIncomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalIncomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalIncomes.
     */
    distinct?: RentalIncomeScalarFieldEnum | RentalIncomeScalarFieldEnum[]
  }


  /**
   * RentalIncome findMany
   */
  export type RentalIncomeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalIncome
     */
    select?: RentalIncomeSelect<ExtArgs> | null
    /**
     * Filter, which RentalIncomes to fetch.
     */
    where?: RentalIncomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalIncomes to fetch.
     */
    orderBy?: RentalIncomeOrderByWithRelationInput | RentalIncomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RentalIncomes.
     */
    cursor?: RentalIncomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalIncomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalIncomes.
     */
    skip?: number
    distinct?: RentalIncomeScalarFieldEnum | RentalIncomeScalarFieldEnum[]
  }


  /**
   * RentalIncome create
   */
  export type RentalIncomeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalIncome
     */
    select?: RentalIncomeSelect<ExtArgs> | null
    /**
     * The data needed to create a RentalIncome.
     */
    data: XOR<RentalIncomeCreateInput, RentalIncomeUncheckedCreateInput>
  }


  /**
   * RentalIncome createMany
   */
  export type RentalIncomeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RentalIncomes.
     */
    data: RentalIncomeCreateManyInput | RentalIncomeCreateManyInput[]
  }


  /**
   * RentalIncome update
   */
  export type RentalIncomeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalIncome
     */
    select?: RentalIncomeSelect<ExtArgs> | null
    /**
     * The data needed to update a RentalIncome.
     */
    data: XOR<RentalIncomeUpdateInput, RentalIncomeUncheckedUpdateInput>
    /**
     * Choose, which RentalIncome to update.
     */
    where: RentalIncomeWhereUniqueInput
  }


  /**
   * RentalIncome updateMany
   */
  export type RentalIncomeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RentalIncomes.
     */
    data: XOR<RentalIncomeUpdateManyMutationInput, RentalIncomeUncheckedUpdateManyInput>
    /**
     * Filter which RentalIncomes to update
     */
    where?: RentalIncomeWhereInput
  }


  /**
   * RentalIncome upsert
   */
  export type RentalIncomeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalIncome
     */
    select?: RentalIncomeSelect<ExtArgs> | null
    /**
     * The filter to search for the RentalIncome to update in case it exists.
     */
    where: RentalIncomeWhereUniqueInput
    /**
     * In case the RentalIncome found by the `where` argument doesn't exist, create a new RentalIncome with this data.
     */
    create: XOR<RentalIncomeCreateInput, RentalIncomeUncheckedCreateInput>
    /**
     * In case the RentalIncome was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RentalIncomeUpdateInput, RentalIncomeUncheckedUpdateInput>
  }


  /**
   * RentalIncome delete
   */
  export type RentalIncomeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalIncome
     */
    select?: RentalIncomeSelect<ExtArgs> | null
    /**
     * Filter which RentalIncome to delete.
     */
    where: RentalIncomeWhereUniqueInput
  }


  /**
   * RentalIncome deleteMany
   */
  export type RentalIncomeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentalIncomes to delete
     */
    where?: RentalIncomeWhereInput
  }


  /**
   * RentalIncome findRaw
   */
  export type RentalIncomeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * RentalIncome aggregateRaw
   */
  export type RentalIncomeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * RentalIncome without action
   */
  export type RentalIncomeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalIncome
     */
    select?: RentalIncomeSelect<ExtArgs> | null
  }



  /**
   * Model InterestExpense
   */

  export type AggregateInterestExpense = {
    _count: InterestExpenseCountAggregateOutputType | null
    _avg: InterestExpenseAvgAggregateOutputType | null
    _sum: InterestExpenseSumAggregateOutputType | null
    _min: InterestExpenseMinAggregateOutputType | null
    _max: InterestExpenseMaxAggregateOutputType | null
  }

  export type InterestExpenseAvgAggregateOutputType = {
    InterestExpense: number | null
  }

  export type InterestExpenseSumAggregateOutputType = {
    InterestExpense: number | null
  }

  export type InterestExpenseMinAggregateOutputType = {
    ID: string | null
    StartPeriod: string | null
    EndPeriod: string | null
    InterestExpense: number | null
    PropertyID: string | null
  }

  export type InterestExpenseMaxAggregateOutputType = {
    ID: string | null
    StartPeriod: string | null
    EndPeriod: string | null
    InterestExpense: number | null
    PropertyID: string | null
  }

  export type InterestExpenseCountAggregateOutputType = {
    ID: number
    StartPeriod: number
    EndPeriod: number
    InterestExpense: number
    PropertyID: number
    _all: number
  }


  export type InterestExpenseAvgAggregateInputType = {
    InterestExpense?: true
  }

  export type InterestExpenseSumAggregateInputType = {
    InterestExpense?: true
  }

  export type InterestExpenseMinAggregateInputType = {
    ID?: true
    StartPeriod?: true
    EndPeriod?: true
    InterestExpense?: true
    PropertyID?: true
  }

  export type InterestExpenseMaxAggregateInputType = {
    ID?: true
    StartPeriod?: true
    EndPeriod?: true
    InterestExpense?: true
    PropertyID?: true
  }

  export type InterestExpenseCountAggregateInputType = {
    ID?: true
    StartPeriod?: true
    EndPeriod?: true
    InterestExpense?: true
    PropertyID?: true
    _all?: true
  }

  export type InterestExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterestExpense to aggregate.
     */
    where?: InterestExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterestExpenses to fetch.
     */
    orderBy?: InterestExpenseOrderByWithRelationInput | InterestExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterestExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterestExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterestExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InterestExpenses
    **/
    _count?: true | InterestExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InterestExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InterestExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterestExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterestExpenseMaxAggregateInputType
  }

  export type GetInterestExpenseAggregateType<T extends InterestExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateInterestExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterestExpense[P]>
      : GetScalarType<T[P], AggregateInterestExpense[P]>
  }




  export type InterestExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterestExpenseWhereInput
    orderBy?: InterestExpenseOrderByWithAggregationInput | InterestExpenseOrderByWithAggregationInput[]
    by: InterestExpenseScalarFieldEnum[] | InterestExpenseScalarFieldEnum
    having?: InterestExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterestExpenseCountAggregateInputType | true
    _avg?: InterestExpenseAvgAggregateInputType
    _sum?: InterestExpenseSumAggregateInputType
    _min?: InterestExpenseMinAggregateInputType
    _max?: InterestExpenseMaxAggregateInputType
  }

  export type InterestExpenseGroupByOutputType = {
    ID: string
    StartPeriod: string
    EndPeriod: string
    InterestExpense: number
    PropertyID: string
    _count: InterestExpenseCountAggregateOutputType | null
    _avg: InterestExpenseAvgAggregateOutputType | null
    _sum: InterestExpenseSumAggregateOutputType | null
    _min: InterestExpenseMinAggregateOutputType | null
    _max: InterestExpenseMaxAggregateOutputType | null
  }

  type GetInterestExpenseGroupByPayload<T extends InterestExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterestExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterestExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterestExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], InterestExpenseGroupByOutputType[P]>
        }
      >
    >


  export type InterestExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    StartPeriod?: boolean
    EndPeriod?: boolean
    InterestExpense?: boolean
    PropertyID?: boolean
  }, ExtArgs["result"]["interestExpense"]>

  export type InterestExpenseSelectScalar = {
    ID?: boolean
    StartPeriod?: boolean
    EndPeriod?: boolean
    InterestExpense?: boolean
    PropertyID?: boolean
  }


  export type $InterestExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InterestExpense"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: string
      StartPeriod: string
      EndPeriod: string
      InterestExpense: number
      PropertyID: string
    }, ExtArgs["result"]["interestExpense"]>
    composites: {}
  }


  type InterestExpenseGetPayload<S extends boolean | null | undefined | InterestExpenseDefaultArgs> = $Result.GetResult<Prisma.$InterestExpensePayload, S>

  type InterestExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InterestExpenseFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: InterestExpenseCountAggregateInputType | true
    }

  export interface InterestExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InterestExpense'], meta: { name: 'InterestExpense' } }
    /**
     * Find zero or one InterestExpense that matches the filter.
     * @param {InterestExpenseFindUniqueArgs} args - Arguments to find a InterestExpense
     * @example
     * // Get one InterestExpense
     * const interestExpense = await prisma.interestExpense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InterestExpenseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, InterestExpenseFindUniqueArgs<ExtArgs>>
    ): Prisma__InterestExpenseClient<$Result.GetResult<Prisma.$InterestExpensePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one InterestExpense that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InterestExpenseFindUniqueOrThrowArgs} args - Arguments to find a InterestExpense
     * @example
     * // Get one InterestExpense
     * const interestExpense = await prisma.interestExpense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InterestExpenseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InterestExpenseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InterestExpenseClient<$Result.GetResult<Prisma.$InterestExpensePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first InterestExpense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestExpenseFindFirstArgs} args - Arguments to find a InterestExpense
     * @example
     * // Get one InterestExpense
     * const interestExpense = await prisma.interestExpense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InterestExpenseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, InterestExpenseFindFirstArgs<ExtArgs>>
    ): Prisma__InterestExpenseClient<$Result.GetResult<Prisma.$InterestExpensePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first InterestExpense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestExpenseFindFirstOrThrowArgs} args - Arguments to find a InterestExpense
     * @example
     * // Get one InterestExpense
     * const interestExpense = await prisma.interestExpense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InterestExpenseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InterestExpenseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InterestExpenseClient<$Result.GetResult<Prisma.$InterestExpensePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more InterestExpenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestExpenseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InterestExpenses
     * const interestExpenses = await prisma.interestExpense.findMany()
     * 
     * // Get first 10 InterestExpenses
     * const interestExpenses = await prisma.interestExpense.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const interestExpenseWithIDOnly = await prisma.interestExpense.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends InterestExpenseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InterestExpenseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestExpensePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a InterestExpense.
     * @param {InterestExpenseCreateArgs} args - Arguments to create a InterestExpense.
     * @example
     * // Create one InterestExpense
     * const InterestExpense = await prisma.interestExpense.create({
     *   data: {
     *     // ... data to create a InterestExpense
     *   }
     * })
     * 
    **/
    create<T extends InterestExpenseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, InterestExpenseCreateArgs<ExtArgs>>
    ): Prisma__InterestExpenseClient<$Result.GetResult<Prisma.$InterestExpensePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many InterestExpenses.
     *     @param {InterestExpenseCreateManyArgs} args - Arguments to create many InterestExpenses.
     *     @example
     *     // Create many InterestExpenses
     *     const interestExpense = await prisma.interestExpense.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InterestExpenseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InterestExpenseCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InterestExpense.
     * @param {InterestExpenseDeleteArgs} args - Arguments to delete one InterestExpense.
     * @example
     * // Delete one InterestExpense
     * const InterestExpense = await prisma.interestExpense.delete({
     *   where: {
     *     // ... filter to delete one InterestExpense
     *   }
     * })
     * 
    **/
    delete<T extends InterestExpenseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, InterestExpenseDeleteArgs<ExtArgs>>
    ): Prisma__InterestExpenseClient<$Result.GetResult<Prisma.$InterestExpensePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one InterestExpense.
     * @param {InterestExpenseUpdateArgs} args - Arguments to update one InterestExpense.
     * @example
     * // Update one InterestExpense
     * const interestExpense = await prisma.interestExpense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InterestExpenseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, InterestExpenseUpdateArgs<ExtArgs>>
    ): Prisma__InterestExpenseClient<$Result.GetResult<Prisma.$InterestExpensePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more InterestExpenses.
     * @param {InterestExpenseDeleteManyArgs} args - Arguments to filter InterestExpenses to delete.
     * @example
     * // Delete a few InterestExpenses
     * const { count } = await prisma.interestExpense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InterestExpenseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InterestExpenseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterestExpenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InterestExpenses
     * const interestExpense = await prisma.interestExpense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InterestExpenseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, InterestExpenseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InterestExpense.
     * @param {InterestExpenseUpsertArgs} args - Arguments to update or create a InterestExpense.
     * @example
     * // Update or create a InterestExpense
     * const interestExpense = await prisma.interestExpense.upsert({
     *   create: {
     *     // ... data to create a InterestExpense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InterestExpense we want to update
     *   }
     * })
    **/
    upsert<T extends InterestExpenseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, InterestExpenseUpsertArgs<ExtArgs>>
    ): Prisma__InterestExpenseClient<$Result.GetResult<Prisma.$InterestExpensePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more InterestExpenses that matches the filter.
     * @param {InterestExpenseFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const interestExpense = await prisma.interestExpense.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: InterestExpenseFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a InterestExpense.
     * @param {InterestExpenseAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const interestExpense = await prisma.interestExpense.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: InterestExpenseAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of InterestExpenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestExpenseCountArgs} args - Arguments to filter InterestExpenses to count.
     * @example
     * // Count the number of InterestExpenses
     * const count = await prisma.interestExpense.count({
     *   where: {
     *     // ... the filter for the InterestExpenses we want to count
     *   }
     * })
    **/
    count<T extends InterestExpenseCountArgs>(
      args?: Subset<T, InterestExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterestExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InterestExpense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InterestExpenseAggregateArgs>(args: Subset<T, InterestExpenseAggregateArgs>): Prisma.PrismaPromise<GetInterestExpenseAggregateType<T>>

    /**
     * Group by InterestExpense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestExpenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InterestExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterestExpenseGroupByArgs['orderBy'] }
        : { orderBy?: InterestExpenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InterestExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterestExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InterestExpense model
   */
  readonly fields: InterestExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InterestExpense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterestExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the InterestExpense model
   */ 
  interface InterestExpenseFieldRefs {
    readonly ID: FieldRef<"InterestExpense", 'String'>
    readonly StartPeriod: FieldRef<"InterestExpense", 'String'>
    readonly EndPeriod: FieldRef<"InterestExpense", 'String'>
    readonly InterestExpense: FieldRef<"InterestExpense", 'Int'>
    readonly PropertyID: FieldRef<"InterestExpense", 'String'>
  }
    

  // Custom InputTypes

  /**
   * InterestExpense findUnique
   */
  export type InterestExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestExpense
     */
    select?: InterestExpenseSelect<ExtArgs> | null
    /**
     * Filter, which InterestExpense to fetch.
     */
    where: InterestExpenseWhereUniqueInput
  }


  /**
   * InterestExpense findUniqueOrThrow
   */
  export type InterestExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestExpense
     */
    select?: InterestExpenseSelect<ExtArgs> | null
    /**
     * Filter, which InterestExpense to fetch.
     */
    where: InterestExpenseWhereUniqueInput
  }


  /**
   * InterestExpense findFirst
   */
  export type InterestExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestExpense
     */
    select?: InterestExpenseSelect<ExtArgs> | null
    /**
     * Filter, which InterestExpense to fetch.
     */
    where?: InterestExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterestExpenses to fetch.
     */
    orderBy?: InterestExpenseOrderByWithRelationInput | InterestExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterestExpenses.
     */
    cursor?: InterestExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterestExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterestExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterestExpenses.
     */
    distinct?: InterestExpenseScalarFieldEnum | InterestExpenseScalarFieldEnum[]
  }


  /**
   * InterestExpense findFirstOrThrow
   */
  export type InterestExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestExpense
     */
    select?: InterestExpenseSelect<ExtArgs> | null
    /**
     * Filter, which InterestExpense to fetch.
     */
    where?: InterestExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterestExpenses to fetch.
     */
    orderBy?: InterestExpenseOrderByWithRelationInput | InterestExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterestExpenses.
     */
    cursor?: InterestExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterestExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterestExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterestExpenses.
     */
    distinct?: InterestExpenseScalarFieldEnum | InterestExpenseScalarFieldEnum[]
  }


  /**
   * InterestExpense findMany
   */
  export type InterestExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestExpense
     */
    select?: InterestExpenseSelect<ExtArgs> | null
    /**
     * Filter, which InterestExpenses to fetch.
     */
    where?: InterestExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterestExpenses to fetch.
     */
    orderBy?: InterestExpenseOrderByWithRelationInput | InterestExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InterestExpenses.
     */
    cursor?: InterestExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterestExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterestExpenses.
     */
    skip?: number
    distinct?: InterestExpenseScalarFieldEnum | InterestExpenseScalarFieldEnum[]
  }


  /**
   * InterestExpense create
   */
  export type InterestExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestExpense
     */
    select?: InterestExpenseSelect<ExtArgs> | null
    /**
     * The data needed to create a InterestExpense.
     */
    data: XOR<InterestExpenseCreateInput, InterestExpenseUncheckedCreateInput>
  }


  /**
   * InterestExpense createMany
   */
  export type InterestExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InterestExpenses.
     */
    data: InterestExpenseCreateManyInput | InterestExpenseCreateManyInput[]
  }


  /**
   * InterestExpense update
   */
  export type InterestExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestExpense
     */
    select?: InterestExpenseSelect<ExtArgs> | null
    /**
     * The data needed to update a InterestExpense.
     */
    data: XOR<InterestExpenseUpdateInput, InterestExpenseUncheckedUpdateInput>
    /**
     * Choose, which InterestExpense to update.
     */
    where: InterestExpenseWhereUniqueInput
  }


  /**
   * InterestExpense updateMany
   */
  export type InterestExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InterestExpenses.
     */
    data: XOR<InterestExpenseUpdateManyMutationInput, InterestExpenseUncheckedUpdateManyInput>
    /**
     * Filter which InterestExpenses to update
     */
    where?: InterestExpenseWhereInput
  }


  /**
   * InterestExpense upsert
   */
  export type InterestExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestExpense
     */
    select?: InterestExpenseSelect<ExtArgs> | null
    /**
     * The filter to search for the InterestExpense to update in case it exists.
     */
    where: InterestExpenseWhereUniqueInput
    /**
     * In case the InterestExpense found by the `where` argument doesn't exist, create a new InterestExpense with this data.
     */
    create: XOR<InterestExpenseCreateInput, InterestExpenseUncheckedCreateInput>
    /**
     * In case the InterestExpense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterestExpenseUpdateInput, InterestExpenseUncheckedUpdateInput>
  }


  /**
   * InterestExpense delete
   */
  export type InterestExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestExpense
     */
    select?: InterestExpenseSelect<ExtArgs> | null
    /**
     * Filter which InterestExpense to delete.
     */
    where: InterestExpenseWhereUniqueInput
  }


  /**
   * InterestExpense deleteMany
   */
  export type InterestExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterestExpenses to delete
     */
    where?: InterestExpenseWhereInput
  }


  /**
   * InterestExpense findRaw
   */
  export type InterestExpenseFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * InterestExpense aggregateRaw
   */
  export type InterestExpenseAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * InterestExpense without action
   */
  export type InterestExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestExpense
     */
    select?: InterestExpenseSelect<ExtArgs> | null
  }



  /**
   * Model CapitalRepayments
   */

  export type AggregateCapitalRepayments = {
    _count: CapitalRepaymentsCountAggregateOutputType | null
    _avg: CapitalRepaymentsAvgAggregateOutputType | null
    _sum: CapitalRepaymentsSumAggregateOutputType | null
    _min: CapitalRepaymentsMinAggregateOutputType | null
    _max: CapitalRepaymentsMaxAggregateOutputType | null
  }

  export type CapitalRepaymentsAvgAggregateOutputType = {
    CapitalRepaid: number | null
  }

  export type CapitalRepaymentsSumAggregateOutputType = {
    CapitalRepaid: number | null
  }

  export type CapitalRepaymentsMinAggregateOutputType = {
    ID: string | null
    StartPeriod: string | null
    EndPeriod: string | null
    CapitalRepaid: number | null
    PropertyID: string | null
  }

  export type CapitalRepaymentsMaxAggregateOutputType = {
    ID: string | null
    StartPeriod: string | null
    EndPeriod: string | null
    CapitalRepaid: number | null
    PropertyID: string | null
  }

  export type CapitalRepaymentsCountAggregateOutputType = {
    ID: number
    StartPeriod: number
    EndPeriod: number
    CapitalRepaid: number
    PropertyID: number
    _all: number
  }


  export type CapitalRepaymentsAvgAggregateInputType = {
    CapitalRepaid?: true
  }

  export type CapitalRepaymentsSumAggregateInputType = {
    CapitalRepaid?: true
  }

  export type CapitalRepaymentsMinAggregateInputType = {
    ID?: true
    StartPeriod?: true
    EndPeriod?: true
    CapitalRepaid?: true
    PropertyID?: true
  }

  export type CapitalRepaymentsMaxAggregateInputType = {
    ID?: true
    StartPeriod?: true
    EndPeriod?: true
    CapitalRepaid?: true
    PropertyID?: true
  }

  export type CapitalRepaymentsCountAggregateInputType = {
    ID?: true
    StartPeriod?: true
    EndPeriod?: true
    CapitalRepaid?: true
    PropertyID?: true
    _all?: true
  }

  export type CapitalRepaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CapitalRepayments to aggregate.
     */
    where?: CapitalRepaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapitalRepayments to fetch.
     */
    orderBy?: CapitalRepaymentsOrderByWithRelationInput | CapitalRepaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CapitalRepaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapitalRepayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapitalRepayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CapitalRepayments
    **/
    _count?: true | CapitalRepaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CapitalRepaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CapitalRepaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CapitalRepaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CapitalRepaymentsMaxAggregateInputType
  }

  export type GetCapitalRepaymentsAggregateType<T extends CapitalRepaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregateCapitalRepayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCapitalRepayments[P]>
      : GetScalarType<T[P], AggregateCapitalRepayments[P]>
  }




  export type CapitalRepaymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CapitalRepaymentsWhereInput
    orderBy?: CapitalRepaymentsOrderByWithAggregationInput | CapitalRepaymentsOrderByWithAggregationInput[]
    by: CapitalRepaymentsScalarFieldEnum[] | CapitalRepaymentsScalarFieldEnum
    having?: CapitalRepaymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CapitalRepaymentsCountAggregateInputType | true
    _avg?: CapitalRepaymentsAvgAggregateInputType
    _sum?: CapitalRepaymentsSumAggregateInputType
    _min?: CapitalRepaymentsMinAggregateInputType
    _max?: CapitalRepaymentsMaxAggregateInputType
  }

  export type CapitalRepaymentsGroupByOutputType = {
    ID: string
    StartPeriod: string
    EndPeriod: string
    CapitalRepaid: number
    PropertyID: string
    _count: CapitalRepaymentsCountAggregateOutputType | null
    _avg: CapitalRepaymentsAvgAggregateOutputType | null
    _sum: CapitalRepaymentsSumAggregateOutputType | null
    _min: CapitalRepaymentsMinAggregateOutputType | null
    _max: CapitalRepaymentsMaxAggregateOutputType | null
  }

  type GetCapitalRepaymentsGroupByPayload<T extends CapitalRepaymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CapitalRepaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CapitalRepaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CapitalRepaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], CapitalRepaymentsGroupByOutputType[P]>
        }
      >
    >


  export type CapitalRepaymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    StartPeriod?: boolean
    EndPeriod?: boolean
    CapitalRepaid?: boolean
    PropertyID?: boolean
  }, ExtArgs["result"]["capitalRepayments"]>

  export type CapitalRepaymentsSelectScalar = {
    ID?: boolean
    StartPeriod?: boolean
    EndPeriod?: boolean
    CapitalRepaid?: boolean
    PropertyID?: boolean
  }


  export type $CapitalRepaymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CapitalRepayments"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: string
      StartPeriod: string
      EndPeriod: string
      CapitalRepaid: number
      PropertyID: string
    }, ExtArgs["result"]["capitalRepayments"]>
    composites: {}
  }


  type CapitalRepaymentsGetPayload<S extends boolean | null | undefined | CapitalRepaymentsDefaultArgs> = $Result.GetResult<Prisma.$CapitalRepaymentsPayload, S>

  type CapitalRepaymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CapitalRepaymentsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CapitalRepaymentsCountAggregateInputType | true
    }

  export interface CapitalRepaymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CapitalRepayments'], meta: { name: 'CapitalRepayments' } }
    /**
     * Find zero or one CapitalRepayments that matches the filter.
     * @param {CapitalRepaymentsFindUniqueArgs} args - Arguments to find a CapitalRepayments
     * @example
     * // Get one CapitalRepayments
     * const capitalRepayments = await prisma.capitalRepayments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CapitalRepaymentsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CapitalRepaymentsFindUniqueArgs<ExtArgs>>
    ): Prisma__CapitalRepaymentsClient<$Result.GetResult<Prisma.$CapitalRepaymentsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CapitalRepayments that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CapitalRepaymentsFindUniqueOrThrowArgs} args - Arguments to find a CapitalRepayments
     * @example
     * // Get one CapitalRepayments
     * const capitalRepayments = await prisma.capitalRepayments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CapitalRepaymentsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CapitalRepaymentsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CapitalRepaymentsClient<$Result.GetResult<Prisma.$CapitalRepaymentsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CapitalRepayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapitalRepaymentsFindFirstArgs} args - Arguments to find a CapitalRepayments
     * @example
     * // Get one CapitalRepayments
     * const capitalRepayments = await prisma.capitalRepayments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CapitalRepaymentsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CapitalRepaymentsFindFirstArgs<ExtArgs>>
    ): Prisma__CapitalRepaymentsClient<$Result.GetResult<Prisma.$CapitalRepaymentsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CapitalRepayments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapitalRepaymentsFindFirstOrThrowArgs} args - Arguments to find a CapitalRepayments
     * @example
     * // Get one CapitalRepayments
     * const capitalRepayments = await prisma.capitalRepayments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CapitalRepaymentsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CapitalRepaymentsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CapitalRepaymentsClient<$Result.GetResult<Prisma.$CapitalRepaymentsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CapitalRepayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapitalRepaymentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CapitalRepayments
     * const capitalRepayments = await prisma.capitalRepayments.findMany()
     * 
     * // Get first 10 CapitalRepayments
     * const capitalRepayments = await prisma.capitalRepayments.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const capitalRepaymentsWithIDOnly = await prisma.capitalRepayments.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends CapitalRepaymentsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CapitalRepaymentsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapitalRepaymentsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CapitalRepayments.
     * @param {CapitalRepaymentsCreateArgs} args - Arguments to create a CapitalRepayments.
     * @example
     * // Create one CapitalRepayments
     * const CapitalRepayments = await prisma.capitalRepayments.create({
     *   data: {
     *     // ... data to create a CapitalRepayments
     *   }
     * })
     * 
    **/
    create<T extends CapitalRepaymentsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CapitalRepaymentsCreateArgs<ExtArgs>>
    ): Prisma__CapitalRepaymentsClient<$Result.GetResult<Prisma.$CapitalRepaymentsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CapitalRepayments.
     *     @param {CapitalRepaymentsCreateManyArgs} args - Arguments to create many CapitalRepayments.
     *     @example
     *     // Create many CapitalRepayments
     *     const capitalRepayments = await prisma.capitalRepayments.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CapitalRepaymentsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CapitalRepaymentsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CapitalRepayments.
     * @param {CapitalRepaymentsDeleteArgs} args - Arguments to delete one CapitalRepayments.
     * @example
     * // Delete one CapitalRepayments
     * const CapitalRepayments = await prisma.capitalRepayments.delete({
     *   where: {
     *     // ... filter to delete one CapitalRepayments
     *   }
     * })
     * 
    **/
    delete<T extends CapitalRepaymentsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CapitalRepaymentsDeleteArgs<ExtArgs>>
    ): Prisma__CapitalRepaymentsClient<$Result.GetResult<Prisma.$CapitalRepaymentsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CapitalRepayments.
     * @param {CapitalRepaymentsUpdateArgs} args - Arguments to update one CapitalRepayments.
     * @example
     * // Update one CapitalRepayments
     * const capitalRepayments = await prisma.capitalRepayments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CapitalRepaymentsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CapitalRepaymentsUpdateArgs<ExtArgs>>
    ): Prisma__CapitalRepaymentsClient<$Result.GetResult<Prisma.$CapitalRepaymentsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CapitalRepayments.
     * @param {CapitalRepaymentsDeleteManyArgs} args - Arguments to filter CapitalRepayments to delete.
     * @example
     * // Delete a few CapitalRepayments
     * const { count } = await prisma.capitalRepayments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CapitalRepaymentsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CapitalRepaymentsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CapitalRepayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapitalRepaymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CapitalRepayments
     * const capitalRepayments = await prisma.capitalRepayments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CapitalRepaymentsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CapitalRepaymentsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CapitalRepayments.
     * @param {CapitalRepaymentsUpsertArgs} args - Arguments to update or create a CapitalRepayments.
     * @example
     * // Update or create a CapitalRepayments
     * const capitalRepayments = await prisma.capitalRepayments.upsert({
     *   create: {
     *     // ... data to create a CapitalRepayments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CapitalRepayments we want to update
     *   }
     * })
    **/
    upsert<T extends CapitalRepaymentsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CapitalRepaymentsUpsertArgs<ExtArgs>>
    ): Prisma__CapitalRepaymentsClient<$Result.GetResult<Prisma.$CapitalRepaymentsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more CapitalRepayments that matches the filter.
     * @param {CapitalRepaymentsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const capitalRepayments = await prisma.capitalRepayments.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: CapitalRepaymentsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a CapitalRepayments.
     * @param {CapitalRepaymentsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const capitalRepayments = await prisma.capitalRepayments.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: CapitalRepaymentsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of CapitalRepayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapitalRepaymentsCountArgs} args - Arguments to filter CapitalRepayments to count.
     * @example
     * // Count the number of CapitalRepayments
     * const count = await prisma.capitalRepayments.count({
     *   where: {
     *     // ... the filter for the CapitalRepayments we want to count
     *   }
     * })
    **/
    count<T extends CapitalRepaymentsCountArgs>(
      args?: Subset<T, CapitalRepaymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CapitalRepaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CapitalRepayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapitalRepaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CapitalRepaymentsAggregateArgs>(args: Subset<T, CapitalRepaymentsAggregateArgs>): Prisma.PrismaPromise<GetCapitalRepaymentsAggregateType<T>>

    /**
     * Group by CapitalRepayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapitalRepaymentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CapitalRepaymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CapitalRepaymentsGroupByArgs['orderBy'] }
        : { orderBy?: CapitalRepaymentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CapitalRepaymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCapitalRepaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CapitalRepayments model
   */
  readonly fields: CapitalRepaymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CapitalRepayments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CapitalRepaymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CapitalRepayments model
   */ 
  interface CapitalRepaymentsFieldRefs {
    readonly ID: FieldRef<"CapitalRepayments", 'String'>
    readonly StartPeriod: FieldRef<"CapitalRepayments", 'String'>
    readonly EndPeriod: FieldRef<"CapitalRepayments", 'String'>
    readonly CapitalRepaid: FieldRef<"CapitalRepayments", 'Int'>
    readonly PropertyID: FieldRef<"CapitalRepayments", 'String'>
  }
    

  // Custom InputTypes

  /**
   * CapitalRepayments findUnique
   */
  export type CapitalRepaymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapitalRepayments
     */
    select?: CapitalRepaymentsSelect<ExtArgs> | null
    /**
     * Filter, which CapitalRepayments to fetch.
     */
    where: CapitalRepaymentsWhereUniqueInput
  }


  /**
   * CapitalRepayments findUniqueOrThrow
   */
  export type CapitalRepaymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapitalRepayments
     */
    select?: CapitalRepaymentsSelect<ExtArgs> | null
    /**
     * Filter, which CapitalRepayments to fetch.
     */
    where: CapitalRepaymentsWhereUniqueInput
  }


  /**
   * CapitalRepayments findFirst
   */
  export type CapitalRepaymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapitalRepayments
     */
    select?: CapitalRepaymentsSelect<ExtArgs> | null
    /**
     * Filter, which CapitalRepayments to fetch.
     */
    where?: CapitalRepaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapitalRepayments to fetch.
     */
    orderBy?: CapitalRepaymentsOrderByWithRelationInput | CapitalRepaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CapitalRepayments.
     */
    cursor?: CapitalRepaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapitalRepayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapitalRepayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CapitalRepayments.
     */
    distinct?: CapitalRepaymentsScalarFieldEnum | CapitalRepaymentsScalarFieldEnum[]
  }


  /**
   * CapitalRepayments findFirstOrThrow
   */
  export type CapitalRepaymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapitalRepayments
     */
    select?: CapitalRepaymentsSelect<ExtArgs> | null
    /**
     * Filter, which CapitalRepayments to fetch.
     */
    where?: CapitalRepaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapitalRepayments to fetch.
     */
    orderBy?: CapitalRepaymentsOrderByWithRelationInput | CapitalRepaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CapitalRepayments.
     */
    cursor?: CapitalRepaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapitalRepayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapitalRepayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CapitalRepayments.
     */
    distinct?: CapitalRepaymentsScalarFieldEnum | CapitalRepaymentsScalarFieldEnum[]
  }


  /**
   * CapitalRepayments findMany
   */
  export type CapitalRepaymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapitalRepayments
     */
    select?: CapitalRepaymentsSelect<ExtArgs> | null
    /**
     * Filter, which CapitalRepayments to fetch.
     */
    where?: CapitalRepaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CapitalRepayments to fetch.
     */
    orderBy?: CapitalRepaymentsOrderByWithRelationInput | CapitalRepaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CapitalRepayments.
     */
    cursor?: CapitalRepaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CapitalRepayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CapitalRepayments.
     */
    skip?: number
    distinct?: CapitalRepaymentsScalarFieldEnum | CapitalRepaymentsScalarFieldEnum[]
  }


  /**
   * CapitalRepayments create
   */
  export type CapitalRepaymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapitalRepayments
     */
    select?: CapitalRepaymentsSelect<ExtArgs> | null
    /**
     * The data needed to create a CapitalRepayments.
     */
    data: XOR<CapitalRepaymentsCreateInput, CapitalRepaymentsUncheckedCreateInput>
  }


  /**
   * CapitalRepayments createMany
   */
  export type CapitalRepaymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CapitalRepayments.
     */
    data: CapitalRepaymentsCreateManyInput | CapitalRepaymentsCreateManyInput[]
  }


  /**
   * CapitalRepayments update
   */
  export type CapitalRepaymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapitalRepayments
     */
    select?: CapitalRepaymentsSelect<ExtArgs> | null
    /**
     * The data needed to update a CapitalRepayments.
     */
    data: XOR<CapitalRepaymentsUpdateInput, CapitalRepaymentsUncheckedUpdateInput>
    /**
     * Choose, which CapitalRepayments to update.
     */
    where: CapitalRepaymentsWhereUniqueInput
  }


  /**
   * CapitalRepayments updateMany
   */
  export type CapitalRepaymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CapitalRepayments.
     */
    data: XOR<CapitalRepaymentsUpdateManyMutationInput, CapitalRepaymentsUncheckedUpdateManyInput>
    /**
     * Filter which CapitalRepayments to update
     */
    where?: CapitalRepaymentsWhereInput
  }


  /**
   * CapitalRepayments upsert
   */
  export type CapitalRepaymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapitalRepayments
     */
    select?: CapitalRepaymentsSelect<ExtArgs> | null
    /**
     * The filter to search for the CapitalRepayments to update in case it exists.
     */
    where: CapitalRepaymentsWhereUniqueInput
    /**
     * In case the CapitalRepayments found by the `where` argument doesn't exist, create a new CapitalRepayments with this data.
     */
    create: XOR<CapitalRepaymentsCreateInput, CapitalRepaymentsUncheckedCreateInput>
    /**
     * In case the CapitalRepayments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CapitalRepaymentsUpdateInput, CapitalRepaymentsUncheckedUpdateInput>
  }


  /**
   * CapitalRepayments delete
   */
  export type CapitalRepaymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapitalRepayments
     */
    select?: CapitalRepaymentsSelect<ExtArgs> | null
    /**
     * Filter which CapitalRepayments to delete.
     */
    where: CapitalRepaymentsWhereUniqueInput
  }


  /**
   * CapitalRepayments deleteMany
   */
  export type CapitalRepaymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CapitalRepayments to delete
     */
    where?: CapitalRepaymentsWhereInput
  }


  /**
   * CapitalRepayments findRaw
   */
  export type CapitalRepaymentsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * CapitalRepayments aggregateRaw
   */
  export type CapitalRepaymentsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * CapitalRepayments without action
   */
  export type CapitalRepaymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapitalRepayments
     */
    select?: CapitalRepaymentsSelect<ExtArgs> | null
  }



  /**
   * Model DisallowableExpenses
   */

  export type AggregateDisallowableExpenses = {
    _count: DisallowableExpensesCountAggregateOutputType | null
    _avg: DisallowableExpensesAvgAggregateOutputType | null
    _sum: DisallowableExpensesSumAggregateOutputType | null
    _min: DisallowableExpensesMinAggregateOutputType | null
    _max: DisallowableExpensesMaxAggregateOutputType | null
  }

  export type DisallowableExpensesAvgAggregateOutputType = {
    Amount: number | null
  }

  export type DisallowableExpensesSumAggregateOutputType = {
    Amount: number | null
  }

  export type DisallowableExpensesMinAggregateOutputType = {
    ID: string | null
    Description: string | null
    Amount: number | null
    PropertyID: string | null
    DateIncurred: string | null
  }

  export type DisallowableExpensesMaxAggregateOutputType = {
    ID: string | null
    Description: string | null
    Amount: number | null
    PropertyID: string | null
    DateIncurred: string | null
  }

  export type DisallowableExpensesCountAggregateOutputType = {
    ID: number
    Description: number
    Amount: number
    PropertyID: number
    DateIncurred: number
    _all: number
  }


  export type DisallowableExpensesAvgAggregateInputType = {
    Amount?: true
  }

  export type DisallowableExpensesSumAggregateInputType = {
    Amount?: true
  }

  export type DisallowableExpensesMinAggregateInputType = {
    ID?: true
    Description?: true
    Amount?: true
    PropertyID?: true
    DateIncurred?: true
  }

  export type DisallowableExpensesMaxAggregateInputType = {
    ID?: true
    Description?: true
    Amount?: true
    PropertyID?: true
    DateIncurred?: true
  }

  export type DisallowableExpensesCountAggregateInputType = {
    ID?: true
    Description?: true
    Amount?: true
    PropertyID?: true
    DateIncurred?: true
    _all?: true
  }

  export type DisallowableExpensesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DisallowableExpenses to aggregate.
     */
    where?: DisallowableExpensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisallowableExpenses to fetch.
     */
    orderBy?: DisallowableExpensesOrderByWithRelationInput | DisallowableExpensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisallowableExpensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisallowableExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisallowableExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DisallowableExpenses
    **/
    _count?: true | DisallowableExpensesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DisallowableExpensesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DisallowableExpensesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisallowableExpensesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisallowableExpensesMaxAggregateInputType
  }

  export type GetDisallowableExpensesAggregateType<T extends DisallowableExpensesAggregateArgs> = {
        [P in keyof T & keyof AggregateDisallowableExpenses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisallowableExpenses[P]>
      : GetScalarType<T[P], AggregateDisallowableExpenses[P]>
  }




  export type DisallowableExpensesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisallowableExpensesWhereInput
    orderBy?: DisallowableExpensesOrderByWithAggregationInput | DisallowableExpensesOrderByWithAggregationInput[]
    by: DisallowableExpensesScalarFieldEnum[] | DisallowableExpensesScalarFieldEnum
    having?: DisallowableExpensesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisallowableExpensesCountAggregateInputType | true
    _avg?: DisallowableExpensesAvgAggregateInputType
    _sum?: DisallowableExpensesSumAggregateInputType
    _min?: DisallowableExpensesMinAggregateInputType
    _max?: DisallowableExpensesMaxAggregateInputType
  }

  export type DisallowableExpensesGroupByOutputType = {
    ID: string
    Description: string
    Amount: number
    PropertyID: string
    DateIncurred: string
    _count: DisallowableExpensesCountAggregateOutputType | null
    _avg: DisallowableExpensesAvgAggregateOutputType | null
    _sum: DisallowableExpensesSumAggregateOutputType | null
    _min: DisallowableExpensesMinAggregateOutputType | null
    _max: DisallowableExpensesMaxAggregateOutputType | null
  }

  type GetDisallowableExpensesGroupByPayload<T extends DisallowableExpensesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisallowableExpensesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisallowableExpensesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisallowableExpensesGroupByOutputType[P]>
            : GetScalarType<T[P], DisallowableExpensesGroupByOutputType[P]>
        }
      >
    >


  export type DisallowableExpensesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    Description?: boolean
    Amount?: boolean
    PropertyID?: boolean
    DateIncurred?: boolean
  }, ExtArgs["result"]["disallowableExpenses"]>

  export type DisallowableExpensesSelectScalar = {
    ID?: boolean
    Description?: boolean
    Amount?: boolean
    PropertyID?: boolean
    DateIncurred?: boolean
  }


  export type $DisallowableExpensesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DisallowableExpenses"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID: string
      Description: string
      Amount: number
      PropertyID: string
      DateIncurred: string
    }, ExtArgs["result"]["disallowableExpenses"]>
    composites: {}
  }


  type DisallowableExpensesGetPayload<S extends boolean | null | undefined | DisallowableExpensesDefaultArgs> = $Result.GetResult<Prisma.$DisallowableExpensesPayload, S>

  type DisallowableExpensesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DisallowableExpensesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: DisallowableExpensesCountAggregateInputType | true
    }

  export interface DisallowableExpensesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DisallowableExpenses'], meta: { name: 'DisallowableExpenses' } }
    /**
     * Find zero or one DisallowableExpenses that matches the filter.
     * @param {DisallowableExpensesFindUniqueArgs} args - Arguments to find a DisallowableExpenses
     * @example
     * // Get one DisallowableExpenses
     * const disallowableExpenses = await prisma.disallowableExpenses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DisallowableExpensesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DisallowableExpensesFindUniqueArgs<ExtArgs>>
    ): Prisma__DisallowableExpensesClient<$Result.GetResult<Prisma.$DisallowableExpensesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DisallowableExpenses that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DisallowableExpensesFindUniqueOrThrowArgs} args - Arguments to find a DisallowableExpenses
     * @example
     * // Get one DisallowableExpenses
     * const disallowableExpenses = await prisma.disallowableExpenses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DisallowableExpensesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DisallowableExpensesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DisallowableExpensesClient<$Result.GetResult<Prisma.$DisallowableExpensesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DisallowableExpenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisallowableExpensesFindFirstArgs} args - Arguments to find a DisallowableExpenses
     * @example
     * // Get one DisallowableExpenses
     * const disallowableExpenses = await prisma.disallowableExpenses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DisallowableExpensesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DisallowableExpensesFindFirstArgs<ExtArgs>>
    ): Prisma__DisallowableExpensesClient<$Result.GetResult<Prisma.$DisallowableExpensesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DisallowableExpenses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisallowableExpensesFindFirstOrThrowArgs} args - Arguments to find a DisallowableExpenses
     * @example
     * // Get one DisallowableExpenses
     * const disallowableExpenses = await prisma.disallowableExpenses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DisallowableExpensesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DisallowableExpensesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DisallowableExpensesClient<$Result.GetResult<Prisma.$DisallowableExpensesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DisallowableExpenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisallowableExpensesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DisallowableExpenses
     * const disallowableExpenses = await prisma.disallowableExpenses.findMany()
     * 
     * // Get first 10 DisallowableExpenses
     * const disallowableExpenses = await prisma.disallowableExpenses.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const disallowableExpensesWithIDOnly = await prisma.disallowableExpenses.findMany({ select: { ID: true } })
     * 
    **/
    findMany<T extends DisallowableExpensesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DisallowableExpensesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisallowableExpensesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DisallowableExpenses.
     * @param {DisallowableExpensesCreateArgs} args - Arguments to create a DisallowableExpenses.
     * @example
     * // Create one DisallowableExpenses
     * const DisallowableExpenses = await prisma.disallowableExpenses.create({
     *   data: {
     *     // ... data to create a DisallowableExpenses
     *   }
     * })
     * 
    **/
    create<T extends DisallowableExpensesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DisallowableExpensesCreateArgs<ExtArgs>>
    ): Prisma__DisallowableExpensesClient<$Result.GetResult<Prisma.$DisallowableExpensesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DisallowableExpenses.
     *     @param {DisallowableExpensesCreateManyArgs} args - Arguments to create many DisallowableExpenses.
     *     @example
     *     // Create many DisallowableExpenses
     *     const disallowableExpenses = await prisma.disallowableExpenses.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DisallowableExpensesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DisallowableExpensesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DisallowableExpenses.
     * @param {DisallowableExpensesDeleteArgs} args - Arguments to delete one DisallowableExpenses.
     * @example
     * // Delete one DisallowableExpenses
     * const DisallowableExpenses = await prisma.disallowableExpenses.delete({
     *   where: {
     *     // ... filter to delete one DisallowableExpenses
     *   }
     * })
     * 
    **/
    delete<T extends DisallowableExpensesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DisallowableExpensesDeleteArgs<ExtArgs>>
    ): Prisma__DisallowableExpensesClient<$Result.GetResult<Prisma.$DisallowableExpensesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DisallowableExpenses.
     * @param {DisallowableExpensesUpdateArgs} args - Arguments to update one DisallowableExpenses.
     * @example
     * // Update one DisallowableExpenses
     * const disallowableExpenses = await prisma.disallowableExpenses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DisallowableExpensesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DisallowableExpensesUpdateArgs<ExtArgs>>
    ): Prisma__DisallowableExpensesClient<$Result.GetResult<Prisma.$DisallowableExpensesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DisallowableExpenses.
     * @param {DisallowableExpensesDeleteManyArgs} args - Arguments to filter DisallowableExpenses to delete.
     * @example
     * // Delete a few DisallowableExpenses
     * const { count } = await prisma.disallowableExpenses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DisallowableExpensesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DisallowableExpensesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DisallowableExpenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisallowableExpensesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DisallowableExpenses
     * const disallowableExpenses = await prisma.disallowableExpenses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DisallowableExpensesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DisallowableExpensesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DisallowableExpenses.
     * @param {DisallowableExpensesUpsertArgs} args - Arguments to update or create a DisallowableExpenses.
     * @example
     * // Update or create a DisallowableExpenses
     * const disallowableExpenses = await prisma.disallowableExpenses.upsert({
     *   create: {
     *     // ... data to create a DisallowableExpenses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DisallowableExpenses we want to update
     *   }
     * })
    **/
    upsert<T extends DisallowableExpensesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DisallowableExpensesUpsertArgs<ExtArgs>>
    ): Prisma__DisallowableExpensesClient<$Result.GetResult<Prisma.$DisallowableExpensesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more DisallowableExpenses that matches the filter.
     * @param {DisallowableExpensesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const disallowableExpenses = await prisma.disallowableExpenses.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: DisallowableExpensesFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a DisallowableExpenses.
     * @param {DisallowableExpensesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const disallowableExpenses = await prisma.disallowableExpenses.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: DisallowableExpensesAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of DisallowableExpenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisallowableExpensesCountArgs} args - Arguments to filter DisallowableExpenses to count.
     * @example
     * // Count the number of DisallowableExpenses
     * const count = await prisma.disallowableExpenses.count({
     *   where: {
     *     // ... the filter for the DisallowableExpenses we want to count
     *   }
     * })
    **/
    count<T extends DisallowableExpensesCountArgs>(
      args?: Subset<T, DisallowableExpensesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisallowableExpensesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DisallowableExpenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisallowableExpensesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DisallowableExpensesAggregateArgs>(args: Subset<T, DisallowableExpensesAggregateArgs>): Prisma.PrismaPromise<GetDisallowableExpensesAggregateType<T>>

    /**
     * Group by DisallowableExpenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisallowableExpensesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DisallowableExpensesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisallowableExpensesGroupByArgs['orderBy'] }
        : { orderBy?: DisallowableExpensesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DisallowableExpensesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisallowableExpensesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DisallowableExpenses model
   */
  readonly fields: DisallowableExpensesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DisallowableExpenses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisallowableExpensesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DisallowableExpenses model
   */ 
  interface DisallowableExpensesFieldRefs {
    readonly ID: FieldRef<"DisallowableExpenses", 'String'>
    readonly Description: FieldRef<"DisallowableExpenses", 'String'>
    readonly Amount: FieldRef<"DisallowableExpenses", 'Int'>
    readonly PropertyID: FieldRef<"DisallowableExpenses", 'String'>
    readonly DateIncurred: FieldRef<"DisallowableExpenses", 'String'>
  }
    

  // Custom InputTypes

  /**
   * DisallowableExpenses findUnique
   */
  export type DisallowableExpensesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisallowableExpenses
     */
    select?: DisallowableExpensesSelect<ExtArgs> | null
    /**
     * Filter, which DisallowableExpenses to fetch.
     */
    where: DisallowableExpensesWhereUniqueInput
  }


  /**
   * DisallowableExpenses findUniqueOrThrow
   */
  export type DisallowableExpensesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisallowableExpenses
     */
    select?: DisallowableExpensesSelect<ExtArgs> | null
    /**
     * Filter, which DisallowableExpenses to fetch.
     */
    where: DisallowableExpensesWhereUniqueInput
  }


  /**
   * DisallowableExpenses findFirst
   */
  export type DisallowableExpensesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisallowableExpenses
     */
    select?: DisallowableExpensesSelect<ExtArgs> | null
    /**
     * Filter, which DisallowableExpenses to fetch.
     */
    where?: DisallowableExpensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisallowableExpenses to fetch.
     */
    orderBy?: DisallowableExpensesOrderByWithRelationInput | DisallowableExpensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DisallowableExpenses.
     */
    cursor?: DisallowableExpensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisallowableExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisallowableExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DisallowableExpenses.
     */
    distinct?: DisallowableExpensesScalarFieldEnum | DisallowableExpensesScalarFieldEnum[]
  }


  /**
   * DisallowableExpenses findFirstOrThrow
   */
  export type DisallowableExpensesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisallowableExpenses
     */
    select?: DisallowableExpensesSelect<ExtArgs> | null
    /**
     * Filter, which DisallowableExpenses to fetch.
     */
    where?: DisallowableExpensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisallowableExpenses to fetch.
     */
    orderBy?: DisallowableExpensesOrderByWithRelationInput | DisallowableExpensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DisallowableExpenses.
     */
    cursor?: DisallowableExpensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisallowableExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisallowableExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DisallowableExpenses.
     */
    distinct?: DisallowableExpensesScalarFieldEnum | DisallowableExpensesScalarFieldEnum[]
  }


  /**
   * DisallowableExpenses findMany
   */
  export type DisallowableExpensesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisallowableExpenses
     */
    select?: DisallowableExpensesSelect<ExtArgs> | null
    /**
     * Filter, which DisallowableExpenses to fetch.
     */
    where?: DisallowableExpensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisallowableExpenses to fetch.
     */
    orderBy?: DisallowableExpensesOrderByWithRelationInput | DisallowableExpensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DisallowableExpenses.
     */
    cursor?: DisallowableExpensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisallowableExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisallowableExpenses.
     */
    skip?: number
    distinct?: DisallowableExpensesScalarFieldEnum | DisallowableExpensesScalarFieldEnum[]
  }


  /**
   * DisallowableExpenses create
   */
  export type DisallowableExpensesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisallowableExpenses
     */
    select?: DisallowableExpensesSelect<ExtArgs> | null
    /**
     * The data needed to create a DisallowableExpenses.
     */
    data: XOR<DisallowableExpensesCreateInput, DisallowableExpensesUncheckedCreateInput>
  }


  /**
   * DisallowableExpenses createMany
   */
  export type DisallowableExpensesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DisallowableExpenses.
     */
    data: DisallowableExpensesCreateManyInput | DisallowableExpensesCreateManyInput[]
  }


  /**
   * DisallowableExpenses update
   */
  export type DisallowableExpensesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisallowableExpenses
     */
    select?: DisallowableExpensesSelect<ExtArgs> | null
    /**
     * The data needed to update a DisallowableExpenses.
     */
    data: XOR<DisallowableExpensesUpdateInput, DisallowableExpensesUncheckedUpdateInput>
    /**
     * Choose, which DisallowableExpenses to update.
     */
    where: DisallowableExpensesWhereUniqueInput
  }


  /**
   * DisallowableExpenses updateMany
   */
  export type DisallowableExpensesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DisallowableExpenses.
     */
    data: XOR<DisallowableExpensesUpdateManyMutationInput, DisallowableExpensesUncheckedUpdateManyInput>
    /**
     * Filter which DisallowableExpenses to update
     */
    where?: DisallowableExpensesWhereInput
  }


  /**
   * DisallowableExpenses upsert
   */
  export type DisallowableExpensesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisallowableExpenses
     */
    select?: DisallowableExpensesSelect<ExtArgs> | null
    /**
     * The filter to search for the DisallowableExpenses to update in case it exists.
     */
    where: DisallowableExpensesWhereUniqueInput
    /**
     * In case the DisallowableExpenses found by the `where` argument doesn't exist, create a new DisallowableExpenses with this data.
     */
    create: XOR<DisallowableExpensesCreateInput, DisallowableExpensesUncheckedCreateInput>
    /**
     * In case the DisallowableExpenses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisallowableExpensesUpdateInput, DisallowableExpensesUncheckedUpdateInput>
  }


  /**
   * DisallowableExpenses delete
   */
  export type DisallowableExpensesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisallowableExpenses
     */
    select?: DisallowableExpensesSelect<ExtArgs> | null
    /**
     * Filter which DisallowableExpenses to delete.
     */
    where: DisallowableExpensesWhereUniqueInput
  }


  /**
   * DisallowableExpenses deleteMany
   */
  export type DisallowableExpensesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DisallowableExpenses to delete
     */
    where?: DisallowableExpensesWhereInput
  }


  /**
   * DisallowableExpenses findRaw
   */
  export type DisallowableExpensesFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * DisallowableExpenses aggregateRaw
   */
  export type DisallowableExpensesAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * DisallowableExpenses without action
   */
  export type DisallowableExpensesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisallowableExpenses
     */
    select?: DisallowableExpensesSelect<ExtArgs> | null
  }



  /**
   * Model AllowableExpenses
   */

  export type AggregateAllowableExpenses = {
    _count: AllowableExpensesCountAggregateOutputType | null
    _avg: AllowableExpensesAvgAggregateOutputType | null
    _sum: AllowableExpensesSumAggregateOutputType | null
    _min: AllowableExpensesMinAggregateOutputType | null
    _max: AllowableExpensesMaxAggregateOutputType | null
  }

  export type AllowableExpensesAvgAggregateOutputType = {
    Amount: number | null
  }

  export type AllowableExpensesSumAggregateOutputType = {
    Amount: number | null
  }

  export type AllowableExpensesMinAggregateOutputType = {
    id: string | null
    Description: string | null
    Amount: number | null
    PropertyID: string | null
    DateIncurred: string | null
  }

  export type AllowableExpensesMaxAggregateOutputType = {
    id: string | null
    Description: string | null
    Amount: number | null
    PropertyID: string | null
    DateIncurred: string | null
  }

  export type AllowableExpensesCountAggregateOutputType = {
    id: number
    Description: number
    Amount: number
    PropertyID: number
    DateIncurred: number
    _all: number
  }


  export type AllowableExpensesAvgAggregateInputType = {
    Amount?: true
  }

  export type AllowableExpensesSumAggregateInputType = {
    Amount?: true
  }

  export type AllowableExpensesMinAggregateInputType = {
    id?: true
    Description?: true
    Amount?: true
    PropertyID?: true
    DateIncurred?: true
  }

  export type AllowableExpensesMaxAggregateInputType = {
    id?: true
    Description?: true
    Amount?: true
    PropertyID?: true
    DateIncurred?: true
  }

  export type AllowableExpensesCountAggregateInputType = {
    id?: true
    Description?: true
    Amount?: true
    PropertyID?: true
    DateIncurred?: true
    _all?: true
  }

  export type AllowableExpensesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AllowableExpenses to aggregate.
     */
    where?: AllowableExpensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllowableExpenses to fetch.
     */
    orderBy?: AllowableExpensesOrderByWithRelationInput | AllowableExpensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AllowableExpensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllowableExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllowableExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AllowableExpenses
    **/
    _count?: true | AllowableExpensesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AllowableExpensesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AllowableExpensesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AllowableExpensesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AllowableExpensesMaxAggregateInputType
  }

  export type GetAllowableExpensesAggregateType<T extends AllowableExpensesAggregateArgs> = {
        [P in keyof T & keyof AggregateAllowableExpenses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAllowableExpenses[P]>
      : GetScalarType<T[P], AggregateAllowableExpenses[P]>
  }




  export type AllowableExpensesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AllowableExpensesWhereInput
    orderBy?: AllowableExpensesOrderByWithAggregationInput | AllowableExpensesOrderByWithAggregationInput[]
    by: AllowableExpensesScalarFieldEnum[] | AllowableExpensesScalarFieldEnum
    having?: AllowableExpensesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AllowableExpensesCountAggregateInputType | true
    _avg?: AllowableExpensesAvgAggregateInputType
    _sum?: AllowableExpensesSumAggregateInputType
    _min?: AllowableExpensesMinAggregateInputType
    _max?: AllowableExpensesMaxAggregateInputType
  }

  export type AllowableExpensesGroupByOutputType = {
    id: string
    Description: string
    Amount: number
    PropertyID: string
    DateIncurred: string
    _count: AllowableExpensesCountAggregateOutputType | null
    _avg: AllowableExpensesAvgAggregateOutputType | null
    _sum: AllowableExpensesSumAggregateOutputType | null
    _min: AllowableExpensesMinAggregateOutputType | null
    _max: AllowableExpensesMaxAggregateOutputType | null
  }

  type GetAllowableExpensesGroupByPayload<T extends AllowableExpensesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AllowableExpensesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AllowableExpensesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AllowableExpensesGroupByOutputType[P]>
            : GetScalarType<T[P], AllowableExpensesGroupByOutputType[P]>
        }
      >
    >


  export type AllowableExpensesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Description?: boolean
    Amount?: boolean
    PropertyID?: boolean
    DateIncurred?: boolean
  }, ExtArgs["result"]["allowableExpenses"]>

  export type AllowableExpensesSelectScalar = {
    id?: boolean
    Description?: boolean
    Amount?: boolean
    PropertyID?: boolean
    DateIncurred?: boolean
  }


  export type $AllowableExpensesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AllowableExpenses"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      Description: string
      Amount: number
      PropertyID: string
      DateIncurred: string
    }, ExtArgs["result"]["allowableExpenses"]>
    composites: {}
  }


  type AllowableExpensesGetPayload<S extends boolean | null | undefined | AllowableExpensesDefaultArgs> = $Result.GetResult<Prisma.$AllowableExpensesPayload, S>

  type AllowableExpensesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AllowableExpensesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AllowableExpensesCountAggregateInputType | true
    }

  export interface AllowableExpensesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AllowableExpenses'], meta: { name: 'AllowableExpenses' } }
    /**
     * Find zero or one AllowableExpenses that matches the filter.
     * @param {AllowableExpensesFindUniqueArgs} args - Arguments to find a AllowableExpenses
     * @example
     * // Get one AllowableExpenses
     * const allowableExpenses = await prisma.allowableExpenses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AllowableExpensesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AllowableExpensesFindUniqueArgs<ExtArgs>>
    ): Prisma__AllowableExpensesClient<$Result.GetResult<Prisma.$AllowableExpensesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AllowableExpenses that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AllowableExpensesFindUniqueOrThrowArgs} args - Arguments to find a AllowableExpenses
     * @example
     * // Get one AllowableExpenses
     * const allowableExpenses = await prisma.allowableExpenses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AllowableExpensesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AllowableExpensesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AllowableExpensesClient<$Result.GetResult<Prisma.$AllowableExpensesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AllowableExpenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllowableExpensesFindFirstArgs} args - Arguments to find a AllowableExpenses
     * @example
     * // Get one AllowableExpenses
     * const allowableExpenses = await prisma.allowableExpenses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AllowableExpensesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AllowableExpensesFindFirstArgs<ExtArgs>>
    ): Prisma__AllowableExpensesClient<$Result.GetResult<Prisma.$AllowableExpensesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AllowableExpenses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllowableExpensesFindFirstOrThrowArgs} args - Arguments to find a AllowableExpenses
     * @example
     * // Get one AllowableExpenses
     * const allowableExpenses = await prisma.allowableExpenses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AllowableExpensesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AllowableExpensesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AllowableExpensesClient<$Result.GetResult<Prisma.$AllowableExpensesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AllowableExpenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllowableExpensesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AllowableExpenses
     * const allowableExpenses = await prisma.allowableExpenses.findMany()
     * 
     * // Get first 10 AllowableExpenses
     * const allowableExpenses = await prisma.allowableExpenses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const allowableExpensesWithIdOnly = await prisma.allowableExpenses.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AllowableExpensesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AllowableExpensesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllowableExpensesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AllowableExpenses.
     * @param {AllowableExpensesCreateArgs} args - Arguments to create a AllowableExpenses.
     * @example
     * // Create one AllowableExpenses
     * const AllowableExpenses = await prisma.allowableExpenses.create({
     *   data: {
     *     // ... data to create a AllowableExpenses
     *   }
     * })
     * 
    **/
    create<T extends AllowableExpensesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AllowableExpensesCreateArgs<ExtArgs>>
    ): Prisma__AllowableExpensesClient<$Result.GetResult<Prisma.$AllowableExpensesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AllowableExpenses.
     *     @param {AllowableExpensesCreateManyArgs} args - Arguments to create many AllowableExpenses.
     *     @example
     *     // Create many AllowableExpenses
     *     const allowableExpenses = await prisma.allowableExpenses.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AllowableExpensesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AllowableExpensesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AllowableExpenses.
     * @param {AllowableExpensesDeleteArgs} args - Arguments to delete one AllowableExpenses.
     * @example
     * // Delete one AllowableExpenses
     * const AllowableExpenses = await prisma.allowableExpenses.delete({
     *   where: {
     *     // ... filter to delete one AllowableExpenses
     *   }
     * })
     * 
    **/
    delete<T extends AllowableExpensesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AllowableExpensesDeleteArgs<ExtArgs>>
    ): Prisma__AllowableExpensesClient<$Result.GetResult<Prisma.$AllowableExpensesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AllowableExpenses.
     * @param {AllowableExpensesUpdateArgs} args - Arguments to update one AllowableExpenses.
     * @example
     * // Update one AllowableExpenses
     * const allowableExpenses = await prisma.allowableExpenses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AllowableExpensesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AllowableExpensesUpdateArgs<ExtArgs>>
    ): Prisma__AllowableExpensesClient<$Result.GetResult<Prisma.$AllowableExpensesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AllowableExpenses.
     * @param {AllowableExpensesDeleteManyArgs} args - Arguments to filter AllowableExpenses to delete.
     * @example
     * // Delete a few AllowableExpenses
     * const { count } = await prisma.allowableExpenses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AllowableExpensesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AllowableExpensesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AllowableExpenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllowableExpensesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AllowableExpenses
     * const allowableExpenses = await prisma.allowableExpenses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AllowableExpensesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AllowableExpensesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AllowableExpenses.
     * @param {AllowableExpensesUpsertArgs} args - Arguments to update or create a AllowableExpenses.
     * @example
     * // Update or create a AllowableExpenses
     * const allowableExpenses = await prisma.allowableExpenses.upsert({
     *   create: {
     *     // ... data to create a AllowableExpenses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AllowableExpenses we want to update
     *   }
     * })
    **/
    upsert<T extends AllowableExpensesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AllowableExpensesUpsertArgs<ExtArgs>>
    ): Prisma__AllowableExpensesClient<$Result.GetResult<Prisma.$AllowableExpensesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more AllowableExpenses that matches the filter.
     * @param {AllowableExpensesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const allowableExpenses = await prisma.allowableExpenses.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: AllowableExpensesFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AllowableExpenses.
     * @param {AllowableExpensesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const allowableExpenses = await prisma.allowableExpenses.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: AllowableExpensesAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of AllowableExpenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllowableExpensesCountArgs} args - Arguments to filter AllowableExpenses to count.
     * @example
     * // Count the number of AllowableExpenses
     * const count = await prisma.allowableExpenses.count({
     *   where: {
     *     // ... the filter for the AllowableExpenses we want to count
     *   }
     * })
    **/
    count<T extends AllowableExpensesCountArgs>(
      args?: Subset<T, AllowableExpensesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AllowableExpensesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AllowableExpenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllowableExpensesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AllowableExpensesAggregateArgs>(args: Subset<T, AllowableExpensesAggregateArgs>): Prisma.PrismaPromise<GetAllowableExpensesAggregateType<T>>

    /**
     * Group by AllowableExpenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllowableExpensesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AllowableExpensesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AllowableExpensesGroupByArgs['orderBy'] }
        : { orderBy?: AllowableExpensesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AllowableExpensesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAllowableExpensesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AllowableExpenses model
   */
  readonly fields: AllowableExpensesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AllowableExpenses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AllowableExpensesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AllowableExpenses model
   */ 
  interface AllowableExpensesFieldRefs {
    readonly id: FieldRef<"AllowableExpenses", 'String'>
    readonly Description: FieldRef<"AllowableExpenses", 'String'>
    readonly Amount: FieldRef<"AllowableExpenses", 'Int'>
    readonly PropertyID: FieldRef<"AllowableExpenses", 'String'>
    readonly DateIncurred: FieldRef<"AllowableExpenses", 'String'>
  }
    

  // Custom InputTypes

  /**
   * AllowableExpenses findUnique
   */
  export type AllowableExpensesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowableExpenses
     */
    select?: AllowableExpensesSelect<ExtArgs> | null
    /**
     * Filter, which AllowableExpenses to fetch.
     */
    where: AllowableExpensesWhereUniqueInput
  }


  /**
   * AllowableExpenses findUniqueOrThrow
   */
  export type AllowableExpensesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowableExpenses
     */
    select?: AllowableExpensesSelect<ExtArgs> | null
    /**
     * Filter, which AllowableExpenses to fetch.
     */
    where: AllowableExpensesWhereUniqueInput
  }


  /**
   * AllowableExpenses findFirst
   */
  export type AllowableExpensesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowableExpenses
     */
    select?: AllowableExpensesSelect<ExtArgs> | null
    /**
     * Filter, which AllowableExpenses to fetch.
     */
    where?: AllowableExpensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllowableExpenses to fetch.
     */
    orderBy?: AllowableExpensesOrderByWithRelationInput | AllowableExpensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AllowableExpenses.
     */
    cursor?: AllowableExpensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllowableExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllowableExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AllowableExpenses.
     */
    distinct?: AllowableExpensesScalarFieldEnum | AllowableExpensesScalarFieldEnum[]
  }


  /**
   * AllowableExpenses findFirstOrThrow
   */
  export type AllowableExpensesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowableExpenses
     */
    select?: AllowableExpensesSelect<ExtArgs> | null
    /**
     * Filter, which AllowableExpenses to fetch.
     */
    where?: AllowableExpensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllowableExpenses to fetch.
     */
    orderBy?: AllowableExpensesOrderByWithRelationInput | AllowableExpensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AllowableExpenses.
     */
    cursor?: AllowableExpensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllowableExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllowableExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AllowableExpenses.
     */
    distinct?: AllowableExpensesScalarFieldEnum | AllowableExpensesScalarFieldEnum[]
  }


  /**
   * AllowableExpenses findMany
   */
  export type AllowableExpensesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowableExpenses
     */
    select?: AllowableExpensesSelect<ExtArgs> | null
    /**
     * Filter, which AllowableExpenses to fetch.
     */
    where?: AllowableExpensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllowableExpenses to fetch.
     */
    orderBy?: AllowableExpensesOrderByWithRelationInput | AllowableExpensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AllowableExpenses.
     */
    cursor?: AllowableExpensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllowableExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllowableExpenses.
     */
    skip?: number
    distinct?: AllowableExpensesScalarFieldEnum | AllowableExpensesScalarFieldEnum[]
  }


  /**
   * AllowableExpenses create
   */
  export type AllowableExpensesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowableExpenses
     */
    select?: AllowableExpensesSelect<ExtArgs> | null
    /**
     * The data needed to create a AllowableExpenses.
     */
    data: XOR<AllowableExpensesCreateInput, AllowableExpensesUncheckedCreateInput>
  }


  /**
   * AllowableExpenses createMany
   */
  export type AllowableExpensesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AllowableExpenses.
     */
    data: AllowableExpensesCreateManyInput | AllowableExpensesCreateManyInput[]
  }


  /**
   * AllowableExpenses update
   */
  export type AllowableExpensesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowableExpenses
     */
    select?: AllowableExpensesSelect<ExtArgs> | null
    /**
     * The data needed to update a AllowableExpenses.
     */
    data: XOR<AllowableExpensesUpdateInput, AllowableExpensesUncheckedUpdateInput>
    /**
     * Choose, which AllowableExpenses to update.
     */
    where: AllowableExpensesWhereUniqueInput
  }


  /**
   * AllowableExpenses updateMany
   */
  export type AllowableExpensesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AllowableExpenses.
     */
    data: XOR<AllowableExpensesUpdateManyMutationInput, AllowableExpensesUncheckedUpdateManyInput>
    /**
     * Filter which AllowableExpenses to update
     */
    where?: AllowableExpensesWhereInput
  }


  /**
   * AllowableExpenses upsert
   */
  export type AllowableExpensesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowableExpenses
     */
    select?: AllowableExpensesSelect<ExtArgs> | null
    /**
     * The filter to search for the AllowableExpenses to update in case it exists.
     */
    where: AllowableExpensesWhereUniqueInput
    /**
     * In case the AllowableExpenses found by the `where` argument doesn't exist, create a new AllowableExpenses with this data.
     */
    create: XOR<AllowableExpensesCreateInput, AllowableExpensesUncheckedCreateInput>
    /**
     * In case the AllowableExpenses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AllowableExpensesUpdateInput, AllowableExpensesUncheckedUpdateInput>
  }


  /**
   * AllowableExpenses delete
   */
  export type AllowableExpensesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowableExpenses
     */
    select?: AllowableExpensesSelect<ExtArgs> | null
    /**
     * Filter which AllowableExpenses to delete.
     */
    where: AllowableExpensesWhereUniqueInput
  }


  /**
   * AllowableExpenses deleteMany
   */
  export type AllowableExpensesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AllowableExpenses to delete
     */
    where?: AllowableExpensesWhereInput
  }


  /**
   * AllowableExpenses findRaw
   */
  export type AllowableExpensesFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * AllowableExpenses aggregateRaw
   */
  export type AllowableExpensesAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * AllowableExpenses without action
   */
  export type AllowableExpensesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowableExpenses
     */
    select?: AllowableExpensesSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const PropertyListingScalarFieldEnum: {
    ID: 'ID',
    PropertyName: 'PropertyName'
  };

  export type PropertyListingScalarFieldEnum = (typeof PropertyListingScalarFieldEnum)[keyof typeof PropertyListingScalarFieldEnum]


  export const RentalIncomeScalarFieldEnum: {
    ID: 'ID',
    StartPeriod: 'StartPeriod',
    EndPeriod: 'EndPeriod',
    Rental: 'Rental',
    PropertyID: 'PropertyID'
  };

  export type RentalIncomeScalarFieldEnum = (typeof RentalIncomeScalarFieldEnum)[keyof typeof RentalIncomeScalarFieldEnum]


  export const InterestExpenseScalarFieldEnum: {
    ID: 'ID',
    StartPeriod: 'StartPeriod',
    EndPeriod: 'EndPeriod',
    InterestExpense: 'InterestExpense',
    PropertyID: 'PropertyID'
  };

  export type InterestExpenseScalarFieldEnum = (typeof InterestExpenseScalarFieldEnum)[keyof typeof InterestExpenseScalarFieldEnum]


  export const CapitalRepaymentsScalarFieldEnum: {
    ID: 'ID',
    StartPeriod: 'StartPeriod',
    EndPeriod: 'EndPeriod',
    CapitalRepaid: 'CapitalRepaid',
    PropertyID: 'PropertyID'
  };

  export type CapitalRepaymentsScalarFieldEnum = (typeof CapitalRepaymentsScalarFieldEnum)[keyof typeof CapitalRepaymentsScalarFieldEnum]


  export const DisallowableExpensesScalarFieldEnum: {
    ID: 'ID',
    Description: 'Description',
    Amount: 'Amount',
    PropertyID: 'PropertyID',
    DateIncurred: 'DateIncurred'
  };

  export type DisallowableExpensesScalarFieldEnum = (typeof DisallowableExpensesScalarFieldEnum)[keyof typeof DisallowableExpensesScalarFieldEnum]


  export const AllowableExpensesScalarFieldEnum: {
    id: 'id',
    Description: 'Description',
    Amount: 'Amount',
    PropertyID: 'PropertyID',
    DateIncurred: 'DateIncurred'
  };

  export type AllowableExpensesScalarFieldEnum = (typeof AllowableExpensesScalarFieldEnum)[keyof typeof AllowableExpensesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PropertyListingWhereInput = {
    AND?: PropertyListingWhereInput | PropertyListingWhereInput[]
    OR?: PropertyListingWhereInput[]
    NOT?: PropertyListingWhereInput | PropertyListingWhereInput[]
    ID?: StringFilter<"PropertyListing"> | string
    PropertyName?: StringFilter<"PropertyListing"> | string
  }

  export type PropertyListingOrderByWithRelationInput = {
    ID?: SortOrder
    PropertyName?: SortOrder
  }

  export type PropertyListingWhereUniqueInput = Prisma.AtLeast<{
    ID?: string
    AND?: PropertyListingWhereInput | PropertyListingWhereInput[]
    OR?: PropertyListingWhereInput[]
    NOT?: PropertyListingWhereInput | PropertyListingWhereInput[]
    PropertyName?: StringFilter<"PropertyListing"> | string
  }, "ID">

  export type PropertyListingOrderByWithAggregationInput = {
    ID?: SortOrder
    PropertyName?: SortOrder
    _count?: PropertyListingCountOrderByAggregateInput
    _max?: PropertyListingMaxOrderByAggregateInput
    _min?: PropertyListingMinOrderByAggregateInput
  }

  export type PropertyListingScalarWhereWithAggregatesInput = {
    AND?: PropertyListingScalarWhereWithAggregatesInput | PropertyListingScalarWhereWithAggregatesInput[]
    OR?: PropertyListingScalarWhereWithAggregatesInput[]
    NOT?: PropertyListingScalarWhereWithAggregatesInput | PropertyListingScalarWhereWithAggregatesInput[]
    ID?: StringWithAggregatesFilter<"PropertyListing"> | string
    PropertyName?: StringWithAggregatesFilter<"PropertyListing"> | string
  }

  export type RentalIncomeWhereInput = {
    AND?: RentalIncomeWhereInput | RentalIncomeWhereInput[]
    OR?: RentalIncomeWhereInput[]
    NOT?: RentalIncomeWhereInput | RentalIncomeWhereInput[]
    ID?: StringFilter<"RentalIncome"> | string
    StartPeriod?: StringFilter<"RentalIncome"> | string
    EndPeriod?: StringFilter<"RentalIncome"> | string
    Rental?: IntFilter<"RentalIncome"> | number
    PropertyID?: StringFilter<"RentalIncome"> | string
  }

  export type RentalIncomeOrderByWithRelationInput = {
    ID?: SortOrder
    StartPeriod?: SortOrder
    EndPeriod?: SortOrder
    Rental?: SortOrder
    PropertyID?: SortOrder
  }

  export type RentalIncomeWhereUniqueInput = Prisma.AtLeast<{
    ID?: string
    AND?: RentalIncomeWhereInput | RentalIncomeWhereInput[]
    OR?: RentalIncomeWhereInput[]
    NOT?: RentalIncomeWhereInput | RentalIncomeWhereInput[]
    StartPeriod?: StringFilter<"RentalIncome"> | string
    EndPeriod?: StringFilter<"RentalIncome"> | string
    Rental?: IntFilter<"RentalIncome"> | number
    PropertyID?: StringFilter<"RentalIncome"> | string
  }, "ID">

  export type RentalIncomeOrderByWithAggregationInput = {
    ID?: SortOrder
    StartPeriod?: SortOrder
    EndPeriod?: SortOrder
    Rental?: SortOrder
    PropertyID?: SortOrder
    _count?: RentalIncomeCountOrderByAggregateInput
    _avg?: RentalIncomeAvgOrderByAggregateInput
    _max?: RentalIncomeMaxOrderByAggregateInput
    _min?: RentalIncomeMinOrderByAggregateInput
    _sum?: RentalIncomeSumOrderByAggregateInput
  }

  export type RentalIncomeScalarWhereWithAggregatesInput = {
    AND?: RentalIncomeScalarWhereWithAggregatesInput | RentalIncomeScalarWhereWithAggregatesInput[]
    OR?: RentalIncomeScalarWhereWithAggregatesInput[]
    NOT?: RentalIncomeScalarWhereWithAggregatesInput | RentalIncomeScalarWhereWithAggregatesInput[]
    ID?: StringWithAggregatesFilter<"RentalIncome"> | string
    StartPeriod?: StringWithAggregatesFilter<"RentalIncome"> | string
    EndPeriod?: StringWithAggregatesFilter<"RentalIncome"> | string
    Rental?: IntWithAggregatesFilter<"RentalIncome"> | number
    PropertyID?: StringWithAggregatesFilter<"RentalIncome"> | string
  }

  export type InterestExpenseWhereInput = {
    AND?: InterestExpenseWhereInput | InterestExpenseWhereInput[]
    OR?: InterestExpenseWhereInput[]
    NOT?: InterestExpenseWhereInput | InterestExpenseWhereInput[]
    ID?: StringFilter<"InterestExpense"> | string
    StartPeriod?: StringFilter<"InterestExpense"> | string
    EndPeriod?: StringFilter<"InterestExpense"> | string
    InterestExpense?: IntFilter<"InterestExpense"> | number
    PropertyID?: StringFilter<"InterestExpense"> | string
  }

  export type InterestExpenseOrderByWithRelationInput = {
    ID?: SortOrder
    StartPeriod?: SortOrder
    EndPeriod?: SortOrder
    InterestExpense?: SortOrder
    PropertyID?: SortOrder
  }

  export type InterestExpenseWhereUniqueInput = Prisma.AtLeast<{
    ID?: string
    AND?: InterestExpenseWhereInput | InterestExpenseWhereInput[]
    OR?: InterestExpenseWhereInput[]
    NOT?: InterestExpenseWhereInput | InterestExpenseWhereInput[]
    StartPeriod?: StringFilter<"InterestExpense"> | string
    EndPeriod?: StringFilter<"InterestExpense"> | string
    InterestExpense?: IntFilter<"InterestExpense"> | number
    PropertyID?: StringFilter<"InterestExpense"> | string
  }, "ID">

  export type InterestExpenseOrderByWithAggregationInput = {
    ID?: SortOrder
    StartPeriod?: SortOrder
    EndPeriod?: SortOrder
    InterestExpense?: SortOrder
    PropertyID?: SortOrder
    _count?: InterestExpenseCountOrderByAggregateInput
    _avg?: InterestExpenseAvgOrderByAggregateInput
    _max?: InterestExpenseMaxOrderByAggregateInput
    _min?: InterestExpenseMinOrderByAggregateInput
    _sum?: InterestExpenseSumOrderByAggregateInput
  }

  export type InterestExpenseScalarWhereWithAggregatesInput = {
    AND?: InterestExpenseScalarWhereWithAggregatesInput | InterestExpenseScalarWhereWithAggregatesInput[]
    OR?: InterestExpenseScalarWhereWithAggregatesInput[]
    NOT?: InterestExpenseScalarWhereWithAggregatesInput | InterestExpenseScalarWhereWithAggregatesInput[]
    ID?: StringWithAggregatesFilter<"InterestExpense"> | string
    StartPeriod?: StringWithAggregatesFilter<"InterestExpense"> | string
    EndPeriod?: StringWithAggregatesFilter<"InterestExpense"> | string
    InterestExpense?: IntWithAggregatesFilter<"InterestExpense"> | number
    PropertyID?: StringWithAggregatesFilter<"InterestExpense"> | string
  }

  export type CapitalRepaymentsWhereInput = {
    AND?: CapitalRepaymentsWhereInput | CapitalRepaymentsWhereInput[]
    OR?: CapitalRepaymentsWhereInput[]
    NOT?: CapitalRepaymentsWhereInput | CapitalRepaymentsWhereInput[]
    ID?: StringFilter<"CapitalRepayments"> | string
    StartPeriod?: StringFilter<"CapitalRepayments"> | string
    EndPeriod?: StringFilter<"CapitalRepayments"> | string
    CapitalRepaid?: IntFilter<"CapitalRepayments"> | number
    PropertyID?: StringFilter<"CapitalRepayments"> | string
  }

  export type CapitalRepaymentsOrderByWithRelationInput = {
    ID?: SortOrder
    StartPeriod?: SortOrder
    EndPeriod?: SortOrder
    CapitalRepaid?: SortOrder
    PropertyID?: SortOrder
  }

  export type CapitalRepaymentsWhereUniqueInput = Prisma.AtLeast<{
    ID?: string
    AND?: CapitalRepaymentsWhereInput | CapitalRepaymentsWhereInput[]
    OR?: CapitalRepaymentsWhereInput[]
    NOT?: CapitalRepaymentsWhereInput | CapitalRepaymentsWhereInput[]
    StartPeriod?: StringFilter<"CapitalRepayments"> | string
    EndPeriod?: StringFilter<"CapitalRepayments"> | string
    CapitalRepaid?: IntFilter<"CapitalRepayments"> | number
    PropertyID?: StringFilter<"CapitalRepayments"> | string
  }, "ID">

  export type CapitalRepaymentsOrderByWithAggregationInput = {
    ID?: SortOrder
    StartPeriod?: SortOrder
    EndPeriod?: SortOrder
    CapitalRepaid?: SortOrder
    PropertyID?: SortOrder
    _count?: CapitalRepaymentsCountOrderByAggregateInput
    _avg?: CapitalRepaymentsAvgOrderByAggregateInput
    _max?: CapitalRepaymentsMaxOrderByAggregateInput
    _min?: CapitalRepaymentsMinOrderByAggregateInput
    _sum?: CapitalRepaymentsSumOrderByAggregateInput
  }

  export type CapitalRepaymentsScalarWhereWithAggregatesInput = {
    AND?: CapitalRepaymentsScalarWhereWithAggregatesInput | CapitalRepaymentsScalarWhereWithAggregatesInput[]
    OR?: CapitalRepaymentsScalarWhereWithAggregatesInput[]
    NOT?: CapitalRepaymentsScalarWhereWithAggregatesInput | CapitalRepaymentsScalarWhereWithAggregatesInput[]
    ID?: StringWithAggregatesFilter<"CapitalRepayments"> | string
    StartPeriod?: StringWithAggregatesFilter<"CapitalRepayments"> | string
    EndPeriod?: StringWithAggregatesFilter<"CapitalRepayments"> | string
    CapitalRepaid?: IntWithAggregatesFilter<"CapitalRepayments"> | number
    PropertyID?: StringWithAggregatesFilter<"CapitalRepayments"> | string
  }

  export type DisallowableExpensesWhereInput = {
    AND?: DisallowableExpensesWhereInput | DisallowableExpensesWhereInput[]
    OR?: DisallowableExpensesWhereInput[]
    NOT?: DisallowableExpensesWhereInput | DisallowableExpensesWhereInput[]
    ID?: StringFilter<"DisallowableExpenses"> | string
    Description?: StringFilter<"DisallowableExpenses"> | string
    Amount?: IntFilter<"DisallowableExpenses"> | number
    PropertyID?: StringFilter<"DisallowableExpenses"> | string
    DateIncurred?: StringFilter<"DisallowableExpenses"> | string
  }

  export type DisallowableExpensesOrderByWithRelationInput = {
    ID?: SortOrder
    Description?: SortOrder
    Amount?: SortOrder
    PropertyID?: SortOrder
    DateIncurred?: SortOrder
  }

  export type DisallowableExpensesWhereUniqueInput = Prisma.AtLeast<{
    ID?: string
    AND?: DisallowableExpensesWhereInput | DisallowableExpensesWhereInput[]
    OR?: DisallowableExpensesWhereInput[]
    NOT?: DisallowableExpensesWhereInput | DisallowableExpensesWhereInput[]
    Description?: StringFilter<"DisallowableExpenses"> | string
    Amount?: IntFilter<"DisallowableExpenses"> | number
    PropertyID?: StringFilter<"DisallowableExpenses"> | string
    DateIncurred?: StringFilter<"DisallowableExpenses"> | string
  }, "ID">

  export type DisallowableExpensesOrderByWithAggregationInput = {
    ID?: SortOrder
    Description?: SortOrder
    Amount?: SortOrder
    PropertyID?: SortOrder
    DateIncurred?: SortOrder
    _count?: DisallowableExpensesCountOrderByAggregateInput
    _avg?: DisallowableExpensesAvgOrderByAggregateInput
    _max?: DisallowableExpensesMaxOrderByAggregateInput
    _min?: DisallowableExpensesMinOrderByAggregateInput
    _sum?: DisallowableExpensesSumOrderByAggregateInput
  }

  export type DisallowableExpensesScalarWhereWithAggregatesInput = {
    AND?: DisallowableExpensesScalarWhereWithAggregatesInput | DisallowableExpensesScalarWhereWithAggregatesInput[]
    OR?: DisallowableExpensesScalarWhereWithAggregatesInput[]
    NOT?: DisallowableExpensesScalarWhereWithAggregatesInput | DisallowableExpensesScalarWhereWithAggregatesInput[]
    ID?: StringWithAggregatesFilter<"DisallowableExpenses"> | string
    Description?: StringWithAggregatesFilter<"DisallowableExpenses"> | string
    Amount?: IntWithAggregatesFilter<"DisallowableExpenses"> | number
    PropertyID?: StringWithAggregatesFilter<"DisallowableExpenses"> | string
    DateIncurred?: StringWithAggregatesFilter<"DisallowableExpenses"> | string
  }

  export type AllowableExpensesWhereInput = {
    AND?: AllowableExpensesWhereInput | AllowableExpensesWhereInput[]
    OR?: AllowableExpensesWhereInput[]
    NOT?: AllowableExpensesWhereInput | AllowableExpensesWhereInput[]
    id?: StringFilter<"AllowableExpenses"> | string
    Description?: StringFilter<"AllowableExpenses"> | string
    Amount?: IntFilter<"AllowableExpenses"> | number
    PropertyID?: StringFilter<"AllowableExpenses"> | string
    DateIncurred?: StringFilter<"AllowableExpenses"> | string
  }

  export type AllowableExpensesOrderByWithRelationInput = {
    id?: SortOrder
    Description?: SortOrder
    Amount?: SortOrder
    PropertyID?: SortOrder
    DateIncurred?: SortOrder
  }

  export type AllowableExpensesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AllowableExpensesWhereInput | AllowableExpensesWhereInput[]
    OR?: AllowableExpensesWhereInput[]
    NOT?: AllowableExpensesWhereInput | AllowableExpensesWhereInput[]
    Description?: StringFilter<"AllowableExpenses"> | string
    Amount?: IntFilter<"AllowableExpenses"> | number
    PropertyID?: StringFilter<"AllowableExpenses"> | string
    DateIncurred?: StringFilter<"AllowableExpenses"> | string
  }, "id">

  export type AllowableExpensesOrderByWithAggregationInput = {
    id?: SortOrder
    Description?: SortOrder
    Amount?: SortOrder
    PropertyID?: SortOrder
    DateIncurred?: SortOrder
    _count?: AllowableExpensesCountOrderByAggregateInput
    _avg?: AllowableExpensesAvgOrderByAggregateInput
    _max?: AllowableExpensesMaxOrderByAggregateInput
    _min?: AllowableExpensesMinOrderByAggregateInput
    _sum?: AllowableExpensesSumOrderByAggregateInput
  }

  export type AllowableExpensesScalarWhereWithAggregatesInput = {
    AND?: AllowableExpensesScalarWhereWithAggregatesInput | AllowableExpensesScalarWhereWithAggregatesInput[]
    OR?: AllowableExpensesScalarWhereWithAggregatesInput[]
    NOT?: AllowableExpensesScalarWhereWithAggregatesInput | AllowableExpensesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AllowableExpenses"> | string
    Description?: StringWithAggregatesFilter<"AllowableExpenses"> | string
    Amount?: IntWithAggregatesFilter<"AllowableExpenses"> | number
    PropertyID?: StringWithAggregatesFilter<"AllowableExpenses"> | string
    DateIncurred?: StringWithAggregatesFilter<"AllowableExpenses"> | string
  }

  export type PropertyListingCreateInput = {
    ID?: string
    PropertyName: string
  }

  export type PropertyListingUncheckedCreateInput = {
    ID?: string
    PropertyName: string
  }

  export type PropertyListingUpdateInput = {
    PropertyName?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyListingUncheckedUpdateInput = {
    PropertyName?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyListingCreateManyInput = {
    ID?: string
    PropertyName: string
  }

  export type PropertyListingUpdateManyMutationInput = {
    PropertyName?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyListingUncheckedUpdateManyInput = {
    PropertyName?: StringFieldUpdateOperationsInput | string
  }

  export type RentalIncomeCreateInput = {
    ID?: string
    StartPeriod: string
    EndPeriod: string
    Rental: number
    PropertyID: string
  }

  export type RentalIncomeUncheckedCreateInput = {
    ID?: string
    StartPeriod: string
    EndPeriod: string
    Rental: number
    PropertyID: string
  }

  export type RentalIncomeUpdateInput = {
    StartPeriod?: StringFieldUpdateOperationsInput | string
    EndPeriod?: StringFieldUpdateOperationsInput | string
    Rental?: IntFieldUpdateOperationsInput | number
    PropertyID?: StringFieldUpdateOperationsInput | string
  }

  export type RentalIncomeUncheckedUpdateInput = {
    StartPeriod?: StringFieldUpdateOperationsInput | string
    EndPeriod?: StringFieldUpdateOperationsInput | string
    Rental?: IntFieldUpdateOperationsInput | number
    PropertyID?: StringFieldUpdateOperationsInput | string
  }

  export type RentalIncomeCreateManyInput = {
    ID?: string
    StartPeriod: string
    EndPeriod: string
    Rental: number
    PropertyID: string
  }

  export type RentalIncomeUpdateManyMutationInput = {
    StartPeriod?: StringFieldUpdateOperationsInput | string
    EndPeriod?: StringFieldUpdateOperationsInput | string
    Rental?: IntFieldUpdateOperationsInput | number
    PropertyID?: StringFieldUpdateOperationsInput | string
  }

  export type RentalIncomeUncheckedUpdateManyInput = {
    StartPeriod?: StringFieldUpdateOperationsInput | string
    EndPeriod?: StringFieldUpdateOperationsInput | string
    Rental?: IntFieldUpdateOperationsInput | number
    PropertyID?: StringFieldUpdateOperationsInput | string
  }

  export type InterestExpenseCreateInput = {
    ID?: string
    StartPeriod: string
    EndPeriod: string
    InterestExpense: number
    PropertyID: string
  }

  export type InterestExpenseUncheckedCreateInput = {
    ID?: string
    StartPeriod: string
    EndPeriod: string
    InterestExpense: number
    PropertyID: string
  }

  export type InterestExpenseUpdateInput = {
    StartPeriod?: StringFieldUpdateOperationsInput | string
    EndPeriod?: StringFieldUpdateOperationsInput | string
    InterestExpense?: IntFieldUpdateOperationsInput | number
    PropertyID?: StringFieldUpdateOperationsInput | string
  }

  export type InterestExpenseUncheckedUpdateInput = {
    StartPeriod?: StringFieldUpdateOperationsInput | string
    EndPeriod?: StringFieldUpdateOperationsInput | string
    InterestExpense?: IntFieldUpdateOperationsInput | number
    PropertyID?: StringFieldUpdateOperationsInput | string
  }

  export type InterestExpenseCreateManyInput = {
    ID?: string
    StartPeriod: string
    EndPeriod: string
    InterestExpense: number
    PropertyID: string
  }

  export type InterestExpenseUpdateManyMutationInput = {
    StartPeriod?: StringFieldUpdateOperationsInput | string
    EndPeriod?: StringFieldUpdateOperationsInput | string
    InterestExpense?: IntFieldUpdateOperationsInput | number
    PropertyID?: StringFieldUpdateOperationsInput | string
  }

  export type InterestExpenseUncheckedUpdateManyInput = {
    StartPeriod?: StringFieldUpdateOperationsInput | string
    EndPeriod?: StringFieldUpdateOperationsInput | string
    InterestExpense?: IntFieldUpdateOperationsInput | number
    PropertyID?: StringFieldUpdateOperationsInput | string
  }

  export type CapitalRepaymentsCreateInput = {
    ID?: string
    StartPeriod: string
    EndPeriod: string
    CapitalRepaid: number
    PropertyID: string
  }

  export type CapitalRepaymentsUncheckedCreateInput = {
    ID?: string
    StartPeriod: string
    EndPeriod: string
    CapitalRepaid: number
    PropertyID: string
  }

  export type CapitalRepaymentsUpdateInput = {
    StartPeriod?: StringFieldUpdateOperationsInput | string
    EndPeriod?: StringFieldUpdateOperationsInput | string
    CapitalRepaid?: IntFieldUpdateOperationsInput | number
    PropertyID?: StringFieldUpdateOperationsInput | string
  }

  export type CapitalRepaymentsUncheckedUpdateInput = {
    StartPeriod?: StringFieldUpdateOperationsInput | string
    EndPeriod?: StringFieldUpdateOperationsInput | string
    CapitalRepaid?: IntFieldUpdateOperationsInput | number
    PropertyID?: StringFieldUpdateOperationsInput | string
  }

  export type CapitalRepaymentsCreateManyInput = {
    ID?: string
    StartPeriod: string
    EndPeriod: string
    CapitalRepaid: number
    PropertyID: string
  }

  export type CapitalRepaymentsUpdateManyMutationInput = {
    StartPeriod?: StringFieldUpdateOperationsInput | string
    EndPeriod?: StringFieldUpdateOperationsInput | string
    CapitalRepaid?: IntFieldUpdateOperationsInput | number
    PropertyID?: StringFieldUpdateOperationsInput | string
  }

  export type CapitalRepaymentsUncheckedUpdateManyInput = {
    StartPeriod?: StringFieldUpdateOperationsInput | string
    EndPeriod?: StringFieldUpdateOperationsInput | string
    CapitalRepaid?: IntFieldUpdateOperationsInput | number
    PropertyID?: StringFieldUpdateOperationsInput | string
  }

  export type DisallowableExpensesCreateInput = {
    ID?: string
    Description: string
    Amount: number
    PropertyID: string
    DateIncurred: string
  }

  export type DisallowableExpensesUncheckedCreateInput = {
    ID?: string
    Description: string
    Amount: number
    PropertyID: string
    DateIncurred: string
  }

  export type DisallowableExpensesUpdateInput = {
    Description?: StringFieldUpdateOperationsInput | string
    Amount?: IntFieldUpdateOperationsInput | number
    PropertyID?: StringFieldUpdateOperationsInput | string
    DateIncurred?: StringFieldUpdateOperationsInput | string
  }

  export type DisallowableExpensesUncheckedUpdateInput = {
    Description?: StringFieldUpdateOperationsInput | string
    Amount?: IntFieldUpdateOperationsInput | number
    PropertyID?: StringFieldUpdateOperationsInput | string
    DateIncurred?: StringFieldUpdateOperationsInput | string
  }

  export type DisallowableExpensesCreateManyInput = {
    ID?: string
    Description: string
    Amount: number
    PropertyID: string
    DateIncurred: string
  }

  export type DisallowableExpensesUpdateManyMutationInput = {
    Description?: StringFieldUpdateOperationsInput | string
    Amount?: IntFieldUpdateOperationsInput | number
    PropertyID?: StringFieldUpdateOperationsInput | string
    DateIncurred?: StringFieldUpdateOperationsInput | string
  }

  export type DisallowableExpensesUncheckedUpdateManyInput = {
    Description?: StringFieldUpdateOperationsInput | string
    Amount?: IntFieldUpdateOperationsInput | number
    PropertyID?: StringFieldUpdateOperationsInput | string
    DateIncurred?: StringFieldUpdateOperationsInput | string
  }

  export type AllowableExpensesCreateInput = {
    id?: string
    Description: string
    Amount: number
    PropertyID: string
    DateIncurred: string
  }

  export type AllowableExpensesUncheckedCreateInput = {
    id?: string
    Description: string
    Amount: number
    PropertyID: string
    DateIncurred: string
  }

  export type AllowableExpensesUpdateInput = {
    Description?: StringFieldUpdateOperationsInput | string
    Amount?: IntFieldUpdateOperationsInput | number
    PropertyID?: StringFieldUpdateOperationsInput | string
    DateIncurred?: StringFieldUpdateOperationsInput | string
  }

  export type AllowableExpensesUncheckedUpdateInput = {
    Description?: StringFieldUpdateOperationsInput | string
    Amount?: IntFieldUpdateOperationsInput | number
    PropertyID?: StringFieldUpdateOperationsInput | string
    DateIncurred?: StringFieldUpdateOperationsInput | string
  }

  export type AllowableExpensesCreateManyInput = {
    id?: string
    Description: string
    Amount: number
    PropertyID: string
    DateIncurred: string
  }

  export type AllowableExpensesUpdateManyMutationInput = {
    Description?: StringFieldUpdateOperationsInput | string
    Amount?: IntFieldUpdateOperationsInput | number
    PropertyID?: StringFieldUpdateOperationsInput | string
    DateIncurred?: StringFieldUpdateOperationsInput | string
  }

  export type AllowableExpensesUncheckedUpdateManyInput = {
    Description?: StringFieldUpdateOperationsInput | string
    Amount?: IntFieldUpdateOperationsInput | number
    PropertyID?: StringFieldUpdateOperationsInput | string
    DateIncurred?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type PropertyListingCountOrderByAggregateInput = {
    ID?: SortOrder
    PropertyName?: SortOrder
  }

  export type PropertyListingMaxOrderByAggregateInput = {
    ID?: SortOrder
    PropertyName?: SortOrder
  }

  export type PropertyListingMinOrderByAggregateInput = {
    ID?: SortOrder
    PropertyName?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type RentalIncomeCountOrderByAggregateInput = {
    ID?: SortOrder
    StartPeriod?: SortOrder
    EndPeriod?: SortOrder
    Rental?: SortOrder
    PropertyID?: SortOrder
  }

  export type RentalIncomeAvgOrderByAggregateInput = {
    Rental?: SortOrder
  }

  export type RentalIncomeMaxOrderByAggregateInput = {
    ID?: SortOrder
    StartPeriod?: SortOrder
    EndPeriod?: SortOrder
    Rental?: SortOrder
    PropertyID?: SortOrder
  }

  export type RentalIncomeMinOrderByAggregateInput = {
    ID?: SortOrder
    StartPeriod?: SortOrder
    EndPeriod?: SortOrder
    Rental?: SortOrder
    PropertyID?: SortOrder
  }

  export type RentalIncomeSumOrderByAggregateInput = {
    Rental?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type InterestExpenseCountOrderByAggregateInput = {
    ID?: SortOrder
    StartPeriod?: SortOrder
    EndPeriod?: SortOrder
    InterestExpense?: SortOrder
    PropertyID?: SortOrder
  }

  export type InterestExpenseAvgOrderByAggregateInput = {
    InterestExpense?: SortOrder
  }

  export type InterestExpenseMaxOrderByAggregateInput = {
    ID?: SortOrder
    StartPeriod?: SortOrder
    EndPeriod?: SortOrder
    InterestExpense?: SortOrder
    PropertyID?: SortOrder
  }

  export type InterestExpenseMinOrderByAggregateInput = {
    ID?: SortOrder
    StartPeriod?: SortOrder
    EndPeriod?: SortOrder
    InterestExpense?: SortOrder
    PropertyID?: SortOrder
  }

  export type InterestExpenseSumOrderByAggregateInput = {
    InterestExpense?: SortOrder
  }

  export type CapitalRepaymentsCountOrderByAggregateInput = {
    ID?: SortOrder
    StartPeriod?: SortOrder
    EndPeriod?: SortOrder
    CapitalRepaid?: SortOrder
    PropertyID?: SortOrder
  }

  export type CapitalRepaymentsAvgOrderByAggregateInput = {
    CapitalRepaid?: SortOrder
  }

  export type CapitalRepaymentsMaxOrderByAggregateInput = {
    ID?: SortOrder
    StartPeriod?: SortOrder
    EndPeriod?: SortOrder
    CapitalRepaid?: SortOrder
    PropertyID?: SortOrder
  }

  export type CapitalRepaymentsMinOrderByAggregateInput = {
    ID?: SortOrder
    StartPeriod?: SortOrder
    EndPeriod?: SortOrder
    CapitalRepaid?: SortOrder
    PropertyID?: SortOrder
  }

  export type CapitalRepaymentsSumOrderByAggregateInput = {
    CapitalRepaid?: SortOrder
  }

  export type DisallowableExpensesCountOrderByAggregateInput = {
    ID?: SortOrder
    Description?: SortOrder
    Amount?: SortOrder
    PropertyID?: SortOrder
    DateIncurred?: SortOrder
  }

  export type DisallowableExpensesAvgOrderByAggregateInput = {
    Amount?: SortOrder
  }

  export type DisallowableExpensesMaxOrderByAggregateInput = {
    ID?: SortOrder
    Description?: SortOrder
    Amount?: SortOrder
    PropertyID?: SortOrder
    DateIncurred?: SortOrder
  }

  export type DisallowableExpensesMinOrderByAggregateInput = {
    ID?: SortOrder
    Description?: SortOrder
    Amount?: SortOrder
    PropertyID?: SortOrder
    DateIncurred?: SortOrder
  }

  export type DisallowableExpensesSumOrderByAggregateInput = {
    Amount?: SortOrder
  }

  export type AllowableExpensesCountOrderByAggregateInput = {
    id?: SortOrder
    Description?: SortOrder
    Amount?: SortOrder
    PropertyID?: SortOrder
    DateIncurred?: SortOrder
  }

  export type AllowableExpensesAvgOrderByAggregateInput = {
    Amount?: SortOrder
  }

  export type AllowableExpensesMaxOrderByAggregateInput = {
    id?: SortOrder
    Description?: SortOrder
    Amount?: SortOrder
    PropertyID?: SortOrder
    DateIncurred?: SortOrder
  }

  export type AllowableExpensesMinOrderByAggregateInput = {
    id?: SortOrder
    Description?: SortOrder
    Amount?: SortOrder
    PropertyID?: SortOrder
    DateIncurred?: SortOrder
  }

  export type AllowableExpensesSumOrderByAggregateInput = {
    Amount?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PropertyListingDefaultArgs instead
     */
    export type PropertyListingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PropertyListingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RentalIncomeDefaultArgs instead
     */
    export type RentalIncomeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RentalIncomeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InterestExpenseDefaultArgs instead
     */
    export type InterestExpenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InterestExpenseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CapitalRepaymentsDefaultArgs instead
     */
    export type CapitalRepaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CapitalRepaymentsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DisallowableExpensesDefaultArgs instead
     */
    export type DisallowableExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DisallowableExpensesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AllowableExpensesDefaultArgs instead
     */
    export type AllowableExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AllowableExpensesDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}