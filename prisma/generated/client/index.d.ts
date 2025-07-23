
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Cottage
 * 
 */
export type Cottage = $Result.DefaultSelection<Prisma.$CottagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bookings
 * const bookings = await prisma.booking.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Bookings
   * const bookings = await prisma.booking.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cottage`: Exposes CRUD operations for the **Cottage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cottages
    * const cottages = await prisma.cottage.findMany()
    * ```
    */
  get cottage(): Prisma.CottageDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Booking: 'Booking',
    Cottage: 'Cottage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "booking" | "cottage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Cottage: {
        payload: Prisma.$CottagePayload<ExtArgs>
        fields: Prisma.CottageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CottageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CottagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CottageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CottagePayload>
          }
          findFirst: {
            args: Prisma.CottageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CottagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CottageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CottagePayload>
          }
          findMany: {
            args: Prisma.CottageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CottagePayload>[]
          }
          create: {
            args: Prisma.CottageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CottagePayload>
          }
          createMany: {
            args: Prisma.CottageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CottageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CottagePayload>[]
          }
          delete: {
            args: Prisma.CottageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CottagePayload>
          }
          update: {
            args: Prisma.CottageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CottagePayload>
          }
          deleteMany: {
            args: Prisma.CottageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CottageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CottageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CottagePayload>[]
          }
          upsert: {
            args: Prisma.CottageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CottagePayload>
          }
          aggregate: {
            args: Prisma.CottageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCottage>
          }
          groupBy: {
            args: Prisma.CottageGroupByArgs<ExtArgs>
            result: $Utils.Optional<CottageGroupByOutputType>[]
          }
          count: {
            args: Prisma.CottageCountArgs<ExtArgs>
            result: $Utils.Optional<CottageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    booking?: BookingOmit
    cottage?: CottageOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type CottageCountOutputType
   */

  export type CottageCountOutputType = {
    bookings: number
  }

  export type CottageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | CottageCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * CottageCountOutputType without action
   */
  export type CottageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CottageCountOutputType
     */
    select?: CottageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CottageCountOutputType without action
   */
  export type CottageCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    id: number | null
    cottageId: number | null
  }

  export type BookingSumAggregateOutputType = {
    id: number | null
    cottageId: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: number | null
    cottageId: number | null
    guestName: string | null
    guestEmail: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: number | null
    cottageId: number | null
    guestName: string | null
    guestEmail: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    cottageId: number
    guestName: number
    guestEmail: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    id?: true
    cottageId?: true
  }

  export type BookingSumAggregateInputType = {
    id?: true
    cottageId?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    cottageId?: true
    guestName?: true
    guestEmail?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    cottageId?: true
    guestName?: true
    guestEmail?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    cottageId?: true
    guestName?: true
    guestEmail?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: number
    cottageId: number
    guestName: string
    guestEmail: string
    startDate: Date
    endDate: Date
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cottageId?: boolean
    guestName?: boolean
    guestEmail?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cottage?: boolean | CottageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cottageId?: boolean
    guestName?: boolean
    guestEmail?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cottage?: boolean | CottageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cottageId?: boolean
    guestName?: boolean
    guestEmail?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cottage?: boolean | CottageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    cottageId?: boolean
    guestName?: boolean
    guestEmail?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cottageId" | "guestName" | "guestEmail" | "startDate" | "endDate" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cottage?: boolean | CottageDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cottage?: boolean | CottageDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cottage?: boolean | CottageDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      cottage: Prisma.$CottagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cottageId: number
      guestName: string
      guestEmail: string
      startDate: Date
      endDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cottage<T extends CottageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CottageDefaultArgs<ExtArgs>>): Prisma__CottageClient<$Result.GetResult<Prisma.$CottagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'Int'>
    readonly cottageId: FieldRef<"Booking", 'Int'>
    readonly guestName: FieldRef<"Booking", 'String'>
    readonly guestEmail: FieldRef<"Booking", 'String'>
    readonly startDate: FieldRef<"Booking", 'DateTime'>
    readonly endDate: FieldRef<"Booking", 'DateTime'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Cottage
   */

  export type AggregateCottage = {
    _count: CottageCountAggregateOutputType | null
    _avg: CottageAvgAggregateOutputType | null
    _sum: CottageSumAggregateOutputType | null
    _min: CottageMinAggregateOutputType | null
    _max: CottageMaxAggregateOutputType | null
  }

  export type CottageAvgAggregateOutputType = {
    id: number | null
    price: number | null
    bedrooms: number | null
    maxGuests: number | null
    rating: number | null
  }

  export type CottageSumAggregateOutputType = {
    id: number | null
    price: number | null
    bedrooms: number | null
    maxGuests: number | null
    rating: number | null
  }

  export type CottageMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    price: number | null
    isBooked: boolean | null
    bedrooms: number | null
    maxGuests: number | null
    location: string | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CottageMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    price: number | null
    isBooked: boolean | null
    bedrooms: number | null
    maxGuests: number | null
    location: string | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CottageCountAggregateOutputType = {
    id: number
    title: number
    description: number
    price: number
    isBooked: number
    bedrooms: number
    maxGuests: number
    amenities: number
    images: number
    location: number
    rating: number
    rules: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CottageAvgAggregateInputType = {
    id?: true
    price?: true
    bedrooms?: true
    maxGuests?: true
    rating?: true
  }

  export type CottageSumAggregateInputType = {
    id?: true
    price?: true
    bedrooms?: true
    maxGuests?: true
    rating?: true
  }

  export type CottageMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    isBooked?: true
    bedrooms?: true
    maxGuests?: true
    location?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CottageMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    isBooked?: true
    bedrooms?: true
    maxGuests?: true
    location?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CottageCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    isBooked?: true
    bedrooms?: true
    maxGuests?: true
    amenities?: true
    images?: true
    location?: true
    rating?: true
    rules?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CottageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cottage to aggregate.
     */
    where?: CottageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cottages to fetch.
     */
    orderBy?: CottageOrderByWithRelationInput | CottageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CottageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cottages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cottages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cottages
    **/
    _count?: true | CottageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CottageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CottageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CottageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CottageMaxAggregateInputType
  }

  export type GetCottageAggregateType<T extends CottageAggregateArgs> = {
        [P in keyof T & keyof AggregateCottage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCottage[P]>
      : GetScalarType<T[P], AggregateCottage[P]>
  }




  export type CottageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CottageWhereInput
    orderBy?: CottageOrderByWithAggregationInput | CottageOrderByWithAggregationInput[]
    by: CottageScalarFieldEnum[] | CottageScalarFieldEnum
    having?: CottageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CottageCountAggregateInputType | true
    _avg?: CottageAvgAggregateInputType
    _sum?: CottageSumAggregateInputType
    _min?: CottageMinAggregateInputType
    _max?: CottageMaxAggregateInputType
  }

  export type CottageGroupByOutputType = {
    id: number
    title: string
    description: string | null
    price: number
    isBooked: boolean
    bedrooms: number
    maxGuests: number
    amenities: string[]
    images: string[]
    location: string
    rating: number | null
    rules: string[]
    createdAt: Date
    updatedAt: Date
    _count: CottageCountAggregateOutputType | null
    _avg: CottageAvgAggregateOutputType | null
    _sum: CottageSumAggregateOutputType | null
    _min: CottageMinAggregateOutputType | null
    _max: CottageMaxAggregateOutputType | null
  }

  type GetCottageGroupByPayload<T extends CottageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CottageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CottageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CottageGroupByOutputType[P]>
            : GetScalarType<T[P], CottageGroupByOutputType[P]>
        }
      >
    >


  export type CottageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    isBooked?: boolean
    bedrooms?: boolean
    maxGuests?: boolean
    amenities?: boolean
    images?: boolean
    location?: boolean
    rating?: boolean
    rules?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookings?: boolean | Cottage$bookingsArgs<ExtArgs>
    _count?: boolean | CottageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cottage"]>

  export type CottageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    isBooked?: boolean
    bedrooms?: boolean
    maxGuests?: boolean
    amenities?: boolean
    images?: boolean
    location?: boolean
    rating?: boolean
    rules?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cottage"]>

  export type CottageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    isBooked?: boolean
    bedrooms?: boolean
    maxGuests?: boolean
    amenities?: boolean
    images?: boolean
    location?: boolean
    rating?: boolean
    rules?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cottage"]>

  export type CottageSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    isBooked?: boolean
    bedrooms?: boolean
    maxGuests?: boolean
    amenities?: boolean
    images?: boolean
    location?: boolean
    rating?: boolean
    rules?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CottageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "price" | "isBooked" | "bedrooms" | "maxGuests" | "amenities" | "images" | "location" | "rating" | "rules" | "createdAt" | "updatedAt", ExtArgs["result"]["cottage"]>
  export type CottageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | Cottage$bookingsArgs<ExtArgs>
    _count?: boolean | CottageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CottageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CottageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CottagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cottage"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      price: number
      isBooked: boolean
      bedrooms: number
      maxGuests: number
      amenities: string[]
      images: string[]
      location: string
      rating: number | null
      rules: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cottage"]>
    composites: {}
  }

  type CottageGetPayload<S extends boolean | null | undefined | CottageDefaultArgs> = $Result.GetResult<Prisma.$CottagePayload, S>

  type CottageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CottageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CottageCountAggregateInputType | true
    }

  export interface CottageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cottage'], meta: { name: 'Cottage' } }
    /**
     * Find zero or one Cottage that matches the filter.
     * @param {CottageFindUniqueArgs} args - Arguments to find a Cottage
     * @example
     * // Get one Cottage
     * const cottage = await prisma.cottage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CottageFindUniqueArgs>(args: SelectSubset<T, CottageFindUniqueArgs<ExtArgs>>): Prisma__CottageClient<$Result.GetResult<Prisma.$CottagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cottage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CottageFindUniqueOrThrowArgs} args - Arguments to find a Cottage
     * @example
     * // Get one Cottage
     * const cottage = await prisma.cottage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CottageFindUniqueOrThrowArgs>(args: SelectSubset<T, CottageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CottageClient<$Result.GetResult<Prisma.$CottagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cottage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CottageFindFirstArgs} args - Arguments to find a Cottage
     * @example
     * // Get one Cottage
     * const cottage = await prisma.cottage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CottageFindFirstArgs>(args?: SelectSubset<T, CottageFindFirstArgs<ExtArgs>>): Prisma__CottageClient<$Result.GetResult<Prisma.$CottagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cottage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CottageFindFirstOrThrowArgs} args - Arguments to find a Cottage
     * @example
     * // Get one Cottage
     * const cottage = await prisma.cottage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CottageFindFirstOrThrowArgs>(args?: SelectSubset<T, CottageFindFirstOrThrowArgs<ExtArgs>>): Prisma__CottageClient<$Result.GetResult<Prisma.$CottagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cottages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CottageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cottages
     * const cottages = await prisma.cottage.findMany()
     * 
     * // Get first 10 Cottages
     * const cottages = await prisma.cottage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cottageWithIdOnly = await prisma.cottage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CottageFindManyArgs>(args?: SelectSubset<T, CottageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CottagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cottage.
     * @param {CottageCreateArgs} args - Arguments to create a Cottage.
     * @example
     * // Create one Cottage
     * const Cottage = await prisma.cottage.create({
     *   data: {
     *     // ... data to create a Cottage
     *   }
     * })
     * 
     */
    create<T extends CottageCreateArgs>(args: SelectSubset<T, CottageCreateArgs<ExtArgs>>): Prisma__CottageClient<$Result.GetResult<Prisma.$CottagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cottages.
     * @param {CottageCreateManyArgs} args - Arguments to create many Cottages.
     * @example
     * // Create many Cottages
     * const cottage = await prisma.cottage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CottageCreateManyArgs>(args?: SelectSubset<T, CottageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cottages and returns the data saved in the database.
     * @param {CottageCreateManyAndReturnArgs} args - Arguments to create many Cottages.
     * @example
     * // Create many Cottages
     * const cottage = await prisma.cottage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cottages and only return the `id`
     * const cottageWithIdOnly = await prisma.cottage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CottageCreateManyAndReturnArgs>(args?: SelectSubset<T, CottageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CottagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cottage.
     * @param {CottageDeleteArgs} args - Arguments to delete one Cottage.
     * @example
     * // Delete one Cottage
     * const Cottage = await prisma.cottage.delete({
     *   where: {
     *     // ... filter to delete one Cottage
     *   }
     * })
     * 
     */
    delete<T extends CottageDeleteArgs>(args: SelectSubset<T, CottageDeleteArgs<ExtArgs>>): Prisma__CottageClient<$Result.GetResult<Prisma.$CottagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cottage.
     * @param {CottageUpdateArgs} args - Arguments to update one Cottage.
     * @example
     * // Update one Cottage
     * const cottage = await prisma.cottage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CottageUpdateArgs>(args: SelectSubset<T, CottageUpdateArgs<ExtArgs>>): Prisma__CottageClient<$Result.GetResult<Prisma.$CottagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cottages.
     * @param {CottageDeleteManyArgs} args - Arguments to filter Cottages to delete.
     * @example
     * // Delete a few Cottages
     * const { count } = await prisma.cottage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CottageDeleteManyArgs>(args?: SelectSubset<T, CottageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cottages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CottageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cottages
     * const cottage = await prisma.cottage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CottageUpdateManyArgs>(args: SelectSubset<T, CottageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cottages and returns the data updated in the database.
     * @param {CottageUpdateManyAndReturnArgs} args - Arguments to update many Cottages.
     * @example
     * // Update many Cottages
     * const cottage = await prisma.cottage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cottages and only return the `id`
     * const cottageWithIdOnly = await prisma.cottage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CottageUpdateManyAndReturnArgs>(args: SelectSubset<T, CottageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CottagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cottage.
     * @param {CottageUpsertArgs} args - Arguments to update or create a Cottage.
     * @example
     * // Update or create a Cottage
     * const cottage = await prisma.cottage.upsert({
     *   create: {
     *     // ... data to create a Cottage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cottage we want to update
     *   }
     * })
     */
    upsert<T extends CottageUpsertArgs>(args: SelectSubset<T, CottageUpsertArgs<ExtArgs>>): Prisma__CottageClient<$Result.GetResult<Prisma.$CottagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cottages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CottageCountArgs} args - Arguments to filter Cottages to count.
     * @example
     * // Count the number of Cottages
     * const count = await prisma.cottage.count({
     *   where: {
     *     // ... the filter for the Cottages we want to count
     *   }
     * })
    **/
    count<T extends CottageCountArgs>(
      args?: Subset<T, CottageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CottageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cottage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CottageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CottageAggregateArgs>(args: Subset<T, CottageAggregateArgs>): Prisma.PrismaPromise<GetCottageAggregateType<T>>

    /**
     * Group by Cottage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CottageGroupByArgs} args - Group by arguments.
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
      T extends CottageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CottageGroupByArgs['orderBy'] }
        : { orderBy?: CottageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CottageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCottageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cottage model
   */
  readonly fields: CottageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cottage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CottageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends Cottage$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Cottage$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cottage model
   */
  interface CottageFieldRefs {
    readonly id: FieldRef<"Cottage", 'Int'>
    readonly title: FieldRef<"Cottage", 'String'>
    readonly description: FieldRef<"Cottage", 'String'>
    readonly price: FieldRef<"Cottage", 'Float'>
    readonly isBooked: FieldRef<"Cottage", 'Boolean'>
    readonly bedrooms: FieldRef<"Cottage", 'Int'>
    readonly maxGuests: FieldRef<"Cottage", 'Int'>
    readonly amenities: FieldRef<"Cottage", 'String[]'>
    readonly images: FieldRef<"Cottage", 'String[]'>
    readonly location: FieldRef<"Cottage", 'String'>
    readonly rating: FieldRef<"Cottage", 'Float'>
    readonly rules: FieldRef<"Cottage", 'String[]'>
    readonly createdAt: FieldRef<"Cottage", 'DateTime'>
    readonly updatedAt: FieldRef<"Cottage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cottage findUnique
   */
  export type CottageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cottage
     */
    select?: CottageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cottage
     */
    omit?: CottageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CottageInclude<ExtArgs> | null
    /**
     * Filter, which Cottage to fetch.
     */
    where: CottageWhereUniqueInput
  }

  /**
   * Cottage findUniqueOrThrow
   */
  export type CottageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cottage
     */
    select?: CottageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cottage
     */
    omit?: CottageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CottageInclude<ExtArgs> | null
    /**
     * Filter, which Cottage to fetch.
     */
    where: CottageWhereUniqueInput
  }

  /**
   * Cottage findFirst
   */
  export type CottageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cottage
     */
    select?: CottageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cottage
     */
    omit?: CottageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CottageInclude<ExtArgs> | null
    /**
     * Filter, which Cottage to fetch.
     */
    where?: CottageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cottages to fetch.
     */
    orderBy?: CottageOrderByWithRelationInput | CottageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cottages.
     */
    cursor?: CottageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cottages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cottages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cottages.
     */
    distinct?: CottageScalarFieldEnum | CottageScalarFieldEnum[]
  }

  /**
   * Cottage findFirstOrThrow
   */
  export type CottageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cottage
     */
    select?: CottageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cottage
     */
    omit?: CottageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CottageInclude<ExtArgs> | null
    /**
     * Filter, which Cottage to fetch.
     */
    where?: CottageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cottages to fetch.
     */
    orderBy?: CottageOrderByWithRelationInput | CottageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cottages.
     */
    cursor?: CottageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cottages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cottages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cottages.
     */
    distinct?: CottageScalarFieldEnum | CottageScalarFieldEnum[]
  }

  /**
   * Cottage findMany
   */
  export type CottageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cottage
     */
    select?: CottageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cottage
     */
    omit?: CottageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CottageInclude<ExtArgs> | null
    /**
     * Filter, which Cottages to fetch.
     */
    where?: CottageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cottages to fetch.
     */
    orderBy?: CottageOrderByWithRelationInput | CottageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cottages.
     */
    cursor?: CottageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cottages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cottages.
     */
    skip?: number
    distinct?: CottageScalarFieldEnum | CottageScalarFieldEnum[]
  }

  /**
   * Cottage create
   */
  export type CottageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cottage
     */
    select?: CottageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cottage
     */
    omit?: CottageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CottageInclude<ExtArgs> | null
    /**
     * The data needed to create a Cottage.
     */
    data: XOR<CottageCreateInput, CottageUncheckedCreateInput>
  }

  /**
   * Cottage createMany
   */
  export type CottageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cottages.
     */
    data: CottageCreateManyInput | CottageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cottage createManyAndReturn
   */
  export type CottageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cottage
     */
    select?: CottageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cottage
     */
    omit?: CottageOmit<ExtArgs> | null
    /**
     * The data used to create many Cottages.
     */
    data: CottageCreateManyInput | CottageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cottage update
   */
  export type CottageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cottage
     */
    select?: CottageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cottage
     */
    omit?: CottageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CottageInclude<ExtArgs> | null
    /**
     * The data needed to update a Cottage.
     */
    data: XOR<CottageUpdateInput, CottageUncheckedUpdateInput>
    /**
     * Choose, which Cottage to update.
     */
    where: CottageWhereUniqueInput
  }

  /**
   * Cottage updateMany
   */
  export type CottageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cottages.
     */
    data: XOR<CottageUpdateManyMutationInput, CottageUncheckedUpdateManyInput>
    /**
     * Filter which Cottages to update
     */
    where?: CottageWhereInput
    /**
     * Limit how many Cottages to update.
     */
    limit?: number
  }

  /**
   * Cottage updateManyAndReturn
   */
  export type CottageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cottage
     */
    select?: CottageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cottage
     */
    omit?: CottageOmit<ExtArgs> | null
    /**
     * The data used to update Cottages.
     */
    data: XOR<CottageUpdateManyMutationInput, CottageUncheckedUpdateManyInput>
    /**
     * Filter which Cottages to update
     */
    where?: CottageWhereInput
    /**
     * Limit how many Cottages to update.
     */
    limit?: number
  }

  /**
   * Cottage upsert
   */
  export type CottageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cottage
     */
    select?: CottageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cottage
     */
    omit?: CottageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CottageInclude<ExtArgs> | null
    /**
     * The filter to search for the Cottage to update in case it exists.
     */
    where: CottageWhereUniqueInput
    /**
     * In case the Cottage found by the `where` argument doesn't exist, create a new Cottage with this data.
     */
    create: XOR<CottageCreateInput, CottageUncheckedCreateInput>
    /**
     * In case the Cottage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CottageUpdateInput, CottageUncheckedUpdateInput>
  }

  /**
   * Cottage delete
   */
  export type CottageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cottage
     */
    select?: CottageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cottage
     */
    omit?: CottageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CottageInclude<ExtArgs> | null
    /**
     * Filter which Cottage to delete.
     */
    where: CottageWhereUniqueInput
  }

  /**
   * Cottage deleteMany
   */
  export type CottageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cottages to delete
     */
    where?: CottageWhereInput
    /**
     * Limit how many Cottages to delete.
     */
    limit?: number
  }

  /**
   * Cottage.bookings
   */
  export type Cottage$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Cottage without action
   */
  export type CottageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cottage
     */
    select?: CottageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cottage
     */
    omit?: CottageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CottageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BookingScalarFieldEnum: {
    id: 'id',
    cottageId: 'cottageId',
    guestName: 'guestName',
    guestEmail: 'guestEmail',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const CottageScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    price: 'price',
    isBooked: 'isBooked',
    bedrooms: 'bedrooms',
    maxGuests: 'maxGuests',
    amenities: 'amenities',
    images: 'images',
    location: 'location',
    rating: 'rating',
    rules: 'rules',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CottageScalarFieldEnum = (typeof CottageScalarFieldEnum)[keyof typeof CottageScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: IntFilter<"Booking"> | number
    cottageId?: IntFilter<"Booking"> | number
    guestName?: StringFilter<"Booking"> | string
    guestEmail?: StringFilter<"Booking"> | string
    startDate?: DateTimeFilter<"Booking"> | Date | string
    endDate?: DateTimeFilter<"Booking"> | Date | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    cottage?: XOR<CottageScalarRelationFilter, CottageWhereInput>
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    cottageId?: SortOrder
    guestName?: SortOrder
    guestEmail?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cottage?: CottageOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    cottageId?: IntFilter<"Booking"> | number
    guestName?: StringFilter<"Booking"> | string
    guestEmail?: StringFilter<"Booking"> | string
    startDate?: DateTimeFilter<"Booking"> | Date | string
    endDate?: DateTimeFilter<"Booking"> | Date | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    cottage?: XOR<CottageScalarRelationFilter, CottageWhereInput>
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    cottageId?: SortOrder
    guestName?: SortOrder
    guestEmail?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Booking"> | number
    cottageId?: IntWithAggregatesFilter<"Booking"> | number
    guestName?: StringWithAggregatesFilter<"Booking"> | string
    guestEmail?: StringWithAggregatesFilter<"Booking"> | string
    startDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type CottageWhereInput = {
    AND?: CottageWhereInput | CottageWhereInput[]
    OR?: CottageWhereInput[]
    NOT?: CottageWhereInput | CottageWhereInput[]
    id?: IntFilter<"Cottage"> | number
    title?: StringFilter<"Cottage"> | string
    description?: StringNullableFilter<"Cottage"> | string | null
    price?: FloatFilter<"Cottage"> | number
    isBooked?: BoolFilter<"Cottage"> | boolean
    bedrooms?: IntFilter<"Cottage"> | number
    maxGuests?: IntFilter<"Cottage"> | number
    amenities?: StringNullableListFilter<"Cottage">
    images?: StringNullableListFilter<"Cottage">
    location?: StringFilter<"Cottage"> | string
    rating?: FloatNullableFilter<"Cottage"> | number | null
    rules?: StringNullableListFilter<"Cottage">
    createdAt?: DateTimeFilter<"Cottage"> | Date | string
    updatedAt?: DateTimeFilter<"Cottage"> | Date | string
    bookings?: BookingListRelationFilter
  }

  export type CottageOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    isBooked?: SortOrder
    bedrooms?: SortOrder
    maxGuests?: SortOrder
    amenities?: SortOrder
    images?: SortOrder
    location?: SortOrder
    rating?: SortOrderInput | SortOrder
    rules?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type CottageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CottageWhereInput | CottageWhereInput[]
    OR?: CottageWhereInput[]
    NOT?: CottageWhereInput | CottageWhereInput[]
    title?: StringFilter<"Cottage"> | string
    description?: StringNullableFilter<"Cottage"> | string | null
    price?: FloatFilter<"Cottage"> | number
    isBooked?: BoolFilter<"Cottage"> | boolean
    bedrooms?: IntFilter<"Cottage"> | number
    maxGuests?: IntFilter<"Cottage"> | number
    amenities?: StringNullableListFilter<"Cottage">
    images?: StringNullableListFilter<"Cottage">
    location?: StringFilter<"Cottage"> | string
    rating?: FloatNullableFilter<"Cottage"> | number | null
    rules?: StringNullableListFilter<"Cottage">
    createdAt?: DateTimeFilter<"Cottage"> | Date | string
    updatedAt?: DateTimeFilter<"Cottage"> | Date | string
    bookings?: BookingListRelationFilter
  }, "id">

  export type CottageOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    isBooked?: SortOrder
    bedrooms?: SortOrder
    maxGuests?: SortOrder
    amenities?: SortOrder
    images?: SortOrder
    location?: SortOrder
    rating?: SortOrderInput | SortOrder
    rules?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CottageCountOrderByAggregateInput
    _avg?: CottageAvgOrderByAggregateInput
    _max?: CottageMaxOrderByAggregateInput
    _min?: CottageMinOrderByAggregateInput
    _sum?: CottageSumOrderByAggregateInput
  }

  export type CottageScalarWhereWithAggregatesInput = {
    AND?: CottageScalarWhereWithAggregatesInput | CottageScalarWhereWithAggregatesInput[]
    OR?: CottageScalarWhereWithAggregatesInput[]
    NOT?: CottageScalarWhereWithAggregatesInput | CottageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cottage"> | number
    title?: StringWithAggregatesFilter<"Cottage"> | string
    description?: StringNullableWithAggregatesFilter<"Cottage"> | string | null
    price?: FloatWithAggregatesFilter<"Cottage"> | number
    isBooked?: BoolWithAggregatesFilter<"Cottage"> | boolean
    bedrooms?: IntWithAggregatesFilter<"Cottage"> | number
    maxGuests?: IntWithAggregatesFilter<"Cottage"> | number
    amenities?: StringNullableListFilter<"Cottage">
    images?: StringNullableListFilter<"Cottage">
    location?: StringWithAggregatesFilter<"Cottage"> | string
    rating?: FloatNullableWithAggregatesFilter<"Cottage"> | number | null
    rules?: StringNullableListFilter<"Cottage">
    createdAt?: DateTimeWithAggregatesFilter<"Cottage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cottage"> | Date | string
  }

  export type BookingCreateInput = {
    guestName: string
    guestEmail: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    cottage: CottageCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateInput = {
    id?: number
    cottageId: number
    guestName: string
    guestEmail: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateInput = {
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cottage?: CottageUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cottageId?: IntFieldUpdateOperationsInput | number
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyInput = {
    id?: number
    cottageId: number
    guestName: string
    guestEmail: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cottageId?: IntFieldUpdateOperationsInput | number
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CottageCreateInput = {
    title: string
    description?: string | null
    price: number
    isBooked?: boolean
    bedrooms?: number
    maxGuests?: number
    amenities?: CottageCreateamenitiesInput | string[]
    images?: CottageCreateimagesInput | string[]
    location: string
    rating?: number | null
    rules?: CottageCreaterulesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutCottageInput
  }

  export type CottageUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    price: number
    isBooked?: boolean
    bedrooms?: number
    maxGuests?: number
    amenities?: CottageCreateamenitiesInput | string[]
    images?: CottageCreateimagesInput | string[]
    location: string
    rating?: number | null
    rules?: CottageCreaterulesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutCottageInput
  }

  export type CottageUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    bedrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    amenities?: CottageUpdateamenitiesInput | string[]
    images?: CottageUpdateimagesInput | string[]
    location?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rules?: CottageUpdaterulesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutCottageNestedInput
  }

  export type CottageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    bedrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    amenities?: CottageUpdateamenitiesInput | string[]
    images?: CottageUpdateimagesInput | string[]
    location?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rules?: CottageUpdaterulesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutCottageNestedInput
  }

  export type CottageCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    price: number
    isBooked?: boolean
    bedrooms?: number
    maxGuests?: number
    amenities?: CottageCreateamenitiesInput | string[]
    images?: CottageCreateimagesInput | string[]
    location: string
    rating?: number | null
    rules?: CottageCreaterulesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CottageUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    bedrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    amenities?: CottageUpdateamenitiesInput | string[]
    images?: CottageUpdateimagesInput | string[]
    location?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rules?: CottageUpdaterulesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CottageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    bedrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    amenities?: CottageUpdateamenitiesInput | string[]
    images?: CottageUpdateimagesInput | string[]
    location?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rules?: CottageUpdaterulesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CottageScalarRelationFilter = {
    is?: CottageWhereInput
    isNot?: CottageWhereInput
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    cottageId?: SortOrder
    guestName?: SortOrder
    guestEmail?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    id?: SortOrder
    cottageId?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    cottageId?: SortOrder
    guestName?: SortOrder
    guestEmail?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    cottageId?: SortOrder
    guestName?: SortOrder
    guestEmail?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    id?: SortOrder
    cottageId?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CottageCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    isBooked?: SortOrder
    bedrooms?: SortOrder
    maxGuests?: SortOrder
    amenities?: SortOrder
    images?: SortOrder
    location?: SortOrder
    rating?: SortOrder
    rules?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CottageAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    bedrooms?: SortOrder
    maxGuests?: SortOrder
    rating?: SortOrder
  }

  export type CottageMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    isBooked?: SortOrder
    bedrooms?: SortOrder
    maxGuests?: SortOrder
    location?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CottageMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    isBooked?: SortOrder
    bedrooms?: SortOrder
    maxGuests?: SortOrder
    location?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CottageSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    bedrooms?: SortOrder
    maxGuests?: SortOrder
    rating?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type CottageCreateNestedOneWithoutBookingsInput = {
    create?: XOR<CottageCreateWithoutBookingsInput, CottageUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: CottageCreateOrConnectWithoutBookingsInput
    connect?: CottageWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CottageUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<CottageCreateWithoutBookingsInput, CottageUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: CottageCreateOrConnectWithoutBookingsInput
    upsert?: CottageUpsertWithoutBookingsInput
    connect?: CottageWhereUniqueInput
    update?: XOR<XOR<CottageUpdateToOneWithWhereWithoutBookingsInput, CottageUpdateWithoutBookingsInput>, CottageUncheckedUpdateWithoutBookingsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CottageCreateamenitiesInput = {
    set: string[]
  }

  export type CottageCreateimagesInput = {
    set: string[]
  }

  export type CottageCreaterulesInput = {
    set: string[]
  }

  export type BookingCreateNestedManyWithoutCottageInput = {
    create?: XOR<BookingCreateWithoutCottageInput, BookingUncheckedCreateWithoutCottageInput> | BookingCreateWithoutCottageInput[] | BookingUncheckedCreateWithoutCottageInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCottageInput | BookingCreateOrConnectWithoutCottageInput[]
    createMany?: BookingCreateManyCottageInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutCottageInput = {
    create?: XOR<BookingCreateWithoutCottageInput, BookingUncheckedCreateWithoutCottageInput> | BookingCreateWithoutCottageInput[] | BookingUncheckedCreateWithoutCottageInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCottageInput | BookingCreateOrConnectWithoutCottageInput[]
    createMany?: BookingCreateManyCottageInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CottageUpdateamenitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CottageUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CottageUpdaterulesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BookingUpdateManyWithoutCottageNestedInput = {
    create?: XOR<BookingCreateWithoutCottageInput, BookingUncheckedCreateWithoutCottageInput> | BookingCreateWithoutCottageInput[] | BookingUncheckedCreateWithoutCottageInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCottageInput | BookingCreateOrConnectWithoutCottageInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutCottageInput | BookingUpsertWithWhereUniqueWithoutCottageInput[]
    createMany?: BookingCreateManyCottageInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutCottageInput | BookingUpdateWithWhereUniqueWithoutCottageInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutCottageInput | BookingUpdateManyWithWhereWithoutCottageInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutCottageNestedInput = {
    create?: XOR<BookingCreateWithoutCottageInput, BookingUncheckedCreateWithoutCottageInput> | BookingCreateWithoutCottageInput[] | BookingUncheckedCreateWithoutCottageInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCottageInput | BookingCreateOrConnectWithoutCottageInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutCottageInput | BookingUpsertWithWhereUniqueWithoutCottageInput[]
    createMany?: BookingCreateManyCottageInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutCottageInput | BookingUpdateWithWhereUniqueWithoutCottageInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutCottageInput | BookingUpdateManyWithWhereWithoutCottageInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type CottageCreateWithoutBookingsInput = {
    title: string
    description?: string | null
    price: number
    isBooked?: boolean
    bedrooms?: number
    maxGuests?: number
    amenities?: CottageCreateamenitiesInput | string[]
    images?: CottageCreateimagesInput | string[]
    location: string
    rating?: number | null
    rules?: CottageCreaterulesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CottageUncheckedCreateWithoutBookingsInput = {
    id?: number
    title: string
    description?: string | null
    price: number
    isBooked?: boolean
    bedrooms?: number
    maxGuests?: number
    amenities?: CottageCreateamenitiesInput | string[]
    images?: CottageCreateimagesInput | string[]
    location: string
    rating?: number | null
    rules?: CottageCreaterulesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CottageCreateOrConnectWithoutBookingsInput = {
    where: CottageWhereUniqueInput
    create: XOR<CottageCreateWithoutBookingsInput, CottageUncheckedCreateWithoutBookingsInput>
  }

  export type CottageUpsertWithoutBookingsInput = {
    update: XOR<CottageUpdateWithoutBookingsInput, CottageUncheckedUpdateWithoutBookingsInput>
    create: XOR<CottageCreateWithoutBookingsInput, CottageUncheckedCreateWithoutBookingsInput>
    where?: CottageWhereInput
  }

  export type CottageUpdateToOneWithWhereWithoutBookingsInput = {
    where?: CottageWhereInput
    data: XOR<CottageUpdateWithoutBookingsInput, CottageUncheckedUpdateWithoutBookingsInput>
  }

  export type CottageUpdateWithoutBookingsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    bedrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    amenities?: CottageUpdateamenitiesInput | string[]
    images?: CottageUpdateimagesInput | string[]
    location?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rules?: CottageUpdaterulesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CottageUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    isBooked?: BoolFieldUpdateOperationsInput | boolean
    bedrooms?: IntFieldUpdateOperationsInput | number
    maxGuests?: IntFieldUpdateOperationsInput | number
    amenities?: CottageUpdateamenitiesInput | string[]
    images?: CottageUpdateimagesInput | string[]
    location?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    rules?: CottageUpdaterulesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateWithoutCottageInput = {
    guestName: string
    guestEmail: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUncheckedCreateWithoutCottageInput = {
    id?: number
    guestName: string
    guestEmail: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutCottageInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutCottageInput, BookingUncheckedCreateWithoutCottageInput>
  }

  export type BookingCreateManyCottageInputEnvelope = {
    data: BookingCreateManyCottageInput | BookingCreateManyCottageInput[]
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutCottageInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutCottageInput, BookingUncheckedUpdateWithoutCottageInput>
    create: XOR<BookingCreateWithoutCottageInput, BookingUncheckedCreateWithoutCottageInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutCottageInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutCottageInput, BookingUncheckedUpdateWithoutCottageInput>
  }

  export type BookingUpdateManyWithWhereWithoutCottageInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutCottageInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: IntFilter<"Booking"> | number
    cottageId?: IntFilter<"Booking"> | number
    guestName?: StringFilter<"Booking"> | string
    guestEmail?: StringFilter<"Booking"> | string
    startDate?: DateTimeFilter<"Booking"> | Date | string
    endDate?: DateTimeFilter<"Booking"> | Date | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type BookingCreateManyCottageInput = {
    id?: number
    guestName: string
    guestEmail: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutCottageInput = {
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateWithoutCottageInput = {
    id?: IntFieldUpdateOperationsInput | number
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutCottageInput = {
    id?: IntFieldUpdateOperationsInput | number
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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