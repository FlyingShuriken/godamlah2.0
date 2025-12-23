/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Session
 *
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>;
/**
 * Model Account
 *
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>;
/**
 * Model Verification
 *
 */
export type Verification =
  $Result.DefaultSelection<Prisma.$VerificationPayload>;
/**
 * Model UserProfile
 *
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>;
/**
 * Model Organization
 *
 */
export type Organization =
  $Result.DefaultSelection<Prisma.$OrganizationPayload>;
/**
 * Model Event
 *
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>;
/**
 * Model JobPosting
 *
 */
export type JobPosting = $Result.DefaultSelection<Prisma.$JobPostingPayload>;
/**
 * Model Experience
 *
 */
export type Experience = $Result.DefaultSelection<Prisma.$ExperiencePayload>;
/**
 * Model CheckIn
 *
 */
export type CheckIn = $Result.DefaultSelection<Prisma.$CheckInPayload>;
/**
 * Model Certificate
 *
 */
export type Certificate = $Result.DefaultSelection<Prisma.$CertificatePayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const OrganizationType: {
    COMPANY: "COMPANY";
    ORGANIZER: "ORGANIZER";
  };

  export type OrganizationType =
    (typeof OrganizationType)[keyof typeof OrganizationType];

  export const ProfileType: {
    USER: "USER";
    ORGANIZER: "ORGANIZER";
    COMPANY: "COMPANY";
  };

  export type ProfileType = (typeof ProfileType)[keyof typeof ProfileType];

  export const ExperienceType: {
    EVENT: "EVENT";
    EMPLOYMENT: "EMPLOYMENT";
  };

  export type ExperienceType =
    (typeof ExperienceType)[keyof typeof ExperienceType];

  export const CheckInType: {
    EVENT: "EVENT";
    EMPLOYMENT: "EMPLOYMENT";
  };

  export type CheckInType = (typeof CheckInType)[keyof typeof CheckInType];

  export const JobStatus: {
    DRAFT: "DRAFT";
    PUBLISHED: "PUBLISHED";
    CLOSED: "CLOSED";
  };

  export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

  export const TalentVisibility: {
    PRIVATE: "PRIVATE";
    TALENT_POOL: "TALENT_POOL";
  };

  export type TalentVisibility =
    (typeof TalentVisibility)[keyof typeof TalentVisibility];

  export const VerificationStatus: {
    VERIFIED: "VERIFIED";
    UNVERIFIED: "UNVERIFIED";
  };

  export type VerificationStatus =
    (typeof VerificationStatus)[keyof typeof VerificationStatus];

  export const CertificateType: {
    ATTENDANCE: "ATTENDANCE";
    ACHIEVEMENT: "ACHIEVEMENT";
    CERTIFICATION: "CERTIFICATION";
    EMPLOYMENT: "EMPLOYMENT";
  };

  export type CertificateType =
    (typeof CertificateType)[keyof typeof CertificateType];
}

export type OrganizationType = $Enums.OrganizationType;

export const OrganizationType: typeof $Enums.OrganizationType;

export type ProfileType = $Enums.ProfileType;

export const ProfileType: typeof $Enums.ProfileType;

export type ExperienceType = $Enums.ExperienceType;

export const ExperienceType: typeof $Enums.ExperienceType;

export type CheckInType = $Enums.CheckInType;

export const CheckInType: typeof $Enums.CheckInType;

export type JobStatus = $Enums.JobStatus;

export const JobStatus: typeof $Enums.JobStatus;

export type TalentVisibility = $Enums.TalentVisibility;

export const TalentVisibility: typeof $Enums.TalentVisibility;

export type VerificationStatus = $Enums.VerificationStatus;

export const VerificationStatus: typeof $Enums.VerificationStatus;

export type CertificateType = $Enums.CertificateType;

export const CertificateType: typeof $Enums.CertificateType;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    "extends",
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Sessions
   * const sessions = await prisma.session.findMany()
   * ```
   */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Verifications
   * const verifications = await prisma.verification.findMany()
   * ```
   */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more UserProfiles
   * const userProfiles = await prisma.userProfile.findMany()
   * ```
   */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Events
   * const events = await prisma.event.findMany()
   * ```
   */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobPosting`: Exposes CRUD operations for the **JobPosting** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more JobPostings
   * const jobPostings = await prisma.jobPosting.findMany()
   * ```
   */
  get jobPosting(): Prisma.JobPostingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.experience`: Exposes CRUD operations for the **Experience** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Experiences
   * const experiences = await prisma.experience.findMany()
   * ```
   */
  get experience(): Prisma.ExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checkIn`: Exposes CRUD operations for the **CheckIn** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more CheckIns
   * const checkIns = await prisma.checkIn.findMany()
   * ```
   */
  get checkIn(): Prisma.CheckInDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.certificate`: Exposes CRUD operations for the **Certificate** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Certificates
   * const certificates = await prisma.certificate.findMany()
   * ```
   */
  get certificate(): Prisma.CertificateDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import Bytes = runtime.Bytes;
  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
      ? "Please either choose `select` or `omit`."
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: "User";
    Session: "Session";
    Account: "Account";
    Verification: "Verification";
    UserProfile: "UserProfile";
    Organization: "Organization";
    Event: "Event";
    JobPosting: "JobPosting";
    Experience: "Experience";
    CheckIn: "CheckIn";
    Certificate: "Certificate";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | "user"
        | "session"
        | "account"
        | "verification"
        | "userProfile"
        | "organization"
        | "event"
        | "jobPosting"
        | "experience"
        | "checkIn"
        | "certificate";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>;
        fields: Prisma.SessionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>;
          };
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>;
          };
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[];
          };
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>;
          };
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[];
          };
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>;
          };
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>;
          };
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[];
          };
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>;
          };
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSession>;
          };
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SessionGroupByOutputType>[];
          };
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>;
            result: $Utils.Optional<SessionCountAggregateOutputType> | number;
          };
        };
      };
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>;
        fields: Prisma.AccountFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[];
          };
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[];
          };
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[];
          };
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>;
          };
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAccount>;
          };
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AccountGroupByOutputType>[];
          };
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>;
            result: $Utils.Optional<AccountCountAggregateOutputType> | number;
          };
        };
      };
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>;
        fields: Prisma.VerificationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>;
          };
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>;
          };
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[];
          };
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>;
          };
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[];
          };
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>;
          };
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>;
          };
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[];
          };
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>;
          };
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateVerification>;
          };
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<VerificationGroupByOutputType>[];
          };
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<VerificationCountAggregateOutputType>
              | number;
          };
        };
      };
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>;
        fields: Prisma.UserProfileFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>;
          };
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>;
          };
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[];
          };
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>;
          };
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[];
          };
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>;
          };
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>;
          };
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[];
          };
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>;
          };
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUserProfile>;
          };
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserProfileGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<UserProfileCountAggregateOutputType>
              | number;
          };
        };
      };
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>;
        fields: Prisma.OrganizationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
          };
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
          };
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[];
          };
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
          };
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[];
          };
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
          };
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
          };
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[];
          };
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
          };
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrganization>;
          };
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationGroupByOutputType>[];
          };
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<OrganizationCountAggregateOutputType>
              | number;
          };
        };
      };
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>;
        fields: Prisma.EventFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>;
          };
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>;
          };
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[];
          };
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>;
          };
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[];
          };
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>;
          };
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>;
          };
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[];
          };
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventPayload>;
          };
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEvent>;
          };
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EventGroupByOutputType>[];
          };
          count: {
            args: Prisma.EventCountArgs<ExtArgs>;
            result: $Utils.Optional<EventCountAggregateOutputType> | number;
          };
        };
      };
      JobPosting: {
        payload: Prisma.$JobPostingPayload<ExtArgs>;
        fields: Prisma.JobPostingFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.JobPostingFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.JobPostingFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>;
          };
          findFirst: {
            args: Prisma.JobPostingFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.JobPostingFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>;
          };
          findMany: {
            args: Prisma.JobPostingFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>[];
          };
          create: {
            args: Prisma.JobPostingCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>;
          };
          createMany: {
            args: Prisma.JobPostingCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.JobPostingCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>[];
          };
          delete: {
            args: Prisma.JobPostingDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>;
          };
          update: {
            args: Prisma.JobPostingUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>;
          };
          deleteMany: {
            args: Prisma.JobPostingDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.JobPostingUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.JobPostingUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>[];
          };
          upsert: {
            args: Prisma.JobPostingUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>;
          };
          aggregate: {
            args: Prisma.JobPostingAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateJobPosting>;
          };
          groupBy: {
            args: Prisma.JobPostingGroupByArgs<ExtArgs>;
            result: $Utils.Optional<JobPostingGroupByOutputType>[];
          };
          count: {
            args: Prisma.JobPostingCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<JobPostingCountAggregateOutputType>
              | number;
          };
        };
      };
      Experience: {
        payload: Prisma.$ExperiencePayload<ExtArgs>;
        fields: Prisma.ExperienceFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ExperienceFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ExperienceFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>;
          };
          findFirst: {
            args: Prisma.ExperienceFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ExperienceFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>;
          };
          findMany: {
            args: Prisma.ExperienceFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[];
          };
          create: {
            args: Prisma.ExperienceCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>;
          };
          createMany: {
            args: Prisma.ExperienceCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ExperienceCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[];
          };
          delete: {
            args: Prisma.ExperienceDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>;
          };
          update: {
            args: Prisma.ExperienceUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>;
          };
          deleteMany: {
            args: Prisma.ExperienceDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ExperienceUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ExperienceUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[];
          };
          upsert: {
            args: Prisma.ExperienceUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>;
          };
          aggregate: {
            args: Prisma.ExperienceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateExperience>;
          };
          groupBy: {
            args: Prisma.ExperienceGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ExperienceGroupByOutputType>[];
          };
          count: {
            args: Prisma.ExperienceCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<ExperienceCountAggregateOutputType>
              | number;
          };
        };
      };
      CheckIn: {
        payload: Prisma.$CheckInPayload<ExtArgs>;
        fields: Prisma.CheckInFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CheckInFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CheckInFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>;
          };
          findFirst: {
            args: Prisma.CheckInFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CheckInFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>;
          };
          findMany: {
            args: Prisma.CheckInFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>[];
          };
          create: {
            args: Prisma.CheckInCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>;
          };
          createMany: {
            args: Prisma.CheckInCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CheckInCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>[];
          };
          delete: {
            args: Prisma.CheckInDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>;
          };
          update: {
            args: Prisma.CheckInUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>;
          };
          deleteMany: {
            args: Prisma.CheckInDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CheckInUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CheckInUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>[];
          };
          upsert: {
            args: Prisma.CheckInUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>;
          };
          aggregate: {
            args: Prisma.CheckInAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCheckIn>;
          };
          groupBy: {
            args: Prisma.CheckInGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CheckInGroupByOutputType>[];
          };
          count: {
            args: Prisma.CheckInCountArgs<ExtArgs>;
            result: $Utils.Optional<CheckInCountAggregateOutputType> | number;
          };
        };
      };
      Certificate: {
        payload: Prisma.$CertificatePayload<ExtArgs>;
        fields: Prisma.CertificateFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CertificateFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CertificateFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>;
          };
          findFirst: {
            args: Prisma.CertificateFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CertificateFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>;
          };
          findMany: {
            args: Prisma.CertificateFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[];
          };
          create: {
            args: Prisma.CertificateCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>;
          };
          createMany: {
            args: Prisma.CertificateCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CertificateCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[];
          };
          delete: {
            args: Prisma.CertificateDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>;
          };
          update: {
            args: Prisma.CertificateUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>;
          };
          deleteMany: {
            args: Prisma.CertificateDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CertificateUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CertificateUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[];
          };
          upsert: {
            args: Prisma.CertificateUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>;
          };
          aggregate: {
            args: Prisma.CertificateAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCertificate>;
          };
          groupBy: {
            args: Prisma.CertificateGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CertificateGroupByOutputType>[];
          };
          count: {
            args: Prisma.CertificateCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<CertificateCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null;
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
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    session?: SessionOmit;
    account?: AccountOmit;
    verification?: VerificationOmit;
    userProfile?: UserProfileOmit;
    organization?: OrganizationOmit;
    event?: EventOmit;
    jobPosting?: JobPostingOmit;
    experience?: ExperienceOmit;
    checkIn?: CheckInOmit;
    certificate?: CertificateOmit;
  };

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T["level"] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "updateManyAndReturn"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number;
    accounts: number;
    createdOrganizations: number;
    eventsCreated: number;
    jobsCreated: number;
    experiences: number;
    checkIns: number;
    checkInsAdded: number;
    certificates: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs;
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs;
    createdOrganizations?:
      | boolean
      | UserCountOutputTypeCountCreatedOrganizationsArgs;
    eventsCreated?: boolean | UserCountOutputTypeCountEventsCreatedArgs;
    jobsCreated?: boolean | UserCountOutputTypeCountJobsCreatedArgs;
    experiences?: boolean | UserCountOutputTypeCountExperiencesArgs;
    checkIns?: boolean | UserCountOutputTypeCountCheckInsArgs;
    checkInsAdded?: boolean | UserCountOutputTypeCountCheckInsAddedArgs;
    certificates?: boolean | UserCountOutputTypeCountCertificatesArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SessionWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AccountWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedOrganizationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrganizationWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventsCreatedArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EventWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJobsCreatedArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: JobPostingWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExperiencesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ExperienceWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCheckInsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CheckInWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCheckInsAddedArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CheckInWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCertificatesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CertificateWhereInput;
  };

  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    events: number;
    jobs: number;
    experiences: number;
    checkIns: number;
    certificates: number;
  };

  export type OrganizationCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    events?: boolean | OrganizationCountOutputTypeCountEventsArgs;
    jobs?: boolean | OrganizationCountOutputTypeCountJobsArgs;
    experiences?: boolean | OrganizationCountOutputTypeCountExperiencesArgs;
    checkIns?: boolean | OrganizationCountOutputTypeCountCheckInsArgs;
    certificates?: boolean | OrganizationCountOutputTypeCountCertificatesArgs;
  };

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountEventsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EventWhereInput;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountJobsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: JobPostingWhereInput;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountExperiencesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ExperienceWhereInput;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountCheckInsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CheckInWhereInput;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountCertificatesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CertificateWhereInput;
  };

  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    checkIns: number;
    experiences: number;
    certificates: number;
  };

  export type EventCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    checkIns?: boolean | EventCountOutputTypeCountCheckInsArgs;
    experiences?: boolean | EventCountOutputTypeCountExperiencesArgs;
    certificates?: boolean | EventCountOutputTypeCountCertificatesArgs;
  };

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountCheckInsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CheckInWhereInput;
  };

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountExperiencesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ExperienceWhereInput;
  };

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountCertificatesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CertificateWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    emailVerified: boolean | null;
    image: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    mykadNumber: string | null;
    mykadVerifiedAt: Date | null;
    profileType: $Enums.ProfileType | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    emailVerified: boolean | null;
    image: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    mykadNumber: string | null;
    mykadVerifiedAt: Date | null;
    profileType: $Enums.ProfileType | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    emailVerified: number;
    image: number;
    createdAt: number;
    updatedAt: number;
    mykadNumber: number;
    mykadVerifiedAt: number;
    profileType: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    emailVerified?: true;
    image?: true;
    createdAt?: true;
    updatedAt?: true;
    mykadNumber?: true;
    mykadVerifiedAt?: true;
    profileType?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    emailVerified?: true;
    image?: true;
    createdAt?: true;
    updatedAt?: true;
    mykadNumber?: true;
    mykadVerifiedAt?: true;
    profileType?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    emailVerified?: true;
    image?: true;
    createdAt?: true;
    updatedAt?: true;
    mykadNumber?: true;
    mykadVerifiedAt?: true;
    profileType?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
    mykadNumber: string | null;
    mykadVerifiedAt: Date | null;
    profileType: $Enums.ProfileType;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      emailVerified?: boolean;
      image?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      mykadNumber?: boolean;
      mykadVerifiedAt?: boolean;
      profileType?: boolean;
      sessions?: boolean | User$sessionsArgs<ExtArgs>;
      accounts?: boolean | User$accountsArgs<ExtArgs>;
      profile?: boolean | User$profileArgs<ExtArgs>;
      createdOrganizations?: boolean | User$createdOrganizationsArgs<ExtArgs>;
      eventsCreated?: boolean | User$eventsCreatedArgs<ExtArgs>;
      jobsCreated?: boolean | User$jobsCreatedArgs<ExtArgs>;
      experiences?: boolean | User$experiencesArgs<ExtArgs>;
      checkIns?: boolean | User$checkInsArgs<ExtArgs>;
      checkInsAdded?: boolean | User$checkInsAddedArgs<ExtArgs>;
      certificates?: boolean | User$certificatesArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      emailVerified?: boolean;
      image?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      mykadNumber?: boolean;
      mykadVerifiedAt?: boolean;
      profileType?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      emailVerified?: boolean;
      image?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      mykadNumber?: boolean;
      mykadVerifiedAt?: boolean;
      profileType?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    emailVerified?: boolean;
    image?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    mykadNumber?: boolean;
    mykadVerifiedAt?: boolean;
    profileType?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "name"
    | "email"
    | "emailVerified"
    | "image"
    | "createdAt"
    | "updatedAt"
    | "mykadNumber"
    | "mykadVerifiedAt"
    | "profileType",
    ExtArgs["result"]["user"]
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>;
    accounts?: boolean | User$accountsArgs<ExtArgs>;
    profile?: boolean | User$profileArgs<ExtArgs>;
    createdOrganizations?: boolean | User$createdOrganizationsArgs<ExtArgs>;
    eventsCreated?: boolean | User$eventsCreatedArgs<ExtArgs>;
    jobsCreated?: boolean | User$jobsCreatedArgs<ExtArgs>;
    experiences?: boolean | User$experiencesArgs<ExtArgs>;
    checkIns?: boolean | User$checkInsArgs<ExtArgs>;
    checkInsAdded?: boolean | User$checkInsAddedArgs<ExtArgs>;
    certificates?: boolean | User$certificatesArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "User";
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[];
      accounts: Prisma.$AccountPayload<ExtArgs>[];
      profile: Prisma.$UserProfilePayload<ExtArgs> | null;
      createdOrganizations: Prisma.$OrganizationPayload<ExtArgs>[];
      eventsCreated: Prisma.$EventPayload<ExtArgs>[];
      jobsCreated: Prisma.$JobPostingPayload<ExtArgs>[];
      experiences: Prisma.$ExperiencePayload<ExtArgs>[];
      checkIns: Prisma.$CheckInPayload<ExtArgs>[];
      checkInsAdded: Prisma.$CheckInPayload<ExtArgs>[];
      certificates: Prisma.$CertificatePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        email: string;
        emailVerified: boolean;
        image: string | null;
        createdAt: Date;
        updatedAt: Date;
        mykadNumber: string | null;
        mykadVerifiedAt: Date | null;
        profileType: $Enums.ProfileType;
      },
      ExtArgs["result"]["user"]
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["User"];
      meta: { name: "User" };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs["orderBy"] }
        : { orderBy?: UserGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$sessionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$SessionPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$accountsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$AccountPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    profile<T extends User$profileArgs<ExtArgs> = {}>(
      args?: Subset<T, User$profileArgs<ExtArgs>>,
    ): Prisma__UserProfileClient<
      $Result.GetResult<
        Prisma.$UserProfilePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    createdOrganizations<T extends User$createdOrganizationsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$createdOrganizationsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$OrganizationPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    eventsCreated<T extends User$eventsCreatedArgs<ExtArgs> = {}>(
      args?: Subset<T, User$eventsCreatedArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$EventPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    jobsCreated<T extends User$jobsCreatedArgs<ExtArgs> = {}>(
      args?: Subset<T, User$jobsCreatedArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$JobPostingPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    experiences<T extends User$experiencesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$experiencesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ExperiencePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    checkIns<T extends User$checkInsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$checkInsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CheckInPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    checkInsAdded<T extends User$checkInsAddedArgs<ExtArgs> = {}>(
      args?: Subset<T, User$checkInsAddedArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CheckInPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    certificates<T extends User$certificatesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$certificatesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CertificatePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", "String">;
    readonly name: FieldRef<"User", "String">;
    readonly email: FieldRef<"User", "String">;
    readonly emailVerified: FieldRef<"User", "Boolean">;
    readonly image: FieldRef<"User", "String">;
    readonly createdAt: FieldRef<"User", "DateTime">;
    readonly updatedAt: FieldRef<"User", "DateTime">;
    readonly mykadNumber: FieldRef<"User", "String">;
    readonly mykadVerifiedAt: FieldRef<"User", "DateTime">;
    readonly profileType: FieldRef<"User", "ProfileType">;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.sessions
   */
  export type User$sessionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
    where?: SessionWhereInput;
    orderBy?:
      | SessionOrderByWithRelationInput
      | SessionOrderByWithRelationInput[];
    cursor?: SessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[];
  };

  /**
   * User.accounts
   */
  export type User$accountsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    where?: AccountWhereInput;
    orderBy?:
      | AccountOrderByWithRelationInput
      | AccountOrderByWithRelationInput[];
    cursor?: AccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[];
  };

  /**
   * User.profile
   */
  export type User$profileArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null;
    where?: UserProfileWhereInput;
  };

  /**
   * User.createdOrganizations
   */
  export type User$createdOrganizationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    where?: OrganizationWhereInput;
    orderBy?:
      | OrganizationOrderByWithRelationInput
      | OrganizationOrderByWithRelationInput[];
    cursor?: OrganizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * User.eventsCreated
   */
  export type User$eventsCreatedArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    where?: EventWhereInput;
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[];
    cursor?: EventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
  };

  /**
   * User.jobsCreated
   */
  export type User$jobsCreatedArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null;
    where?: JobPostingWhereInput;
    orderBy?:
      | JobPostingOrderByWithRelationInput
      | JobPostingOrderByWithRelationInput[];
    cursor?: JobPostingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: JobPostingScalarFieldEnum | JobPostingScalarFieldEnum[];
  };

  /**
   * User.experiences
   */
  export type User$experiencesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null;
    where?: ExperienceWhereInput;
    orderBy?:
      | ExperienceOrderByWithRelationInput
      | ExperienceOrderByWithRelationInput[];
    cursor?: ExperienceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[];
  };

  /**
   * User.checkIns
   */
  export type User$checkInsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null;
    where?: CheckInWhereInput;
    orderBy?:
      | CheckInOrderByWithRelationInput
      | CheckInOrderByWithRelationInput[];
    cursor?: CheckInWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[];
  };

  /**
   * User.checkInsAdded
   */
  export type User$checkInsAddedArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null;
    where?: CheckInWhereInput;
    orderBy?:
      | CheckInOrderByWithRelationInput
      | CheckInOrderByWithRelationInput[];
    cursor?: CheckInWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[];
  };

  /**
   * User.certificates
   */
  export type User$certificatesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null;
    where?: CertificateWhereInput;
    orderBy?:
      | CertificateOrderByWithRelationInput
      | CertificateOrderByWithRelationInput[];
    cursor?: CertificateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null;
    _min: SessionMinAggregateOutputType | null;
    _max: SessionMaxAggregateOutputType | null;
  };

  export type SessionMinAggregateOutputType = {
    id: string | null;
    expiresAt: Date | null;
    token: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    ipAddress: string | null;
    userAgent: string | null;
    userId: string | null;
  };

  export type SessionMaxAggregateOutputType = {
    id: string | null;
    expiresAt: Date | null;
    token: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    ipAddress: string | null;
    userAgent: string | null;
    userId: string | null;
  };

  export type SessionCountAggregateOutputType = {
    id: number;
    expiresAt: number;
    token: number;
    createdAt: number;
    updatedAt: number;
    ipAddress: number;
    userAgent: number;
    userId: number;
    _all: number;
  };

  export type SessionMinAggregateInputType = {
    id?: true;
    expiresAt?: true;
    token?: true;
    createdAt?: true;
    updatedAt?: true;
    ipAddress?: true;
    userAgent?: true;
    userId?: true;
  };

  export type SessionMaxAggregateInputType = {
    id?: true;
    expiresAt?: true;
    token?: true;
    createdAt?: true;
    updatedAt?: true;
    ipAddress?: true;
    userAgent?: true;
    userId?: true;
  };

  export type SessionCountAggregateInputType = {
    id?: true;
    expiresAt?: true;
    token?: true;
    createdAt?: true;
    updatedAt?: true;
    ipAddress?: true;
    userAgent?: true;
    userId?: true;
    _all?: true;
  };

  export type SessionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sessions to fetch.
     */
    orderBy?:
      | SessionOrderByWithRelationInput
      | SessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sessions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Sessions
     **/
    _count?: true | SessionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SessionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SessionMaxAggregateInputType;
  };

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
    [P in keyof T & keyof AggregateSession]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>;
  };

  export type SessionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SessionWhereInput;
    orderBy?:
      | SessionOrderByWithAggregationInput
      | SessionOrderByWithAggregationInput[];
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum;
    having?: SessionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SessionCountAggregateInputType | true;
    _min?: SessionMinAggregateInputType;
    _max?: SessionMaxAggregateInputType;
  };

  export type SessionGroupByOutputType = {
    id: string;
    expiresAt: Date;
    token: string;
    createdAt: Date;
    updatedAt: Date;
    ipAddress: string | null;
    userAgent: string | null;
    userId: string;
    _count: SessionCountAggregateOutputType | null;
    _min: SessionMinAggregateOutputType | null;
    _max: SessionMaxAggregateOutputType | null;
  };

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<SessionGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof SessionGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>;
        }
      >
    >;

  export type SessionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      expiresAt?: boolean;
      token?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      ipAddress?: boolean;
      userAgent?: boolean;
      userId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["session"]
  >;

  export type SessionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      expiresAt?: boolean;
      token?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      ipAddress?: boolean;
      userAgent?: boolean;
      userId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["session"]
  >;

  export type SessionSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      expiresAt?: boolean;
      token?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      ipAddress?: boolean;
      userAgent?: boolean;
      userId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["session"]
  >;

  export type SessionSelectScalar = {
    id?: boolean;
    expiresAt?: boolean;
    token?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    ipAddress?: boolean;
    userAgent?: boolean;
    userId?: boolean;
  };

  export type SessionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "expiresAt"
    | "token"
    | "createdAt"
    | "updatedAt"
    | "ipAddress"
    | "userAgent"
    | "userId",
    ExtArgs["result"]["session"]
  >;
  export type SessionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type SessionIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type SessionIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $SessionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Session";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        expiresAt: Date;
        token: string;
        createdAt: Date;
        updatedAt: Date;
        ipAddress: string | null;
        userAgent: string | null;
        userId: string;
      },
      ExtArgs["result"]["session"]
    >;
    composites: {};
  };

  type SessionGetPayload<
    S extends boolean | null | undefined | SessionDefaultArgs,
  > = $Result.GetResult<Prisma.$SessionPayload, S>;

  type SessionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<SessionFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: SessionCountAggregateInputType | true;
  };

  export interface SessionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Session"];
      meta: { name: "Session" };
    };
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     *
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SessionFindManyArgs>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     *
     */
    create<T extends SessionCreateArgs>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SessionCreateManyArgs>(
      args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(
      args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     *
     */
    delete<T extends SessionDeleteArgs>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SessionUpdateArgs>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SessionDeleteManyArgs>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SessionUpdateManyArgs>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(
      args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>,
    ): Prisma__SessionClient<
      $Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
     **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], SessionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(
      args: Subset<T, SessionAggregateArgs>,
    ): Prisma.PrismaPromise<GetSessionAggregateType<T>>;

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs["orderBy"] }
        : { orderBy?: SessionGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetSessionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Session model
     */
    readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", "String">;
    readonly expiresAt: FieldRef<"Session", "DateTime">;
    readonly token: FieldRef<"Session", "String">;
    readonly createdAt: FieldRef<"Session", "DateTime">;
    readonly updatedAt: FieldRef<"Session", "DateTime">;
    readonly ipAddress: FieldRef<"Session", "String">;
    readonly userAgent: FieldRef<"Session", "String">;
    readonly userId: FieldRef<"Session", "String">;
  }

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput;
  };

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput;
  };

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sessions to fetch.
     */
    orderBy?:
      | SessionOrderByWithRelationInput
      | SessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sessions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[];
  };

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sessions to fetch.
     */
    orderBy?:
      | SessionOrderByWithRelationInput
      | SessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sessions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[];
  };

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sessions to fetch.
     */
    orderBy?:
      | SessionOrderByWithRelationInput
      | SessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sessions.
     */
    skip?: number;
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[];
  };

  /**
   * Session create
   */
  export type SessionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>;
  };

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Session update
   */
  export type SessionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>;
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput;
  };

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>;
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput;
    /**
     * Limit how many Sessions to update.
     */
    limit?: number;
  };

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>;
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput;
    /**
     * Limit how many Sessions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput;
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>;
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>;
  };

  /**
   * Session delete
   */
  export type SessionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput;
  };

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput;
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number;
  };

  /**
   * Session without action
   */
  export type SessionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null;
  };

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null;
    _min: AccountMinAggregateOutputType | null;
    _max: AccountMaxAggregateOutputType | null;
  };

  export type AccountMinAggregateOutputType = {
    id: string | null;
    accountId: string | null;
    providerId: string | null;
    userId: string | null;
    accessToken: string | null;
    refreshToken: string | null;
    idToken: string | null;
    accessTokenExpiresAt: Date | null;
    refreshTokenExpiresAt: Date | null;
    scope: string | null;
    password: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type AccountMaxAggregateOutputType = {
    id: string | null;
    accountId: string | null;
    providerId: string | null;
    userId: string | null;
    accessToken: string | null;
    refreshToken: string | null;
    idToken: string | null;
    accessTokenExpiresAt: Date | null;
    refreshTokenExpiresAt: Date | null;
    scope: string | null;
    password: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type AccountCountAggregateOutputType = {
    id: number;
    accountId: number;
    providerId: number;
    userId: number;
    accessToken: number;
    refreshToken: number;
    idToken: number;
    accessTokenExpiresAt: number;
    refreshTokenExpiresAt: number;
    scope: number;
    password: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type AccountMinAggregateInputType = {
    id?: true;
    accountId?: true;
    providerId?: true;
    userId?: true;
    accessToken?: true;
    refreshToken?: true;
    idToken?: true;
    accessTokenExpiresAt?: true;
    refreshTokenExpiresAt?: true;
    scope?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type AccountMaxAggregateInputType = {
    id?: true;
    accountId?: true;
    providerId?: true;
    userId?: true;
    accessToken?: true;
    refreshToken?: true;
    idToken?: true;
    accessTokenExpiresAt?: true;
    refreshTokenExpiresAt?: true;
    scope?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type AccountCountAggregateInputType = {
    id?: true;
    accountId?: true;
    providerId?: true;
    userId?: true;
    accessToken?: true;
    refreshToken?: true;
    idToken?: true;
    accessTokenExpiresAt?: true;
    refreshTokenExpiresAt?: true;
    scope?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type AccountAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?:
      | AccountOrderByWithRelationInput
      | AccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Accounts
     **/
    _count?: true | AccountCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AccountMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AccountMaxAggregateInputType;
  };

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
    [P in keyof T & keyof AggregateAccount]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>;
  };

  export type AccountGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AccountWhereInput;
    orderBy?:
      | AccountOrderByWithAggregationInput
      | AccountOrderByWithAggregationInput[];
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum;
    having?: AccountScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AccountCountAggregateInputType | true;
    _min?: AccountMinAggregateInputType;
    _max?: AccountMaxAggregateInputType;
  };

  export type AccountGroupByOutputType = {
    id: string;
    accountId: string;
    providerId: string;
    userId: string;
    accessToken: string | null;
    refreshToken: string | null;
    idToken: string | null;
    accessTokenExpiresAt: Date | null;
    refreshTokenExpiresAt: Date | null;
    scope: string | null;
    password: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: AccountCountAggregateOutputType | null;
    _min: AccountMinAggregateOutputType | null;
    _max: AccountMaxAggregateOutputType | null;
  };

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AccountGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof AccountGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>;
        }
      >
    >;

  export type AccountSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      accountId?: boolean;
      providerId?: boolean;
      userId?: boolean;
      accessToken?: boolean;
      refreshToken?: boolean;
      idToken?: boolean;
      accessTokenExpiresAt?: boolean;
      refreshTokenExpiresAt?: boolean;
      scope?: boolean;
      password?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["account"]
  >;

  export type AccountSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      accountId?: boolean;
      providerId?: boolean;
      userId?: boolean;
      accessToken?: boolean;
      refreshToken?: boolean;
      idToken?: boolean;
      accessTokenExpiresAt?: boolean;
      refreshTokenExpiresAt?: boolean;
      scope?: boolean;
      password?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["account"]
  >;

  export type AccountSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      accountId?: boolean;
      providerId?: boolean;
      userId?: boolean;
      accessToken?: boolean;
      refreshToken?: boolean;
      idToken?: boolean;
      accessTokenExpiresAt?: boolean;
      refreshTokenExpiresAt?: boolean;
      scope?: boolean;
      password?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["account"]
  >;

  export type AccountSelectScalar = {
    id?: boolean;
    accountId?: boolean;
    providerId?: boolean;
    userId?: boolean;
    accessToken?: boolean;
    refreshToken?: boolean;
    idToken?: boolean;
    accessTokenExpiresAt?: boolean;
    refreshTokenExpiresAt?: boolean;
    scope?: boolean;
    password?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type AccountOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "accountId"
    | "providerId"
    | "userId"
    | "accessToken"
    | "refreshToken"
    | "idToken"
    | "accessTokenExpiresAt"
    | "refreshTokenExpiresAt"
    | "scope"
    | "password"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["account"]
  >;
  export type AccountInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type AccountIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type AccountIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $AccountPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Account";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        accountId: string;
        providerId: string;
        userId: string;
        accessToken: string | null;
        refreshToken: string | null;
        idToken: string | null;
        accessTokenExpiresAt: Date | null;
        refreshTokenExpiresAt: Date | null;
        scope: string | null;
        password: string | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["account"]
    >;
    composites: {};
  };

  type AccountGetPayload<
    S extends boolean | null | undefined | AccountDefaultArgs,
  > = $Result.GetResult<Prisma.$AccountPayload, S>;

  type AccountCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AccountFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: AccountCountAggregateInputType | true;
  };

  export interface AccountDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Account"];
      meta: { name: "Account" };
    };
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     *
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AccountFindManyArgs>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     *
     */
    create<T extends AccountCreateArgs>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AccountCreateManyArgs>(
      args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     *
     */
    delete<T extends AccountDeleteArgs>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AccountUpdateArgs>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AccountDeleteManyArgs>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AccountUpdateManyArgs>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(
      args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>,
    ): Prisma__AccountClient<
      $Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
     **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], AccountCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(
      args: Subset<T, AccountAggregateArgs>,
    ): Prisma.PrismaPromise<GetAccountAggregateType<T>>;

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs["orderBy"] }
        : { orderBy?: AccountGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetAccountGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Account model
     */
    readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", "String">;
    readonly accountId: FieldRef<"Account", "String">;
    readonly providerId: FieldRef<"Account", "String">;
    readonly userId: FieldRef<"Account", "String">;
    readonly accessToken: FieldRef<"Account", "String">;
    readonly refreshToken: FieldRef<"Account", "String">;
    readonly idToken: FieldRef<"Account", "String">;
    readonly accessTokenExpiresAt: FieldRef<"Account", "DateTime">;
    readonly refreshTokenExpiresAt: FieldRef<"Account", "DateTime">;
    readonly scope: FieldRef<"Account", "String">;
    readonly password: FieldRef<"Account", "String">;
    readonly createdAt: FieldRef<"Account", "DateTime">;
    readonly updatedAt: FieldRef<"Account", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput;
  };

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput;
  };

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?:
      | AccountOrderByWithRelationInput
      | AccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[];
  };

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?:
      | AccountOrderByWithRelationInput
      | AccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[];
  };

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Accounts to fetch.
     */
    orderBy?:
      | AccountOrderByWithRelationInput
      | AccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Accounts.
     */
    skip?: number;
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[];
  };

  /**
   * Account create
   */
  export type AccountCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>;
  };

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Account update
   */
  export type AccountUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>;
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput;
  };

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>;
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput;
    /**
     * Limit how many Accounts to update.
     */
    limit?: number;
  };

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>;
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput;
    /**
     * Limit how many Accounts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput;
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>;
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>;
  };

  /**
   * Account delete
   */
  export type AccountDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput;
  };

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput;
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number;
  };

  /**
   * Account without action
   */
  export type AccountDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null;
  };

  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null;
    _min: VerificationMinAggregateOutputType | null;
    _max: VerificationMaxAggregateOutputType | null;
  };

  export type VerificationMinAggregateOutputType = {
    id: string | null;
    identifier: string | null;
    value: string | null;
    expiresAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type VerificationMaxAggregateOutputType = {
    id: string | null;
    identifier: string | null;
    value: string | null;
    expiresAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type VerificationCountAggregateOutputType = {
    id: number;
    identifier: number;
    value: number;
    expiresAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type VerificationMinAggregateInputType = {
    id?: true;
    identifier?: true;
    value?: true;
    expiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type VerificationMaxAggregateInputType = {
    id?: true;
    identifier?: true;
    value?: true;
    expiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type VerificationCountAggregateInputType = {
    id?: true;
    identifier?: true;
    value?: true;
    expiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type VerificationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Verifications to fetch.
     */
    orderBy?:
      | VerificationOrderByWithRelationInput
      | VerificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Verifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Verifications
     **/
    _count?: true | VerificationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: VerificationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: VerificationMaxAggregateInputType;
  };

  export type GetVerificationAggregateType<
    T extends VerificationAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateVerification]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>;
  };

  export type VerificationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: VerificationWhereInput;
    orderBy?:
      | VerificationOrderByWithAggregationInput
      | VerificationOrderByWithAggregationInput[];
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum;
    having?: VerificationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VerificationCountAggregateInputType | true;
    _min?: VerificationMinAggregateInputType;
    _max?: VerificationMaxAggregateInputType;
  };

  export type VerificationGroupByOutputType = {
    id: string;
    identifier: string;
    value: string;
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
    _count: VerificationCountAggregateOutputType | null;
    _min: VerificationMinAggregateOutputType | null;
    _max: VerificationMaxAggregateOutputType | null;
  };

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<VerificationGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof VerificationGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>;
        }
      >
    >;

  export type VerificationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      identifier?: boolean;
      value?: boolean;
      expiresAt?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["verification"]
  >;

  export type VerificationSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      identifier?: boolean;
      value?: boolean;
      expiresAt?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["verification"]
  >;

  export type VerificationSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      identifier?: boolean;
      value?: boolean;
      expiresAt?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["verification"]
  >;

  export type VerificationSelectScalar = {
    id?: boolean;
    identifier?: boolean;
    value?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type VerificationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt",
    ExtArgs["result"]["verification"]
  >;

  export type $VerificationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Verification";
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        identifier: string;
        value: string;
        expiresAt: Date;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["verification"]
    >;
    composites: {};
  };

  type VerificationGetPayload<
    S extends boolean | null | undefined | VerificationDefaultArgs,
  > = $Result.GetResult<Prisma.$VerificationPayload, S>;

  type VerificationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    VerificationFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: VerificationCountAggregateInputType | true;
  };

  export interface VerificationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Verification"];
      meta: { name: "Verification" };
    };
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(
      args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>,
    ): Prisma__VerificationClient<
      $Result.GetResult<
        Prisma.$VerificationPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__VerificationClient<
      $Result.GetResult<
        Prisma.$VerificationPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(
      args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>,
    ): Prisma__VerificationClient<
      $Result.GetResult<
        Prisma.$VerificationPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__VerificationClient<
      $Result.GetResult<
        Prisma.$VerificationPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     *
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     *
     */
    findMany<T extends VerificationFindManyArgs>(
      args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$VerificationPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     *
     */
    create<T extends VerificationCreateArgs>(
      args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>,
    ): Prisma__VerificationClient<
      $Result.GetResult<
        Prisma.$VerificationPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends VerificationCreateManyArgs>(
      args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(
      args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$VerificationPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     *
     */
    delete<T extends VerificationDeleteArgs>(
      args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>,
    ): Prisma__VerificationClient<
      $Result.GetResult<
        Prisma.$VerificationPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends VerificationUpdateArgs>(
      args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>,
    ): Prisma__VerificationClient<
      $Result.GetResult<
        Prisma.$VerificationPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends VerificationDeleteManyArgs>(
      args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends VerificationUpdateManyArgs>(
      args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
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
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(
      args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$VerificationPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(
      args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>,
    ): Prisma__VerificationClient<
      $Result.GetResult<
        Prisma.$VerificationPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
     **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], VerificationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(
      args: Subset<T, VerificationAggregateArgs>,
    ): Prisma.PrismaPromise<GetVerificationAggregateType<T>>;

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs["orderBy"] }
        : { orderBy?: VerificationGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetVerificationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Verification model
     */
    readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", "String">;
    readonly identifier: FieldRef<"Verification", "String">;
    readonly value: FieldRef<"Verification", "String">;
    readonly expiresAt: FieldRef<"Verification", "DateTime">;
    readonly createdAt: FieldRef<"Verification", "DateTime">;
    readonly updatedAt: FieldRef<"Verification", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null;
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput;
  };

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null;
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput;
  };

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null;
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Verifications to fetch.
     */
    orderBy?:
      | VerificationOrderByWithRelationInput
      | VerificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Verifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[];
  };

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null;
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Verifications to fetch.
     */
    orderBy?:
      | VerificationOrderByWithRelationInput
      | VerificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Verifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[];
  };

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null;
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Verifications to fetch.
     */
    orderBy?:
      | VerificationOrderByWithRelationInput
      | VerificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Verifications.
     */
    skip?: number;
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[];
  };

  /**
   * Verification create
   */
  export type VerificationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null;
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>;
  };

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null;
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null;
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>;
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput;
  };

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<
      VerificationUpdateManyMutationInput,
      VerificationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput;
    /**
     * Limit how many Verifications to update.
     */
    limit?: number;
  };

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null;
    /**
     * The data used to update Verifications.
     */
    data: XOR<
      VerificationUpdateManyMutationInput,
      VerificationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput;
    /**
     * Limit how many Verifications to update.
     */
    limit?: number;
  };

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null;
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput;
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>;
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>;
  };

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null;
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput;
  };

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput;
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number;
  };

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null;
  };

  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null;
    _min: UserProfileMinAggregateOutputType | null;
    _max: UserProfileMaxAggregateOutputType | null;
  };

  export type UserProfileMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    fullName: string | null;
    headline: string | null;
    bio: string | null;
    consentTalentPool: boolean | null;
    visibility: $Enums.TalentVisibility | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserProfileMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    fullName: string | null;
    headline: string | null;
    bio: string | null;
    consentTalentPool: boolean | null;
    visibility: $Enums.TalentVisibility | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserProfileCountAggregateOutputType = {
    id: number;
    userId: number;
    fullName: number;
    headline: number;
    bio: number;
    skills: number;
    consentTalentPool: number;
    visibility: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserProfileMinAggregateInputType = {
    id?: true;
    userId?: true;
    fullName?: true;
    headline?: true;
    bio?: true;
    consentTalentPool?: true;
    visibility?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserProfileMaxAggregateInputType = {
    id?: true;
    userId?: true;
    fullName?: true;
    headline?: true;
    bio?: true;
    consentTalentPool?: true;
    visibility?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserProfileCountAggregateInputType = {
    id?: true;
    userId?: true;
    fullName?: true;
    headline?: true;
    bio?: true;
    skills?: true;
    consentTalentPool?: true;
    visibility?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserProfileAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?:
      | UserProfileOrderByWithRelationInput
      | UserProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned UserProfiles
     **/
    _count?: true | UserProfileCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserProfileMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserProfileMaxAggregateInputType;
  };

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> =
    {
      [P in keyof T & keyof AggregateUserProfile]: P extends "_count" | "count"
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateUserProfile[P]>
        : GetScalarType<T[P], AggregateUserProfile[P]>;
    };

  export type UserProfileGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserProfileWhereInput;
    orderBy?:
      | UserProfileOrderByWithAggregationInput
      | UserProfileOrderByWithAggregationInput[];
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum;
    having?: UserProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserProfileCountAggregateInputType | true;
    _min?: UserProfileMinAggregateInputType;
    _max?: UserProfileMaxAggregateInputType;
  };

  export type UserProfileGroupByOutputType = {
    id: string;
    userId: string;
    fullName: string | null;
    headline: string | null;
    bio: string | null;
    skills: string[];
    consentTalentPool: boolean;
    visibility: $Enums.TalentVisibility;
    createdAt: Date;
    updatedAt: Date;
    _count: UserProfileCountAggregateOutputType | null;
    _min: UserProfileMinAggregateOutputType | null;
    _max: UserProfileMaxAggregateOutputType | null;
  };

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<UserProfileGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof UserProfileGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>;
        }
      >
    >;

  export type UserProfileSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      fullName?: boolean;
      headline?: boolean;
      bio?: boolean;
      skills?: boolean;
      consentTalentPool?: boolean;
      visibility?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["userProfile"]
  >;

  export type UserProfileSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      fullName?: boolean;
      headline?: boolean;
      bio?: boolean;
      skills?: boolean;
      consentTalentPool?: boolean;
      visibility?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["userProfile"]
  >;

  export type UserProfileSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      fullName?: boolean;
      headline?: boolean;
      bio?: boolean;
      skills?: boolean;
      consentTalentPool?: boolean;
      visibility?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["userProfile"]
  >;

  export type UserProfileSelectScalar = {
    id?: boolean;
    userId?: boolean;
    fullName?: boolean;
    headline?: boolean;
    bio?: boolean;
    skills?: boolean;
    consentTalentPool?: boolean;
    visibility?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserProfileOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "userId"
    | "fullName"
    | "headline"
    | "bio"
    | "skills"
    | "consentTalentPool"
    | "visibility"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["userProfile"]
  >;
  export type UserProfileInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type UserProfileIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type UserProfileIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $UserProfilePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "UserProfile";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        fullName: string | null;
        headline: string | null;
        bio: string | null;
        skills: string[];
        consentTalentPool: boolean;
        visibility: $Enums.TalentVisibility;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["userProfile"]
    >;
    composites: {};
  };

  type UserProfileGetPayload<
    S extends boolean | null | undefined | UserProfileDefaultArgs,
  > = $Result.GetResult<Prisma.$UserProfilePayload, S>;

  type UserProfileCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    UserProfileFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: UserProfileCountAggregateInputType | true;
  };

  export interface UserProfileDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["UserProfile"];
      meta: { name: "UserProfile" };
    };
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(
      args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserProfileClient<
      $Result.GetResult<
        Prisma.$UserProfilePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserProfileClient<
      $Result.GetResult<
        Prisma.$UserProfilePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(
      args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>,
    ): Prisma__UserProfileClient<
      $Result.GetResult<
        Prisma.$UserProfilePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserProfileClient<
      $Result.GetResult<
        Prisma.$UserProfilePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     *
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserProfileFindManyArgs>(
      args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserProfilePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     *
     */
    create<T extends UserProfileCreateArgs>(
      args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>,
    ): Prisma__UserProfileClient<
      $Result.GetResult<
        Prisma.$UserProfilePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserProfileCreateManyArgs>(
      args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserProfilePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     *
     */
    delete<T extends UserProfileDeleteArgs>(
      args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>,
    ): Prisma__UserProfileClient<
      $Result.GetResult<
        Prisma.$UserProfilePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserProfileUpdateArgs>(
      args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>,
    ): Prisma__UserProfileClient<
      $Result.GetResult<
        Prisma.$UserProfilePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(
      args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserProfileUpdateManyArgs>(
      args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserProfilePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(
      args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>,
    ): Prisma__UserProfileClient<
      $Result.GetResult<
        Prisma.$UserProfilePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
     **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserProfileCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileAggregateArgs>(
      args: Subset<T, UserProfileAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>;

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
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
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs["orderBy"] }
        : { orderBy?: UserProfileGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetUserProfileGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the UserProfile model
     */
    readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", "String">;
    readonly userId: FieldRef<"UserProfile", "String">;
    readonly fullName: FieldRef<"UserProfile", "String">;
    readonly headline: FieldRef<"UserProfile", "String">;
    readonly bio: FieldRef<"UserProfile", "String">;
    readonly skills: FieldRef<"UserProfile", "String[]">;
    readonly consentTalentPool: FieldRef<"UserProfile", "Boolean">;
    readonly visibility: FieldRef<"UserProfile", "TalentVisibility">;
    readonly createdAt: FieldRef<"UserProfile", "DateTime">;
    readonly updatedAt: FieldRef<"UserProfile", "DateTime">;
  }

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null;
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput;
  };

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null;
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput;
  };

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null;
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?:
      | UserProfileOrderByWithRelationInput
      | UserProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[];
  };

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null;
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?:
      | UserProfileOrderByWithRelationInput
      | UserProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[];
  };

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null;
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?:
      | UserProfileOrderByWithRelationInput
      | UserProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserProfiles.
     */
    skip?: number;
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[];
  };

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null;
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>;
  };

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null;
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null;
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>;
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput;
  };

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<
      UserProfileUpdateManyMutationInput,
      UserProfileUncheckedUpdateManyInput
    >;
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput;
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number;
  };

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null;
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<
      UserProfileUpdateManyMutationInput,
      UserProfileUncheckedUpdateManyInput
    >;
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput;
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null;
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput;
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>;
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>;
  };

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null;
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput;
  };

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput;
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number;
  };

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null;
  };

  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  export type OrganizationMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    type: $Enums.OrganizationType | null;
    ssmNumber: string | null;
    industry: string | null;
    createdById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type OrganizationMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    type: $Enums.OrganizationType | null;
    ssmNumber: string | null;
    industry: string | null;
    createdById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type OrganizationCountAggregateOutputType = {
    id: number;
    name: number;
    type: number;
    ssmNumber: number;
    industry: number;
    createdById: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type OrganizationMinAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    ssmNumber?: true;
    industry?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type OrganizationMaxAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    ssmNumber?: true;
    industry?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type OrganizationCountAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    ssmNumber?: true;
    industry?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type OrganizationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Organizations to fetch.
     */
    orderBy?:
      | OrganizationOrderByWithRelationInput
      | OrganizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Organizations
     **/
    _count?: true | OrganizationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrganizationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrganizationMaxAggregateInputType;
  };

  export type GetOrganizationAggregateType<
    T extends OrganizationAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateOrganization]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>;
  };

  export type OrganizationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrganizationWhereInput;
    orderBy?:
      | OrganizationOrderByWithAggregationInput
      | OrganizationOrderByWithAggregationInput[];
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum;
    having?: OrganizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationCountAggregateInputType | true;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
  };

  export type OrganizationGroupByOutputType = {
    id: string;
    name: string;
    type: $Enums.OrganizationType;
    ssmNumber: string | null;
    industry: string | null;
    createdById: string;
    createdAt: Date;
    updatedAt: Date;
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<OrganizationGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof OrganizationGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
        }
      >
    >;

  export type OrganizationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      type?: boolean;
      ssmNumber?: boolean;
      industry?: boolean;
      createdById?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      createdBy?: boolean | UserDefaultArgs<ExtArgs>;
      events?: boolean | Organization$eventsArgs<ExtArgs>;
      jobs?: boolean | Organization$jobsArgs<ExtArgs>;
      experiences?: boolean | Organization$experiencesArgs<ExtArgs>;
      checkIns?: boolean | Organization$checkInsArgs<ExtArgs>;
      certificates?: boolean | Organization$certificatesArgs<ExtArgs>;
      _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["organization"]
  >;

  export type OrganizationSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      type?: boolean;
      ssmNumber?: boolean;
      industry?: boolean;
      createdById?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      createdBy?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["organization"]
  >;

  export type OrganizationSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      type?: boolean;
      ssmNumber?: boolean;
      industry?: boolean;
      createdById?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      createdBy?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["organization"]
  >;

  export type OrganizationSelectScalar = {
    id?: boolean;
    name?: boolean;
    type?: boolean;
    ssmNumber?: boolean;
    industry?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type OrganizationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "name"
    | "type"
    | "ssmNumber"
    | "industry"
    | "createdById"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["organization"]
  >;
  export type OrganizationInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>;
    events?: boolean | Organization$eventsArgs<ExtArgs>;
    jobs?: boolean | Organization$jobsArgs<ExtArgs>;
    experiences?: boolean | Organization$experiencesArgs<ExtArgs>;
    checkIns?: boolean | Organization$checkInsArgs<ExtArgs>;
    certificates?: boolean | Organization$certificatesArgs<ExtArgs>;
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type OrganizationIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type OrganizationIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $OrganizationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Organization";
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>;
      events: Prisma.$EventPayload<ExtArgs>[];
      jobs: Prisma.$JobPostingPayload<ExtArgs>[];
      experiences: Prisma.$ExperiencePayload<ExtArgs>[];
      checkIns: Prisma.$CheckInPayload<ExtArgs>[];
      certificates: Prisma.$CertificatePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        type: $Enums.OrganizationType;
        ssmNumber: string | null;
        industry: string | null;
        createdById: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["organization"]
    >;
    composites: {};
  };

  type OrganizationGetPayload<
    S extends boolean | null | undefined | OrganizationDefaultArgs,
  > = $Result.GetResult<Prisma.$OrganizationPayload, S>;

  type OrganizationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    OrganizationFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: OrganizationCountAggregateInputType | true;
  };

  export interface OrganizationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Organization"];
      meta: { name: "Organization" };
    };
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(
      args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(
      args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     *
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     *
     */
    findMany<T extends OrganizationFindManyArgs>(
      args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     *
     */
    create<T extends OrganizationCreateArgs>(
      args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OrganizationCreateManyArgs>(
      args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(
      args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     *
     */
    delete<T extends OrganizationDeleteArgs>(
      args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OrganizationUpdateArgs>(
      args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(
      args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OrganizationUpdateManyArgs>(
      args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(
      args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(
      args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
     **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], OrganizationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationAggregateArgs>(
      args: Subset<T, OrganizationAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
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
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs["orderBy"] }
        : { orderBy?: OrganizationGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetOrganizationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Organization model
     */
    readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    events<T extends Organization$eventsArgs<ExtArgs> = {}>(
      args?: Subset<T, Organization$eventsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$EventPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    jobs<T extends Organization$jobsArgs<ExtArgs> = {}>(
      args?: Subset<T, Organization$jobsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$JobPostingPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    experiences<T extends Organization$experiencesArgs<ExtArgs> = {}>(
      args?: Subset<T, Organization$experiencesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ExperiencePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    checkIns<T extends Organization$checkInsArgs<ExtArgs> = {}>(
      args?: Subset<T, Organization$checkInsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CheckInPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    certificates<T extends Organization$certificatesArgs<ExtArgs> = {}>(
      args?: Subset<T, Organization$certificatesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CertificatePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", "String">;
    readonly name: FieldRef<"Organization", "String">;
    readonly type: FieldRef<"Organization", "OrganizationType">;
    readonly ssmNumber: FieldRef<"Organization", "String">;
    readonly industry: FieldRef<"Organization", "String">;
    readonly createdById: FieldRef<"Organization", "String">;
    readonly createdAt: FieldRef<"Organization", "DateTime">;
    readonly updatedAt: FieldRef<"Organization", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput;
  };

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput;
  };

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Organizations to fetch.
     */
    orderBy?:
      | OrganizationOrderByWithRelationInput
      | OrganizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Organizations to fetch.
     */
    orderBy?:
      | OrganizationOrderByWithRelationInput
      | OrganizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Organizations to fetch.
     */
    orderBy?:
      | OrganizationOrderByWithRelationInput
      | OrganizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Organizations.
     */
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>;
  };

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>;
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput;
  };

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<
      OrganizationUpdateManyMutationInput,
      OrganizationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput;
    /**
     * Limit how many Organizations to update.
     */
    limit?: number;
  };

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * The data used to update Organizations.
     */
    data: XOR<
      OrganizationUpdateManyMutationInput,
      OrganizationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput;
    /**
     * Limit how many Organizations to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput;
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>;
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>;
  };

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput;
  };

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput;
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number;
  };

  /**
   * Organization.events
   */
  export type Organization$eventsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    where?: EventWhereInput;
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[];
    cursor?: EventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
  };

  /**
   * Organization.jobs
   */
  export type Organization$jobsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null;
    where?: JobPostingWhereInput;
    orderBy?:
      | JobPostingOrderByWithRelationInput
      | JobPostingOrderByWithRelationInput[];
    cursor?: JobPostingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: JobPostingScalarFieldEnum | JobPostingScalarFieldEnum[];
  };

  /**
   * Organization.experiences
   */
  export type Organization$experiencesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null;
    where?: ExperienceWhereInput;
    orderBy?:
      | ExperienceOrderByWithRelationInput
      | ExperienceOrderByWithRelationInput[];
    cursor?: ExperienceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[];
  };

  /**
   * Organization.checkIns
   */
  export type Organization$checkInsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null;
    where?: CheckInWhereInput;
    orderBy?:
      | CheckInOrderByWithRelationInput
      | CheckInOrderByWithRelationInput[];
    cursor?: CheckInWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[];
  };

  /**
   * Organization.certificates
   */
  export type Organization$certificatesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null;
    where?: CertificateWhereInput;
    orderBy?:
      | CertificateOrderByWithRelationInput
      | CertificateOrderByWithRelationInput[];
    cursor?: CertificateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[];
  };

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
  };

  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null;
    _min: EventMinAggregateOutputType | null;
    _max: EventMaxAggregateOutputType | null;
  };

  export type EventMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    title: string | null;
    description: string | null;
    location: string | null;
    startsAt: Date | null;
    endsAt: Date | null;
    createdById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type EventMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    title: string | null;
    description: string | null;
    location: string | null;
    startsAt: Date | null;
    endsAt: Date | null;
    createdById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type EventCountAggregateOutputType = {
    id: number;
    organizationId: number;
    title: number;
    description: number;
    location: number;
    skills: number;
    startsAt: number;
    endsAt: number;
    createdById: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type EventMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    title?: true;
    description?: true;
    location?: true;
    startsAt?: true;
    endsAt?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type EventMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    title?: true;
    description?: true;
    location?: true;
    startsAt?: true;
    endsAt?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type EventCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    title?: true;
    description?: true;
    location?: true;
    skills?: true;
    startsAt?: true;
    endsAt?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type EventAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Events
     **/
    _count?: true | EventCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EventMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EventMaxAggregateInputType;
  };

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
    [P in keyof T & keyof AggregateEvent]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>;
  };

  export type EventGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EventWhereInput;
    orderBy?:
      | EventOrderByWithAggregationInput
      | EventOrderByWithAggregationInput[];
    by: EventScalarFieldEnum[] | EventScalarFieldEnum;
    having?: EventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventCountAggregateInputType | true;
    _min?: EventMinAggregateInputType;
    _max?: EventMaxAggregateInputType;
  };

  export type EventGroupByOutputType = {
    id: string;
    organizationId: string;
    title: string;
    description: string | null;
    location: string | null;
    skills: string[];
    startsAt: Date;
    endsAt: Date | null;
    createdById: string;
    createdAt: Date;
    updatedAt: Date;
    _count: EventCountAggregateOutputType | null;
    _min: EventMinAggregateOutputType | null;
    _max: EventMaxAggregateOutputType | null;
  };

  type GetEventGroupByPayload<T extends EventGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<EventGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof EventGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>;
        }
      >
    >;

  export type EventSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      organizationId?: boolean;
      title?: boolean;
      description?: boolean;
      location?: boolean;
      skills?: boolean;
      startsAt?: boolean;
      endsAt?: boolean;
      createdById?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
      createdBy?: boolean | UserDefaultArgs<ExtArgs>;
      checkIns?: boolean | Event$checkInsArgs<ExtArgs>;
      experiences?: boolean | Event$experiencesArgs<ExtArgs>;
      certificates?: boolean | Event$certificatesArgs<ExtArgs>;
      _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["event"]
  >;

  export type EventSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      organizationId?: boolean;
      title?: boolean;
      description?: boolean;
      location?: boolean;
      skills?: boolean;
      startsAt?: boolean;
      endsAt?: boolean;
      createdById?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
      createdBy?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["event"]
  >;

  export type EventSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      organizationId?: boolean;
      title?: boolean;
      description?: boolean;
      location?: boolean;
      skills?: boolean;
      startsAt?: boolean;
      endsAt?: boolean;
      createdById?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
      createdBy?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["event"]
  >;

  export type EventSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    title?: boolean;
    description?: boolean;
    location?: boolean;
    skills?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type EventOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "organizationId"
    | "title"
    | "description"
    | "location"
    | "skills"
    | "startsAt"
    | "endsAt"
    | "createdById"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["event"]
  >;
  export type EventInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    createdBy?: boolean | UserDefaultArgs<ExtArgs>;
    checkIns?: boolean | Event$checkInsArgs<ExtArgs>;
    experiences?: boolean | Event$experiencesArgs<ExtArgs>;
    certificates?: boolean | Event$certificatesArgs<ExtArgs>;
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type EventIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    createdBy?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type EventIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    createdBy?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $EventPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Event";
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>;
      createdBy: Prisma.$UserPayload<ExtArgs>;
      checkIns: Prisma.$CheckInPayload<ExtArgs>[];
      experiences: Prisma.$ExperiencePayload<ExtArgs>[];
      certificates: Prisma.$CertificatePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        organizationId: string;
        title: string;
        description: string | null;
        location: string | null;
        skills: string[];
        startsAt: Date;
        endsAt: Date | null;
        createdById: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["event"]
    >;
    composites: {};
  };

  type EventGetPayload<
    S extends boolean | null | undefined | EventDefaultArgs,
  > = $Result.GetResult<Prisma.$EventPayload, S>;

  type EventCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<EventFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: EventCountAggregateInputType | true;
  };

  export interface EventDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Event"];
      meta: { name: "Event" };
    };
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(
      args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>,
    ): Prisma__EventClient<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(
      args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__EventClient<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(
      args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>,
    ): Prisma__EventClient<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(
      args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__EventClient<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     *
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EventFindManyArgs>(
      args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     *
     */
    create<T extends EventCreateArgs>(
      args: SelectSubset<T, EventCreateArgs<ExtArgs>>,
    ): Prisma__EventClient<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EventCreateManyArgs>(
      args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(
      args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     *
     */
    delete<T extends EventDeleteArgs>(
      args: SelectSubset<T, EventDeleteArgs<ExtArgs>>,
    ): Prisma__EventClient<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EventUpdateArgs>(
      args: SelectSubset<T, EventUpdateArgs<ExtArgs>>,
    ): Prisma__EventClient<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EventDeleteManyArgs>(
      args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EventUpdateManyArgs>(
      args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(
      args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(
      args: SelectSubset<T, EventUpsertArgs<ExtArgs>>,
    ): Prisma__EventClient<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
     **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], EventCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(
      args: Subset<T, EventAggregateArgs>,
    ): Prisma.PrismaPromise<GetEventAggregateType<T>>;

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs["orderBy"] }
        : { orderBy?: EventGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetEventGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Event model
     */
    readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      | $Result.GetResult<
          Prisma.$OrganizationPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    checkIns<T extends Event$checkInsArgs<ExtArgs> = {}>(
      args?: Subset<T, Event$checkInsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CheckInPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    experiences<T extends Event$experiencesArgs<ExtArgs> = {}>(
      args?: Subset<T, Event$experiencesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ExperiencePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    certificates<T extends Event$certificatesArgs<ExtArgs> = {}>(
      args?: Subset<T, Event$certificatesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CertificatePayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", "String">;
    readonly organizationId: FieldRef<"Event", "String">;
    readonly title: FieldRef<"Event", "String">;
    readonly description: FieldRef<"Event", "String">;
    readonly location: FieldRef<"Event", "String">;
    readonly skills: FieldRef<"Event", "String[]">;
    readonly startsAt: FieldRef<"Event", "DateTime">;
    readonly endsAt: FieldRef<"Event", "DateTime">;
    readonly createdById: FieldRef<"Event", "String">;
    readonly createdAt: FieldRef<"Event", "DateTime">;
    readonly updatedAt: FieldRef<"Event", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput;
  };

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput;
  };

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
  };

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
  };

  /**
   * Event findMany
   */
  export type EventFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Events.
     */
    skip?: number;
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[];
  };

  /**
   * Event create
   */
  export type EventCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>;
  };

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Event update
   */
  export type EventUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>;
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput;
  };

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>;
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput;
    /**
     * Limit how many Events to update.
     */
    limit?: number;
  };

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>;
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput;
    /**
     * Limit how many Events to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Event upsert
   */
  export type EventUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput;
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>;
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>;
  };

  /**
   * Event delete
   */
  export type EventDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput;
  };

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput;
    /**
     * Limit how many Events to delete.
     */
    limit?: number;
  };

  /**
   * Event.checkIns
   */
  export type Event$checkInsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null;
    where?: CheckInWhereInput;
    orderBy?:
      | CheckInOrderByWithRelationInput
      | CheckInOrderByWithRelationInput[];
    cursor?: CheckInWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[];
  };

  /**
   * Event.experiences
   */
  export type Event$experiencesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null;
    where?: ExperienceWhereInput;
    orderBy?:
      | ExperienceOrderByWithRelationInput
      | ExperienceOrderByWithRelationInput[];
    cursor?: ExperienceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[];
  };

  /**
   * Event.certificates
   */
  export type Event$certificatesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null;
    where?: CertificateWhereInput;
    orderBy?:
      | CertificateOrderByWithRelationInput
      | CertificateOrderByWithRelationInput[];
    cursor?: CertificateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[];
  };

  /**
   * Event without action
   */
  export type EventDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
  };

  /**
   * Model JobPosting
   */

  export type AggregateJobPosting = {
    _count: JobPostingCountAggregateOutputType | null;
    _min: JobPostingMinAggregateOutputType | null;
    _max: JobPostingMaxAggregateOutputType | null;
  };

  export type JobPostingMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    title: string | null;
    description: string | null;
    status: $Enums.JobStatus | null;
    createdById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type JobPostingMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    title: string | null;
    description: string | null;
    status: $Enums.JobStatus | null;
    createdById: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type JobPostingCountAggregateOutputType = {
    id: number;
    organizationId: number;
    title: number;
    description: number;
    skills: number;
    status: number;
    createdById: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type JobPostingMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    title?: true;
    description?: true;
    status?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type JobPostingMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    title?: true;
    description?: true;
    status?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type JobPostingCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    title?: true;
    description?: true;
    skills?: true;
    status?: true;
    createdById?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type JobPostingAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which JobPosting to aggregate.
     */
    where?: JobPostingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobPostings to fetch.
     */
    orderBy?:
      | JobPostingOrderByWithRelationInput
      | JobPostingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: JobPostingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobPostings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobPostings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned JobPostings
     **/
    _count?: true | JobPostingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: JobPostingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: JobPostingMaxAggregateInputType;
  };

  export type GetJobPostingAggregateType<T extends JobPostingAggregateArgs> = {
    [P in keyof T & keyof AggregateJobPosting]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobPosting[P]>
      : GetScalarType<T[P], AggregateJobPosting[P]>;
  };

  export type JobPostingGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: JobPostingWhereInput;
    orderBy?:
      | JobPostingOrderByWithAggregationInput
      | JobPostingOrderByWithAggregationInput[];
    by: JobPostingScalarFieldEnum[] | JobPostingScalarFieldEnum;
    having?: JobPostingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JobPostingCountAggregateInputType | true;
    _min?: JobPostingMinAggregateInputType;
    _max?: JobPostingMaxAggregateInputType;
  };

  export type JobPostingGroupByOutputType = {
    id: string;
    organizationId: string;
    title: string;
    description: string | null;
    skills: string[];
    status: $Enums.JobStatus;
    createdById: string;
    createdAt: Date;
    updatedAt: Date;
    _count: JobPostingCountAggregateOutputType | null;
    _min: JobPostingMinAggregateOutputType | null;
    _max: JobPostingMaxAggregateOutputType | null;
  };

  type GetJobPostingGroupByPayload<T extends JobPostingGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<JobPostingGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof JobPostingGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobPostingGroupByOutputType[P]>
            : GetScalarType<T[P], JobPostingGroupByOutputType[P]>;
        }
      >
    >;

  export type JobPostingSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      organizationId?: boolean;
      title?: boolean;
      description?: boolean;
      skills?: boolean;
      status?: boolean;
      createdById?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
      createdBy?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["jobPosting"]
  >;

  export type JobPostingSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      organizationId?: boolean;
      title?: boolean;
      description?: boolean;
      skills?: boolean;
      status?: boolean;
      createdById?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
      createdBy?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["jobPosting"]
  >;

  export type JobPostingSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      organizationId?: boolean;
      title?: boolean;
      description?: boolean;
      skills?: boolean;
      status?: boolean;
      createdById?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
      createdBy?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["jobPosting"]
  >;

  export type JobPostingSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    title?: boolean;
    description?: boolean;
    skills?: boolean;
    status?: boolean;
    createdById?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type JobPostingOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "organizationId"
    | "title"
    | "description"
    | "skills"
    | "status"
    | "createdById"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["jobPosting"]
  >;
  export type JobPostingInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    createdBy?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type JobPostingIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    createdBy?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type JobPostingIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    createdBy?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $JobPostingPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "JobPosting";
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>;
      createdBy: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        organizationId: string;
        title: string;
        description: string | null;
        skills: string[];
        status: $Enums.JobStatus;
        createdById: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["jobPosting"]
    >;
    composites: {};
  };

  type JobPostingGetPayload<
    S extends boolean | null | undefined | JobPostingDefaultArgs,
  > = $Result.GetResult<Prisma.$JobPostingPayload, S>;

  type JobPostingCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    JobPostingFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: JobPostingCountAggregateInputType | true;
  };

  export interface JobPostingDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["JobPosting"];
      meta: { name: "JobPosting" };
    };
    /**
     * Find zero or one JobPosting that matches the filter.
     * @param {JobPostingFindUniqueArgs} args - Arguments to find a JobPosting
     * @example
     * // Get one JobPosting
     * const jobPosting = await prisma.jobPosting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobPostingFindUniqueArgs>(
      args: SelectSubset<T, JobPostingFindUniqueArgs<ExtArgs>>,
    ): Prisma__JobPostingClient<
      $Result.GetResult<
        Prisma.$JobPostingPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one JobPosting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobPostingFindUniqueOrThrowArgs} args - Arguments to find a JobPosting
     * @example
     * // Get one JobPosting
     * const jobPosting = await prisma.jobPosting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobPostingFindUniqueOrThrowArgs>(
      args: SelectSubset<T, JobPostingFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__JobPostingClient<
      $Result.GetResult<
        Prisma.$JobPostingPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first JobPosting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingFindFirstArgs} args - Arguments to find a JobPosting
     * @example
     * // Get one JobPosting
     * const jobPosting = await prisma.jobPosting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobPostingFindFirstArgs>(
      args?: SelectSubset<T, JobPostingFindFirstArgs<ExtArgs>>,
    ): Prisma__JobPostingClient<
      $Result.GetResult<
        Prisma.$JobPostingPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first JobPosting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingFindFirstOrThrowArgs} args - Arguments to find a JobPosting
     * @example
     * // Get one JobPosting
     * const jobPosting = await prisma.jobPosting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobPostingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, JobPostingFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__JobPostingClient<
      $Result.GetResult<
        Prisma.$JobPostingPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more JobPostings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobPostings
     * const jobPostings = await prisma.jobPosting.findMany()
     *
     * // Get first 10 JobPostings
     * const jobPostings = await prisma.jobPosting.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const jobPostingWithIdOnly = await prisma.jobPosting.findMany({ select: { id: true } })
     *
     */
    findMany<T extends JobPostingFindManyArgs>(
      args?: SelectSubset<T, JobPostingFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$JobPostingPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a JobPosting.
     * @param {JobPostingCreateArgs} args - Arguments to create a JobPosting.
     * @example
     * // Create one JobPosting
     * const JobPosting = await prisma.jobPosting.create({
     *   data: {
     *     // ... data to create a JobPosting
     *   }
     * })
     *
     */
    create<T extends JobPostingCreateArgs>(
      args: SelectSubset<T, JobPostingCreateArgs<ExtArgs>>,
    ): Prisma__JobPostingClient<
      $Result.GetResult<
        Prisma.$JobPostingPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many JobPostings.
     * @param {JobPostingCreateManyArgs} args - Arguments to create many JobPostings.
     * @example
     * // Create many JobPostings
     * const jobPosting = await prisma.jobPosting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends JobPostingCreateManyArgs>(
      args?: SelectSubset<T, JobPostingCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many JobPostings and returns the data saved in the database.
     * @param {JobPostingCreateManyAndReturnArgs} args - Arguments to create many JobPostings.
     * @example
     * // Create many JobPostings
     * const jobPosting = await prisma.jobPosting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many JobPostings and only return the `id`
     * const jobPostingWithIdOnly = await prisma.jobPosting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends JobPostingCreateManyAndReturnArgs>(
      args?: SelectSubset<T, JobPostingCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$JobPostingPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a JobPosting.
     * @param {JobPostingDeleteArgs} args - Arguments to delete one JobPosting.
     * @example
     * // Delete one JobPosting
     * const JobPosting = await prisma.jobPosting.delete({
     *   where: {
     *     // ... filter to delete one JobPosting
     *   }
     * })
     *
     */
    delete<T extends JobPostingDeleteArgs>(
      args: SelectSubset<T, JobPostingDeleteArgs<ExtArgs>>,
    ): Prisma__JobPostingClient<
      $Result.GetResult<
        Prisma.$JobPostingPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one JobPosting.
     * @param {JobPostingUpdateArgs} args - Arguments to update one JobPosting.
     * @example
     * // Update one JobPosting
     * const jobPosting = await prisma.jobPosting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends JobPostingUpdateArgs>(
      args: SelectSubset<T, JobPostingUpdateArgs<ExtArgs>>,
    ): Prisma__JobPostingClient<
      $Result.GetResult<
        Prisma.$JobPostingPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more JobPostings.
     * @param {JobPostingDeleteManyArgs} args - Arguments to filter JobPostings to delete.
     * @example
     * // Delete a few JobPostings
     * const { count } = await prisma.jobPosting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends JobPostingDeleteManyArgs>(
      args?: SelectSubset<T, JobPostingDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more JobPostings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobPostings
     * const jobPosting = await prisma.jobPosting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends JobPostingUpdateManyArgs>(
      args: SelectSubset<T, JobPostingUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more JobPostings and returns the data updated in the database.
     * @param {JobPostingUpdateManyAndReturnArgs} args - Arguments to update many JobPostings.
     * @example
     * // Update many JobPostings
     * const jobPosting = await prisma.jobPosting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more JobPostings and only return the `id`
     * const jobPostingWithIdOnly = await prisma.jobPosting.updateManyAndReturn({
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
    updateManyAndReturn<T extends JobPostingUpdateManyAndReturnArgs>(
      args: SelectSubset<T, JobPostingUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$JobPostingPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one JobPosting.
     * @param {JobPostingUpsertArgs} args - Arguments to update or create a JobPosting.
     * @example
     * // Update or create a JobPosting
     * const jobPosting = await prisma.jobPosting.upsert({
     *   create: {
     *     // ... data to create a JobPosting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobPosting we want to update
     *   }
     * })
     */
    upsert<T extends JobPostingUpsertArgs>(
      args: SelectSubset<T, JobPostingUpsertArgs<ExtArgs>>,
    ): Prisma__JobPostingClient<
      $Result.GetResult<
        Prisma.$JobPostingPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of JobPostings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingCountArgs} args - Arguments to filter JobPostings to count.
     * @example
     * // Count the number of JobPostings
     * const count = await prisma.jobPosting.count({
     *   where: {
     *     // ... the filter for the JobPostings we want to count
     *   }
     * })
     **/
    count<T extends JobPostingCountArgs>(
      args?: Subset<T, JobPostingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], JobPostingCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a JobPosting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobPostingAggregateArgs>(
      args: Subset<T, JobPostingAggregateArgs>,
    ): Prisma.PrismaPromise<GetJobPostingAggregateType<T>>;

    /**
     * Group by JobPosting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingGroupByArgs} args - Group by arguments.
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
      T extends JobPostingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobPostingGroupByArgs["orderBy"] }
        : { orderBy?: JobPostingGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, JobPostingGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetJobPostingGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the JobPosting model
     */
    readonly fields: JobPostingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobPosting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobPostingClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      | $Result.GetResult<
          Prisma.$OrganizationPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the JobPosting model
   */
  interface JobPostingFieldRefs {
    readonly id: FieldRef<"JobPosting", "String">;
    readonly organizationId: FieldRef<"JobPosting", "String">;
    readonly title: FieldRef<"JobPosting", "String">;
    readonly description: FieldRef<"JobPosting", "String">;
    readonly skills: FieldRef<"JobPosting", "String[]">;
    readonly status: FieldRef<"JobPosting", "JobStatus">;
    readonly createdById: FieldRef<"JobPosting", "String">;
    readonly createdAt: FieldRef<"JobPosting", "DateTime">;
    readonly updatedAt: FieldRef<"JobPosting", "DateTime">;
  }

  // Custom InputTypes
  /**
   * JobPosting findUnique
   */
  export type JobPostingFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null;
    /**
     * Filter, which JobPosting to fetch.
     */
    where: JobPostingWhereUniqueInput;
  };

  /**
   * JobPosting findUniqueOrThrow
   */
  export type JobPostingFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null;
    /**
     * Filter, which JobPosting to fetch.
     */
    where: JobPostingWhereUniqueInput;
  };

  /**
   * JobPosting findFirst
   */
  export type JobPostingFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null;
    /**
     * Filter, which JobPosting to fetch.
     */
    where?: JobPostingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobPostings to fetch.
     */
    orderBy?:
      | JobPostingOrderByWithRelationInput
      | JobPostingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for JobPostings.
     */
    cursor?: JobPostingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobPostings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobPostings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JobPostings.
     */
    distinct?: JobPostingScalarFieldEnum | JobPostingScalarFieldEnum[];
  };

  /**
   * JobPosting findFirstOrThrow
   */
  export type JobPostingFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null;
    /**
     * Filter, which JobPosting to fetch.
     */
    where?: JobPostingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobPostings to fetch.
     */
    orderBy?:
      | JobPostingOrderByWithRelationInput
      | JobPostingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for JobPostings.
     */
    cursor?: JobPostingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobPostings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobPostings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of JobPostings.
     */
    distinct?: JobPostingScalarFieldEnum | JobPostingScalarFieldEnum[];
  };

  /**
   * JobPosting findMany
   */
  export type JobPostingFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null;
    /**
     * Filter, which JobPostings to fetch.
     */
    where?: JobPostingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of JobPostings to fetch.
     */
    orderBy?:
      | JobPostingOrderByWithRelationInput
      | JobPostingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing JobPostings.
     */
    cursor?: JobPostingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` JobPostings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` JobPostings.
     */
    skip?: number;
    distinct?: JobPostingScalarFieldEnum | JobPostingScalarFieldEnum[];
  };

  /**
   * JobPosting create
   */
  export type JobPostingCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null;
    /**
     * The data needed to create a JobPosting.
     */
    data: XOR<JobPostingCreateInput, JobPostingUncheckedCreateInput>;
  };

  /**
   * JobPosting createMany
   */
  export type JobPostingCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many JobPostings.
     */
    data: JobPostingCreateManyInput | JobPostingCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * JobPosting createManyAndReturn
   */
  export type JobPostingCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null;
    /**
     * The data used to create many JobPostings.
     */
    data: JobPostingCreateManyInput | JobPostingCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * JobPosting update
   */
  export type JobPostingUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null;
    /**
     * The data needed to update a JobPosting.
     */
    data: XOR<JobPostingUpdateInput, JobPostingUncheckedUpdateInput>;
    /**
     * Choose, which JobPosting to update.
     */
    where: JobPostingWhereUniqueInput;
  };

  /**
   * JobPosting updateMany
   */
  export type JobPostingUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update JobPostings.
     */
    data: XOR<
      JobPostingUpdateManyMutationInput,
      JobPostingUncheckedUpdateManyInput
    >;
    /**
     * Filter which JobPostings to update
     */
    where?: JobPostingWhereInput;
    /**
     * Limit how many JobPostings to update.
     */
    limit?: number;
  };

  /**
   * JobPosting updateManyAndReturn
   */
  export type JobPostingUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null;
    /**
     * The data used to update JobPostings.
     */
    data: XOR<
      JobPostingUpdateManyMutationInput,
      JobPostingUncheckedUpdateManyInput
    >;
    /**
     * Filter which JobPostings to update
     */
    where?: JobPostingWhereInput;
    /**
     * Limit how many JobPostings to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * JobPosting upsert
   */
  export type JobPostingUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null;
    /**
     * The filter to search for the JobPosting to update in case it exists.
     */
    where: JobPostingWhereUniqueInput;
    /**
     * In case the JobPosting found by the `where` argument doesn't exist, create a new JobPosting with this data.
     */
    create: XOR<JobPostingCreateInput, JobPostingUncheckedCreateInput>;
    /**
     * In case the JobPosting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobPostingUpdateInput, JobPostingUncheckedUpdateInput>;
  };

  /**
   * JobPosting delete
   */
  export type JobPostingDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null;
    /**
     * Filter which JobPosting to delete.
     */
    where: JobPostingWhereUniqueInput;
  };

  /**
   * JobPosting deleteMany
   */
  export type JobPostingDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which JobPostings to delete
     */
    where?: JobPostingWhereInput;
    /**
     * Limit how many JobPostings to delete.
     */
    limit?: number;
  };

  /**
   * JobPosting without action
   */
  export type JobPostingDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostingInclude<ExtArgs> | null;
  };

  /**
   * Model Experience
   */

  export type AggregateExperience = {
    _count: ExperienceCountAggregateOutputType | null;
    _min: ExperienceMinAggregateOutputType | null;
    _max: ExperienceMaxAggregateOutputType | null;
  };

  export type ExperienceMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    organizationId: string | null;
    eventId: string | null;
    type: $Enums.ExperienceType | null;
    title: string | null;
    startDate: Date | null;
    endDate: Date | null;
    isCurrent: boolean | null;
    verificationStatus: $Enums.VerificationStatus | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ExperienceMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    organizationId: string | null;
    eventId: string | null;
    type: $Enums.ExperienceType | null;
    title: string | null;
    startDate: Date | null;
    endDate: Date | null;
    isCurrent: boolean | null;
    verificationStatus: $Enums.VerificationStatus | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ExperienceCountAggregateOutputType = {
    id: number;
    userId: number;
    organizationId: number;
    eventId: number;
    type: number;
    title: number;
    startDate: number;
    endDate: number;
    isCurrent: number;
    skills: number;
    verificationStatus: number;
    notes: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type ExperienceMinAggregateInputType = {
    id?: true;
    userId?: true;
    organizationId?: true;
    eventId?: true;
    type?: true;
    title?: true;
    startDate?: true;
    endDate?: true;
    isCurrent?: true;
    verificationStatus?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ExperienceMaxAggregateInputType = {
    id?: true;
    userId?: true;
    organizationId?: true;
    eventId?: true;
    type?: true;
    title?: true;
    startDate?: true;
    endDate?: true;
    isCurrent?: true;
    verificationStatus?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ExperienceCountAggregateInputType = {
    id?: true;
    userId?: true;
    organizationId?: true;
    eventId?: true;
    type?: true;
    title?: true;
    startDate?: true;
    endDate?: true;
    isCurrent?: true;
    skills?: true;
    verificationStatus?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type ExperienceAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Experience to aggregate.
     */
    where?: ExperienceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Experiences to fetch.
     */
    orderBy?:
      | ExperienceOrderByWithRelationInput
      | ExperienceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ExperienceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Experiences.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Experiences
     **/
    _count?: true | ExperienceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ExperienceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ExperienceMaxAggregateInputType;
  };

  export type GetExperienceAggregateType<T extends ExperienceAggregateArgs> = {
    [P in keyof T & keyof AggregateExperience]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperience[P]>
      : GetScalarType<T[P], AggregateExperience[P]>;
  };

  export type ExperienceGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ExperienceWhereInput;
    orderBy?:
      | ExperienceOrderByWithAggregationInput
      | ExperienceOrderByWithAggregationInput[];
    by: ExperienceScalarFieldEnum[] | ExperienceScalarFieldEnum;
    having?: ExperienceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExperienceCountAggregateInputType | true;
    _min?: ExperienceMinAggregateInputType;
    _max?: ExperienceMaxAggregateInputType;
  };

  export type ExperienceGroupByOutputType = {
    id: string;
    userId: string;
    organizationId: string | null;
    eventId: string | null;
    type: $Enums.ExperienceType;
    title: string;
    startDate: Date | null;
    endDate: Date | null;
    isCurrent: boolean;
    skills: string[];
    verificationStatus: $Enums.VerificationStatus;
    notes: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ExperienceCountAggregateOutputType | null;
    _min: ExperienceMinAggregateOutputType | null;
    _max: ExperienceMaxAggregateOutputType | null;
  };

  type GetExperienceGroupByPayload<T extends ExperienceGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ExperienceGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof ExperienceGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceGroupByOutputType[P]>;
        }
      >
    >;

  export type ExperienceSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      organizationId?: boolean;
      eventId?: boolean;
      type?: boolean;
      title?: boolean;
      startDate?: boolean;
      endDate?: boolean;
      isCurrent?: boolean;
      skills?: boolean;
      verificationStatus?: boolean;
      notes?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      organization?: boolean | Experience$organizationArgs<ExtArgs>;
      event?: boolean | Experience$eventArgs<ExtArgs>;
    },
    ExtArgs["result"]["experience"]
  >;

  export type ExperienceSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      organizationId?: boolean;
      eventId?: boolean;
      type?: boolean;
      title?: boolean;
      startDate?: boolean;
      endDate?: boolean;
      isCurrent?: boolean;
      skills?: boolean;
      verificationStatus?: boolean;
      notes?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      organization?: boolean | Experience$organizationArgs<ExtArgs>;
      event?: boolean | Experience$eventArgs<ExtArgs>;
    },
    ExtArgs["result"]["experience"]
  >;

  export type ExperienceSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      organizationId?: boolean;
      eventId?: boolean;
      type?: boolean;
      title?: boolean;
      startDate?: boolean;
      endDate?: boolean;
      isCurrent?: boolean;
      skills?: boolean;
      verificationStatus?: boolean;
      notes?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      organization?: boolean | Experience$organizationArgs<ExtArgs>;
      event?: boolean | Experience$eventArgs<ExtArgs>;
    },
    ExtArgs["result"]["experience"]
  >;

  export type ExperienceSelectScalar = {
    id?: boolean;
    userId?: boolean;
    organizationId?: boolean;
    eventId?: boolean;
    type?: boolean;
    title?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isCurrent?: boolean;
    skills?: boolean;
    verificationStatus?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type ExperienceOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "userId"
    | "organizationId"
    | "eventId"
    | "type"
    | "title"
    | "startDate"
    | "endDate"
    | "isCurrent"
    | "skills"
    | "verificationStatus"
    | "notes"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["experience"]
  >;
  export type ExperienceInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    organization?: boolean | Experience$organizationArgs<ExtArgs>;
    event?: boolean | Experience$eventArgs<ExtArgs>;
  };
  export type ExperienceIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    organization?: boolean | Experience$organizationArgs<ExtArgs>;
    event?: boolean | Experience$eventArgs<ExtArgs>;
  };
  export type ExperienceIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    organization?: boolean | Experience$organizationArgs<ExtArgs>;
    event?: boolean | Experience$eventArgs<ExtArgs>;
  };

  export type $ExperiencePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Experience";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      organization: Prisma.$OrganizationPayload<ExtArgs> | null;
      event: Prisma.$EventPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        organizationId: string | null;
        eventId: string | null;
        type: $Enums.ExperienceType;
        title: string;
        startDate: Date | null;
        endDate: Date | null;
        isCurrent: boolean;
        skills: string[];
        verificationStatus: $Enums.VerificationStatus;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["experience"]
    >;
    composites: {};
  };

  type ExperienceGetPayload<
    S extends boolean | null | undefined | ExperienceDefaultArgs,
  > = $Result.GetResult<Prisma.$ExperiencePayload, S>;

  type ExperienceCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    ExperienceFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: ExperienceCountAggregateInputType | true;
  };

  export interface ExperienceDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Experience"];
      meta: { name: "Experience" };
    };
    /**
     * Find zero or one Experience that matches the filter.
     * @param {ExperienceFindUniqueArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExperienceFindUniqueArgs>(
      args: SelectSubset<T, ExperienceFindUniqueArgs<ExtArgs>>,
    ): Prisma__ExperienceClient<
      $Result.GetResult<
        Prisma.$ExperiencePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Experience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExperienceFindUniqueOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExperienceFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ExperienceFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ExperienceClient<
      $Result.GetResult<
        Prisma.$ExperiencePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Experience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExperienceFindFirstArgs>(
      args?: SelectSubset<T, ExperienceFindFirstArgs<ExtArgs>>,
    ): Prisma__ExperienceClient<
      $Result.GetResult<
        Prisma.$ExperiencePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Experience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExperienceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ExperienceFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ExperienceClient<
      $Result.GetResult<
        Prisma.$ExperiencePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experiences
     * const experiences = await prisma.experience.findMany()
     *
     * // Get first 10 Experiences
     * const experiences = await prisma.experience.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const experienceWithIdOnly = await prisma.experience.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ExperienceFindManyArgs>(
      args?: SelectSubset<T, ExperienceFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ExperiencePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Experience.
     * @param {ExperienceCreateArgs} args - Arguments to create a Experience.
     * @example
     * // Create one Experience
     * const Experience = await prisma.experience.create({
     *   data: {
     *     // ... data to create a Experience
     *   }
     * })
     *
     */
    create<T extends ExperienceCreateArgs>(
      args: SelectSubset<T, ExperienceCreateArgs<ExtArgs>>,
    ): Prisma__ExperienceClient<
      $Result.GetResult<
        Prisma.$ExperiencePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Experiences.
     * @param {ExperienceCreateManyArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ExperienceCreateManyArgs>(
      args?: SelectSubset<T, ExperienceCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Experiences and returns the data saved in the database.
     * @param {ExperienceCreateManyAndReturnArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ExperienceCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ExperienceCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ExperiencePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Experience.
     * @param {ExperienceDeleteArgs} args - Arguments to delete one Experience.
     * @example
     * // Delete one Experience
     * const Experience = await prisma.experience.delete({
     *   where: {
     *     // ... filter to delete one Experience
     *   }
     * })
     *
     */
    delete<T extends ExperienceDeleteArgs>(
      args: SelectSubset<T, ExperienceDeleteArgs<ExtArgs>>,
    ): Prisma__ExperienceClient<
      $Result.GetResult<
        Prisma.$ExperiencePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Experience.
     * @param {ExperienceUpdateArgs} args - Arguments to update one Experience.
     * @example
     * // Update one Experience
     * const experience = await prisma.experience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ExperienceUpdateArgs>(
      args: SelectSubset<T, ExperienceUpdateArgs<ExtArgs>>,
    ): Prisma__ExperienceClient<
      $Result.GetResult<
        Prisma.$ExperiencePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Experiences.
     * @param {ExperienceDeleteManyArgs} args - Arguments to filter Experiences to delete.
     * @example
     * // Delete a few Experiences
     * const { count } = await prisma.experience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ExperienceDeleteManyArgs>(
      args?: SelectSubset<T, ExperienceDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ExperienceUpdateManyArgs>(
      args: SelectSubset<T, ExperienceUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Experiences and returns the data updated in the database.
     * @param {ExperienceUpdateManyAndReturnArgs} args - Arguments to update many Experiences.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExperienceUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ExperienceUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ExperiencePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Experience.
     * @param {ExperienceUpsertArgs} args - Arguments to update or create a Experience.
     * @example
     * // Update or create a Experience
     * const experience = await prisma.experience.upsert({
     *   create: {
     *     // ... data to create a Experience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experience we want to update
     *   }
     * })
     */
    upsert<T extends ExperienceUpsertArgs>(
      args: SelectSubset<T, ExperienceUpsertArgs<ExtArgs>>,
    ): Prisma__ExperienceClient<
      $Result.GetResult<
        Prisma.$ExperiencePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceCountArgs} args - Arguments to filter Experiences to count.
     * @example
     * // Count the number of Experiences
     * const count = await prisma.experience.count({
     *   where: {
     *     // ... the filter for the Experiences we want to count
     *   }
     * })
     **/
    count<T extends ExperienceCountArgs>(
      args?: Subset<T, ExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ExperienceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExperienceAggregateArgs>(
      args: Subset<T, ExperienceAggregateArgs>,
    ): Prisma.PrismaPromise<GetExperienceAggregateType<T>>;

    /**
     * Group by Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceGroupByArgs} args - Group by arguments.
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
      T extends ExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperienceGroupByArgs["orderBy"] }
        : { orderBy?: ExperienceGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ExperienceGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetExperienceGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Experience model
     */
    readonly fields: ExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Experience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperienceClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    organization<T extends Experience$organizationArgs<ExtArgs> = {}>(
      args?: Subset<T, Experience$organizationArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    event<T extends Experience$eventArgs<ExtArgs> = {}>(
      args?: Subset<T, Experience$eventArgs<ExtArgs>>,
    ): Prisma__EventClient<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Experience model
   */
  interface ExperienceFieldRefs {
    readonly id: FieldRef<"Experience", "String">;
    readonly userId: FieldRef<"Experience", "String">;
    readonly organizationId: FieldRef<"Experience", "String">;
    readonly eventId: FieldRef<"Experience", "String">;
    readonly type: FieldRef<"Experience", "ExperienceType">;
    readonly title: FieldRef<"Experience", "String">;
    readonly startDate: FieldRef<"Experience", "DateTime">;
    readonly endDate: FieldRef<"Experience", "DateTime">;
    readonly isCurrent: FieldRef<"Experience", "Boolean">;
    readonly skills: FieldRef<"Experience", "String[]">;
    readonly verificationStatus: FieldRef<"Experience", "VerificationStatus">;
    readonly notes: FieldRef<"Experience", "String">;
    readonly createdAt: FieldRef<"Experience", "DateTime">;
    readonly updatedAt: FieldRef<"Experience", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Experience findUnique
   */
  export type ExperienceFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null;
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput;
  };

  /**
   * Experience findUniqueOrThrow
   */
  export type ExperienceFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null;
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput;
  };

  /**
   * Experience findFirst
   */
  export type ExperienceFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null;
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Experiences to fetch.
     */
    orderBy?:
      | ExperienceOrderByWithRelationInput
      | ExperienceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Experiences.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[];
  };

  /**
   * Experience findFirstOrThrow
   */
  export type ExperienceFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null;
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Experiences to fetch.
     */
    orderBy?:
      | ExperienceOrderByWithRelationInput
      | ExperienceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Experiences.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[];
  };

  /**
   * Experience findMany
   */
  export type ExperienceFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null;
    /**
     * Filter, which Experiences to fetch.
     */
    where?: ExperienceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Experiences to fetch.
     */
    orderBy?:
      | ExperienceOrderByWithRelationInput
      | ExperienceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Experiences.
     */
    cursor?: ExperienceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Experiences.
     */
    skip?: number;
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[];
  };

  /**
   * Experience create
   */
  export type ExperienceCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null;
    /**
     * The data needed to create a Experience.
     */
    data: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>;
  };

  /**
   * Experience createMany
   */
  export type ExperienceCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Experience createManyAndReturn
   */
  export type ExperienceCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null;
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Experience update
   */
  export type ExperienceUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null;
    /**
     * The data needed to update a Experience.
     */
    data: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>;
    /**
     * Choose, which Experience to update.
     */
    where: ExperienceWhereUniqueInput;
  };

  /**
   * Experience updateMany
   */
  export type ExperienceUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Experiences.
     */
    data: XOR<
      ExperienceUpdateManyMutationInput,
      ExperienceUncheckedUpdateManyInput
    >;
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput;
    /**
     * Limit how many Experiences to update.
     */
    limit?: number;
  };

  /**
   * Experience updateManyAndReturn
   */
  export type ExperienceUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null;
    /**
     * The data used to update Experiences.
     */
    data: XOR<
      ExperienceUpdateManyMutationInput,
      ExperienceUncheckedUpdateManyInput
    >;
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput;
    /**
     * Limit how many Experiences to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Experience upsert
   */
  export type ExperienceUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null;
    /**
     * The filter to search for the Experience to update in case it exists.
     */
    where: ExperienceWhereUniqueInput;
    /**
     * In case the Experience found by the `where` argument doesn't exist, create a new Experience with this data.
     */
    create: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>;
    /**
     * In case the Experience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>;
  };

  /**
   * Experience delete
   */
  export type ExperienceDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null;
    /**
     * Filter which Experience to delete.
     */
    where: ExperienceWhereUniqueInput;
  };

  /**
   * Experience deleteMany
   */
  export type ExperienceDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Experiences to delete
     */
    where?: ExperienceWhereInput;
    /**
     * Limit how many Experiences to delete.
     */
    limit?: number;
  };

  /**
   * Experience.organization
   */
  export type Experience$organizationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    where?: OrganizationWhereInput;
  };

  /**
   * Experience.event
   */
  export type Experience$eventArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    where?: EventWhereInput;
  };

  /**
   * Experience without action
   */
  export type ExperienceDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null;
  };

  /**
   * Model CheckIn
   */

  export type AggregateCheckIn = {
    _count: CheckInCountAggregateOutputType | null;
    _min: CheckInMinAggregateOutputType | null;
    _max: CheckInMaxAggregateOutputType | null;
  };

  export type CheckInMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    organizationId: string | null;
    eventId: string | null;
    type: $Enums.CheckInType | null;
    note: string | null;
    verificationStatus: $Enums.VerificationStatus | null;
    addedById: string | null;
    createdAt: Date | null;
  };

  export type CheckInMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    organizationId: string | null;
    eventId: string | null;
    type: $Enums.CheckInType | null;
    note: string | null;
    verificationStatus: $Enums.VerificationStatus | null;
    addedById: string | null;
    createdAt: Date | null;
  };

  export type CheckInCountAggregateOutputType = {
    id: number;
    userId: number;
    organizationId: number;
    eventId: number;
    type: number;
    note: number;
    verificationStatus: number;
    addedById: number;
    createdAt: number;
    _all: number;
  };

  export type CheckInMinAggregateInputType = {
    id?: true;
    userId?: true;
    organizationId?: true;
    eventId?: true;
    type?: true;
    note?: true;
    verificationStatus?: true;
    addedById?: true;
    createdAt?: true;
  };

  export type CheckInMaxAggregateInputType = {
    id?: true;
    userId?: true;
    organizationId?: true;
    eventId?: true;
    type?: true;
    note?: true;
    verificationStatus?: true;
    addedById?: true;
    createdAt?: true;
  };

  export type CheckInCountAggregateInputType = {
    id?: true;
    userId?: true;
    organizationId?: true;
    eventId?: true;
    type?: true;
    note?: true;
    verificationStatus?: true;
    addedById?: true;
    createdAt?: true;
    _all?: true;
  };

  export type CheckInAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CheckIn to aggregate.
     */
    where?: CheckInWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CheckIns to fetch.
     */
    orderBy?:
      | CheckInOrderByWithRelationInput
      | CheckInOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CheckInWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CheckIns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CheckIns
     **/
    _count?: true | CheckInCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CheckInMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CheckInMaxAggregateInputType;
  };

  export type GetCheckInAggregateType<T extends CheckInAggregateArgs> = {
    [P in keyof T & keyof AggregateCheckIn]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckIn[P]>
      : GetScalarType<T[P], AggregateCheckIn[P]>;
  };

  export type CheckInGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CheckInWhereInput;
    orderBy?:
      | CheckInOrderByWithAggregationInput
      | CheckInOrderByWithAggregationInput[];
    by: CheckInScalarFieldEnum[] | CheckInScalarFieldEnum;
    having?: CheckInScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CheckInCountAggregateInputType | true;
    _min?: CheckInMinAggregateInputType;
    _max?: CheckInMaxAggregateInputType;
  };

  export type CheckInGroupByOutputType = {
    id: string;
    userId: string;
    organizationId: string;
    eventId: string | null;
    type: $Enums.CheckInType;
    note: string | null;
    verificationStatus: $Enums.VerificationStatus;
    addedById: string | null;
    createdAt: Date;
    _count: CheckInCountAggregateOutputType | null;
    _min: CheckInMinAggregateOutputType | null;
    _max: CheckInMaxAggregateOutputType | null;
  };

  type GetCheckInGroupByPayload<T extends CheckInGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CheckInGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof CheckInGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckInGroupByOutputType[P]>
            : GetScalarType<T[P], CheckInGroupByOutputType[P]>;
        }
      >
    >;

  export type CheckInSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      organizationId?: boolean;
      eventId?: boolean;
      type?: boolean;
      note?: boolean;
      verificationStatus?: boolean;
      addedById?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
      event?: boolean | CheckIn$eventArgs<ExtArgs>;
      addedBy?: boolean | CheckIn$addedByArgs<ExtArgs>;
    },
    ExtArgs["result"]["checkIn"]
  >;

  export type CheckInSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      organizationId?: boolean;
      eventId?: boolean;
      type?: boolean;
      note?: boolean;
      verificationStatus?: boolean;
      addedById?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
      event?: boolean | CheckIn$eventArgs<ExtArgs>;
      addedBy?: boolean | CheckIn$addedByArgs<ExtArgs>;
    },
    ExtArgs["result"]["checkIn"]
  >;

  export type CheckInSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      organizationId?: boolean;
      eventId?: boolean;
      type?: boolean;
      note?: boolean;
      verificationStatus?: boolean;
      addedById?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
      event?: boolean | CheckIn$eventArgs<ExtArgs>;
      addedBy?: boolean | CheckIn$addedByArgs<ExtArgs>;
    },
    ExtArgs["result"]["checkIn"]
  >;

  export type CheckInSelectScalar = {
    id?: boolean;
    userId?: boolean;
    organizationId?: boolean;
    eventId?: boolean;
    type?: boolean;
    note?: boolean;
    verificationStatus?: boolean;
    addedById?: boolean;
    createdAt?: boolean;
  };

  export type CheckInOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "userId"
    | "organizationId"
    | "eventId"
    | "type"
    | "note"
    | "verificationStatus"
    | "addedById"
    | "createdAt",
    ExtArgs["result"]["checkIn"]
  >;
  export type CheckInInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    event?: boolean | CheckIn$eventArgs<ExtArgs>;
    addedBy?: boolean | CheckIn$addedByArgs<ExtArgs>;
  };
  export type CheckInIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    event?: boolean | CheckIn$eventArgs<ExtArgs>;
    addedBy?: boolean | CheckIn$addedByArgs<ExtArgs>;
  };
  export type CheckInIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    event?: boolean | CheckIn$eventArgs<ExtArgs>;
    addedBy?: boolean | CheckIn$addedByArgs<ExtArgs>;
  };

  export type $CheckInPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "CheckIn";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      organization: Prisma.$OrganizationPayload<ExtArgs>;
      event: Prisma.$EventPayload<ExtArgs> | null;
      addedBy: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        organizationId: string;
        eventId: string | null;
        type: $Enums.CheckInType;
        note: string | null;
        verificationStatus: $Enums.VerificationStatus;
        addedById: string | null;
        createdAt: Date;
      },
      ExtArgs["result"]["checkIn"]
    >;
    composites: {};
  };

  type CheckInGetPayload<
    S extends boolean | null | undefined | CheckInDefaultArgs,
  > = $Result.GetResult<Prisma.$CheckInPayload, S>;

  type CheckInCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<CheckInFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: CheckInCountAggregateInputType | true;
  };

  export interface CheckInDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["CheckIn"];
      meta: { name: "CheckIn" };
    };
    /**
     * Find zero or one CheckIn that matches the filter.
     * @param {CheckInFindUniqueArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CheckInFindUniqueArgs>(
      args: SelectSubset<T, CheckInFindUniqueArgs<ExtArgs>>,
    ): Prisma__CheckInClient<
      $Result.GetResult<
        Prisma.$CheckInPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one CheckIn that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CheckInFindUniqueOrThrowArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CheckInFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CheckInFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CheckInClient<
      $Result.GetResult<
        Prisma.$CheckInPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CheckIn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInFindFirstArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CheckInFindFirstArgs>(
      args?: SelectSubset<T, CheckInFindFirstArgs<ExtArgs>>,
    ): Prisma__CheckInClient<
      $Result.GetResult<
        Prisma.$CheckInPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CheckIn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInFindFirstOrThrowArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CheckInFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CheckInFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CheckInClient<
      $Result.GetResult<
        Prisma.$CheckInPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more CheckIns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CheckIns
     * const checkIns = await prisma.checkIn.findMany()
     *
     * // Get first 10 CheckIns
     * const checkIns = await prisma.checkIn.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const checkInWithIdOnly = await prisma.checkIn.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CheckInFindManyArgs>(
      args?: SelectSubset<T, CheckInFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CheckInPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a CheckIn.
     * @param {CheckInCreateArgs} args - Arguments to create a CheckIn.
     * @example
     * // Create one CheckIn
     * const CheckIn = await prisma.checkIn.create({
     *   data: {
     *     // ... data to create a CheckIn
     *   }
     * })
     *
     */
    create<T extends CheckInCreateArgs>(
      args: SelectSubset<T, CheckInCreateArgs<ExtArgs>>,
    ): Prisma__CheckInClient<
      $Result.GetResult<
        Prisma.$CheckInPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many CheckIns.
     * @param {CheckInCreateManyArgs} args - Arguments to create many CheckIns.
     * @example
     * // Create many CheckIns
     * const checkIn = await prisma.checkIn.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CheckInCreateManyArgs>(
      args?: SelectSubset<T, CheckInCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many CheckIns and returns the data saved in the database.
     * @param {CheckInCreateManyAndReturnArgs} args - Arguments to create many CheckIns.
     * @example
     * // Create many CheckIns
     * const checkIn = await prisma.checkIn.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CheckIns and only return the `id`
     * const checkInWithIdOnly = await prisma.checkIn.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CheckInCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CheckInCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CheckInPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a CheckIn.
     * @param {CheckInDeleteArgs} args - Arguments to delete one CheckIn.
     * @example
     * // Delete one CheckIn
     * const CheckIn = await prisma.checkIn.delete({
     *   where: {
     *     // ... filter to delete one CheckIn
     *   }
     * })
     *
     */
    delete<T extends CheckInDeleteArgs>(
      args: SelectSubset<T, CheckInDeleteArgs<ExtArgs>>,
    ): Prisma__CheckInClient<
      $Result.GetResult<
        Prisma.$CheckInPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one CheckIn.
     * @param {CheckInUpdateArgs} args - Arguments to update one CheckIn.
     * @example
     * // Update one CheckIn
     * const checkIn = await prisma.checkIn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CheckInUpdateArgs>(
      args: SelectSubset<T, CheckInUpdateArgs<ExtArgs>>,
    ): Prisma__CheckInClient<
      $Result.GetResult<
        Prisma.$CheckInPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more CheckIns.
     * @param {CheckInDeleteManyArgs} args - Arguments to filter CheckIns to delete.
     * @example
     * // Delete a few CheckIns
     * const { count } = await prisma.checkIn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CheckInDeleteManyArgs>(
      args?: SelectSubset<T, CheckInDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CheckIns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CheckIns
     * const checkIn = await prisma.checkIn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CheckInUpdateManyArgs>(
      args: SelectSubset<T, CheckInUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CheckIns and returns the data updated in the database.
     * @param {CheckInUpdateManyAndReturnArgs} args - Arguments to update many CheckIns.
     * @example
     * // Update many CheckIns
     * const checkIn = await prisma.checkIn.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CheckIns and only return the `id`
     * const checkInWithIdOnly = await prisma.checkIn.updateManyAndReturn({
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
    updateManyAndReturn<T extends CheckInUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CheckInUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CheckInPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one CheckIn.
     * @param {CheckInUpsertArgs} args - Arguments to update or create a CheckIn.
     * @example
     * // Update or create a CheckIn
     * const checkIn = await prisma.checkIn.upsert({
     *   create: {
     *     // ... data to create a CheckIn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CheckIn we want to update
     *   }
     * })
     */
    upsert<T extends CheckInUpsertArgs>(
      args: SelectSubset<T, CheckInUpsertArgs<ExtArgs>>,
    ): Prisma__CheckInClient<
      $Result.GetResult<
        Prisma.$CheckInPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of CheckIns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInCountArgs} args - Arguments to filter CheckIns to count.
     * @example
     * // Count the number of CheckIns
     * const count = await prisma.checkIn.count({
     *   where: {
     *     // ... the filter for the CheckIns we want to count
     *   }
     * })
     **/
    count<T extends CheckInCountArgs>(
      args?: Subset<T, CheckInCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], CheckInCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a CheckIn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CheckInAggregateArgs>(
      args: Subset<T, CheckInAggregateArgs>,
    ): Prisma.PrismaPromise<GetCheckInAggregateType<T>>;

    /**
     * Group by CheckIn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInGroupByArgs} args - Group by arguments.
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
      T extends CheckInGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckInGroupByArgs["orderBy"] }
        : { orderBy?: CheckInGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CheckInGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetCheckInGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CheckIn model
     */
    readonly fields: CheckInFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CheckIn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CheckInClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      | $Result.GetResult<
          Prisma.$OrganizationPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    event<T extends CheckIn$eventArgs<ExtArgs> = {}>(
      args?: Subset<T, CheckIn$eventArgs<ExtArgs>>,
    ): Prisma__EventClient<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    addedBy<T extends CheckIn$addedByArgs<ExtArgs> = {}>(
      args?: Subset<T, CheckIn$addedByArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the CheckIn model
   */
  interface CheckInFieldRefs {
    readonly id: FieldRef<"CheckIn", "String">;
    readonly userId: FieldRef<"CheckIn", "String">;
    readonly organizationId: FieldRef<"CheckIn", "String">;
    readonly eventId: FieldRef<"CheckIn", "String">;
    readonly type: FieldRef<"CheckIn", "CheckInType">;
    readonly note: FieldRef<"CheckIn", "String">;
    readonly verificationStatus: FieldRef<"CheckIn", "VerificationStatus">;
    readonly addedById: FieldRef<"CheckIn", "String">;
    readonly createdAt: FieldRef<"CheckIn", "DateTime">;
  }

  // Custom InputTypes
  /**
   * CheckIn findUnique
   */
  export type CheckInFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null;
    /**
     * Filter, which CheckIn to fetch.
     */
    where: CheckInWhereUniqueInput;
  };

  /**
   * CheckIn findUniqueOrThrow
   */
  export type CheckInFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null;
    /**
     * Filter, which CheckIn to fetch.
     */
    where: CheckInWhereUniqueInput;
  };

  /**
   * CheckIn findFirst
   */
  export type CheckInFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null;
    /**
     * Filter, which CheckIn to fetch.
     */
    where?: CheckInWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CheckIns to fetch.
     */
    orderBy?:
      | CheckInOrderByWithRelationInput
      | CheckInOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CheckIns.
     */
    cursor?: CheckInWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CheckIns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CheckIns.
     */
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[];
  };

  /**
   * CheckIn findFirstOrThrow
   */
  export type CheckInFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null;
    /**
     * Filter, which CheckIn to fetch.
     */
    where?: CheckInWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CheckIns to fetch.
     */
    orderBy?:
      | CheckInOrderByWithRelationInput
      | CheckInOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CheckIns.
     */
    cursor?: CheckInWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CheckIns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CheckIns.
     */
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[];
  };

  /**
   * CheckIn findMany
   */
  export type CheckInFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null;
    /**
     * Filter, which CheckIns to fetch.
     */
    where?: CheckInWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CheckIns to fetch.
     */
    orderBy?:
      | CheckInOrderByWithRelationInput
      | CheckInOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CheckIns.
     */
    cursor?: CheckInWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CheckIns.
     */
    skip?: number;
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[];
  };

  /**
   * CheckIn create
   */
  export type CheckInCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null;
    /**
     * The data needed to create a CheckIn.
     */
    data: XOR<CheckInCreateInput, CheckInUncheckedCreateInput>;
  };

  /**
   * CheckIn createMany
   */
  export type CheckInCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many CheckIns.
     */
    data: CheckInCreateManyInput | CheckInCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * CheckIn createManyAndReturn
   */
  export type CheckInCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null;
    /**
     * The data used to create many CheckIns.
     */
    data: CheckInCreateManyInput | CheckInCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * CheckIn update
   */
  export type CheckInUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null;
    /**
     * The data needed to update a CheckIn.
     */
    data: XOR<CheckInUpdateInput, CheckInUncheckedUpdateInput>;
    /**
     * Choose, which CheckIn to update.
     */
    where: CheckInWhereUniqueInput;
  };

  /**
   * CheckIn updateMany
   */
  export type CheckInUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update CheckIns.
     */
    data: XOR<CheckInUpdateManyMutationInput, CheckInUncheckedUpdateManyInput>;
    /**
     * Filter which CheckIns to update
     */
    where?: CheckInWhereInput;
    /**
     * Limit how many CheckIns to update.
     */
    limit?: number;
  };

  /**
   * CheckIn updateManyAndReturn
   */
  export type CheckInUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null;
    /**
     * The data used to update CheckIns.
     */
    data: XOR<CheckInUpdateManyMutationInput, CheckInUncheckedUpdateManyInput>;
    /**
     * Filter which CheckIns to update
     */
    where?: CheckInWhereInput;
    /**
     * Limit how many CheckIns to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * CheckIn upsert
   */
  export type CheckInUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null;
    /**
     * The filter to search for the CheckIn to update in case it exists.
     */
    where: CheckInWhereUniqueInput;
    /**
     * In case the CheckIn found by the `where` argument doesn't exist, create a new CheckIn with this data.
     */
    create: XOR<CheckInCreateInput, CheckInUncheckedCreateInput>;
    /**
     * In case the CheckIn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CheckInUpdateInput, CheckInUncheckedUpdateInput>;
  };

  /**
   * CheckIn delete
   */
  export type CheckInDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null;
    /**
     * Filter which CheckIn to delete.
     */
    where: CheckInWhereUniqueInput;
  };

  /**
   * CheckIn deleteMany
   */
  export type CheckInDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CheckIns to delete
     */
    where?: CheckInWhereInput;
    /**
     * Limit how many CheckIns to delete.
     */
    limit?: number;
  };

  /**
   * CheckIn.event
   */
  export type CheckIn$eventArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    where?: EventWhereInput;
  };

  /**
   * CheckIn.addedBy
   */
  export type CheckIn$addedByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    where?: UserWhereInput;
  };

  /**
   * CheckIn without action
   */
  export type CheckInDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CheckIn
     */
    omit?: CheckInOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null;
  };

  /**
   * Model Certificate
   */

  export type AggregateCertificate = {
    _count: CertificateCountAggregateOutputType | null;
    _min: CertificateMinAggregateOutputType | null;
    _max: CertificateMaxAggregateOutputType | null;
  };

  export type CertificateMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    organizationId: string | null;
    eventId: string | null;
    type: $Enums.CertificateType | null;
    description: string | null;
    hash: string | null;
    title: string | null;
    issueDate: Date | null;
    url: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CertificateMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    organizationId: string | null;
    eventId: string | null;
    type: $Enums.CertificateType | null;
    description: string | null;
    hash: string | null;
    title: string | null;
    issueDate: Date | null;
    url: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CertificateCountAggregateOutputType = {
    id: number;
    userId: number;
    organizationId: number;
    eventId: number;
    type: number;
    description: number;
    skills: number;
    hash: number;
    title: number;
    issueDate: number;
    url: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type CertificateMinAggregateInputType = {
    id?: true;
    userId?: true;
    organizationId?: true;
    eventId?: true;
    type?: true;
    description?: true;
    hash?: true;
    title?: true;
    issueDate?: true;
    url?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CertificateMaxAggregateInputType = {
    id?: true;
    userId?: true;
    organizationId?: true;
    eventId?: true;
    type?: true;
    description?: true;
    hash?: true;
    title?: true;
    issueDate?: true;
    url?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CertificateCountAggregateInputType = {
    id?: true;
    userId?: true;
    organizationId?: true;
    eventId?: true;
    type?: true;
    description?: true;
    skills?: true;
    hash?: true;
    title?: true;
    issueDate?: true;
    url?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type CertificateAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Certificate to aggregate.
     */
    where?: CertificateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Certificates to fetch.
     */
    orderBy?:
      | CertificateOrderByWithRelationInput
      | CertificateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CertificateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Certificates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Certificates
     **/
    _count?: true | CertificateCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CertificateMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CertificateMaxAggregateInputType;
  };

  export type GetCertificateAggregateType<T extends CertificateAggregateArgs> =
    {
      [P in keyof T & keyof AggregateCertificate]: P extends "_count" | "count"
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateCertificate[P]>
        : GetScalarType<T[P], AggregateCertificate[P]>;
    };

  export type CertificateGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CertificateWhereInput;
    orderBy?:
      | CertificateOrderByWithAggregationInput
      | CertificateOrderByWithAggregationInput[];
    by: CertificateScalarFieldEnum[] | CertificateScalarFieldEnum;
    having?: CertificateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CertificateCountAggregateInputType | true;
    _min?: CertificateMinAggregateInputType;
    _max?: CertificateMaxAggregateInputType;
  };

  export type CertificateGroupByOutputType = {
    id: string;
    userId: string;
    organizationId: string | null;
    eventId: string | null;
    type: $Enums.CertificateType;
    description: string | null;
    skills: string[];
    hash: string | null;
    title: string;
    issueDate: Date;
    url: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: CertificateCountAggregateOutputType | null;
    _min: CertificateMinAggregateOutputType | null;
    _max: CertificateMaxAggregateOutputType | null;
  };

  type GetCertificateGroupByPayload<T extends CertificateGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CertificateGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof CertificateGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CertificateGroupByOutputType[P]>
            : GetScalarType<T[P], CertificateGroupByOutputType[P]>;
        }
      >
    >;

  export type CertificateSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      organizationId?: boolean;
      eventId?: boolean;
      type?: boolean;
      description?: boolean;
      skills?: boolean;
      hash?: boolean;
      title?: boolean;
      issueDate?: boolean;
      url?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      organization?: boolean | Certificate$organizationArgs<ExtArgs>;
      event?: boolean | Certificate$eventArgs<ExtArgs>;
    },
    ExtArgs["result"]["certificate"]
  >;

  export type CertificateSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      organizationId?: boolean;
      eventId?: boolean;
      type?: boolean;
      description?: boolean;
      skills?: boolean;
      hash?: boolean;
      title?: boolean;
      issueDate?: boolean;
      url?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      organization?: boolean | Certificate$organizationArgs<ExtArgs>;
      event?: boolean | Certificate$eventArgs<ExtArgs>;
    },
    ExtArgs["result"]["certificate"]
  >;

  export type CertificateSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      organizationId?: boolean;
      eventId?: boolean;
      type?: boolean;
      description?: boolean;
      skills?: boolean;
      hash?: boolean;
      title?: boolean;
      issueDate?: boolean;
      url?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      organization?: boolean | Certificate$organizationArgs<ExtArgs>;
      event?: boolean | Certificate$eventArgs<ExtArgs>;
    },
    ExtArgs["result"]["certificate"]
  >;

  export type CertificateSelectScalar = {
    id?: boolean;
    userId?: boolean;
    organizationId?: boolean;
    eventId?: boolean;
    type?: boolean;
    description?: boolean;
    skills?: boolean;
    hash?: boolean;
    title?: boolean;
    issueDate?: boolean;
    url?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type CertificateOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "userId"
    | "organizationId"
    | "eventId"
    | "type"
    | "description"
    | "skills"
    | "hash"
    | "title"
    | "issueDate"
    | "url"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["certificate"]
  >;
  export type CertificateInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    organization?: boolean | Certificate$organizationArgs<ExtArgs>;
    event?: boolean | Certificate$eventArgs<ExtArgs>;
  };
  export type CertificateIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    organization?: boolean | Certificate$organizationArgs<ExtArgs>;
    event?: boolean | Certificate$eventArgs<ExtArgs>;
  };
  export type CertificateIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    organization?: boolean | Certificate$organizationArgs<ExtArgs>;
    event?: boolean | Certificate$eventArgs<ExtArgs>;
  };

  export type $CertificatePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Certificate";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      organization: Prisma.$OrganizationPayload<ExtArgs> | null;
      event: Prisma.$EventPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        organizationId: string | null;
        eventId: string | null;
        type: $Enums.CertificateType;
        description: string | null;
        skills: string[];
        hash: string | null;
        title: string;
        issueDate: Date;
        url: string | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["certificate"]
    >;
    composites: {};
  };

  type CertificateGetPayload<
    S extends boolean | null | undefined | CertificateDefaultArgs,
  > = $Result.GetResult<Prisma.$CertificatePayload, S>;

  type CertificateCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    CertificateFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: CertificateCountAggregateInputType | true;
  };

  export interface CertificateDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Certificate"];
      meta: { name: "Certificate" };
    };
    /**
     * Find zero or one Certificate that matches the filter.
     * @param {CertificateFindUniqueArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CertificateFindUniqueArgs>(
      args: SelectSubset<T, CertificateFindUniqueArgs<ExtArgs>>,
    ): Prisma__CertificateClient<
      $Result.GetResult<
        Prisma.$CertificatePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Certificate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CertificateFindUniqueOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CertificateFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CertificateFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CertificateClient<
      $Result.GetResult<
        Prisma.$CertificatePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Certificate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CertificateFindFirstArgs>(
      args?: SelectSubset<T, CertificateFindFirstArgs<ExtArgs>>,
    ): Prisma__CertificateClient<
      $Result.GetResult<
        Prisma.$CertificatePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Certificate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CertificateFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CertificateFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CertificateClient<
      $Result.GetResult<
        Prisma.$CertificatePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Certificates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Certificates
     * const certificates = await prisma.certificate.findMany()
     *
     * // Get first 10 Certificates
     * const certificates = await prisma.certificate.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const certificateWithIdOnly = await prisma.certificate.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CertificateFindManyArgs>(
      args?: SelectSubset<T, CertificateFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CertificatePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Certificate.
     * @param {CertificateCreateArgs} args - Arguments to create a Certificate.
     * @example
     * // Create one Certificate
     * const Certificate = await prisma.certificate.create({
     *   data: {
     *     // ... data to create a Certificate
     *   }
     * })
     *
     */
    create<T extends CertificateCreateArgs>(
      args: SelectSubset<T, CertificateCreateArgs<ExtArgs>>,
    ): Prisma__CertificateClient<
      $Result.GetResult<
        Prisma.$CertificatePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Certificates.
     * @param {CertificateCreateManyArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificate = await prisma.certificate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CertificateCreateManyArgs>(
      args?: SelectSubset<T, CertificateCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Certificates and returns the data saved in the database.
     * @param {CertificateCreateManyAndReturnArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificate = await prisma.certificate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Certificates and only return the `id`
     * const certificateWithIdOnly = await prisma.certificate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CertificateCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CertificateCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CertificatePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Certificate.
     * @param {CertificateDeleteArgs} args - Arguments to delete one Certificate.
     * @example
     * // Delete one Certificate
     * const Certificate = await prisma.certificate.delete({
     *   where: {
     *     // ... filter to delete one Certificate
     *   }
     * })
     *
     */
    delete<T extends CertificateDeleteArgs>(
      args: SelectSubset<T, CertificateDeleteArgs<ExtArgs>>,
    ): Prisma__CertificateClient<
      $Result.GetResult<
        Prisma.$CertificatePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Certificate.
     * @param {CertificateUpdateArgs} args - Arguments to update one Certificate.
     * @example
     * // Update one Certificate
     * const certificate = await prisma.certificate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CertificateUpdateArgs>(
      args: SelectSubset<T, CertificateUpdateArgs<ExtArgs>>,
    ): Prisma__CertificateClient<
      $Result.GetResult<
        Prisma.$CertificatePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Certificates.
     * @param {CertificateDeleteManyArgs} args - Arguments to filter Certificates to delete.
     * @example
     * // Delete a few Certificates
     * const { count } = await prisma.certificate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CertificateDeleteManyArgs>(
      args?: SelectSubset<T, CertificateDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Certificates
     * const certificate = await prisma.certificate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CertificateUpdateManyArgs>(
      args: SelectSubset<T, CertificateUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Certificates and returns the data updated in the database.
     * @param {CertificateUpdateManyAndReturnArgs} args - Arguments to update many Certificates.
     * @example
     * // Update many Certificates
     * const certificate = await prisma.certificate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Certificates and only return the `id`
     * const certificateWithIdOnly = await prisma.certificate.updateManyAndReturn({
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
    updateManyAndReturn<T extends CertificateUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CertificateUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CertificatePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Certificate.
     * @param {CertificateUpsertArgs} args - Arguments to update or create a Certificate.
     * @example
     * // Update or create a Certificate
     * const certificate = await prisma.certificate.upsert({
     *   create: {
     *     // ... data to create a Certificate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Certificate we want to update
     *   }
     * })
     */
    upsert<T extends CertificateUpsertArgs>(
      args: SelectSubset<T, CertificateUpsertArgs<ExtArgs>>,
    ): Prisma__CertificateClient<
      $Result.GetResult<
        Prisma.$CertificatePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateCountArgs} args - Arguments to filter Certificates to count.
     * @example
     * // Count the number of Certificates
     * const count = await prisma.certificate.count({
     *   where: {
     *     // ... the filter for the Certificates we want to count
     *   }
     * })
     **/
    count<T extends CertificateCountArgs>(
      args?: Subset<T, CertificateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], CertificateCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CertificateAggregateArgs>(
      args: Subset<T, CertificateAggregateArgs>,
    ): Prisma.PrismaPromise<GetCertificateAggregateType<T>>;

    /**
     * Group by Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateGroupByArgs} args - Group by arguments.
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
      T extends CertificateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CertificateGroupByArgs["orderBy"] }
        : { orderBy?: CertificateGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CertificateGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetCertificateGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Certificate model
     */
    readonly fields: CertificateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Certificate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CertificateClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    organization<T extends Certificate$organizationArgs<ExtArgs> = {}>(
      args?: Subset<T, Certificate$organizationArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    event<T extends Certificate$eventArgs<ExtArgs> = {}>(
      args?: Subset<T, Certificate$eventArgs<ExtArgs>>,
    ): Prisma__EventClient<
      $Result.GetResult<
        Prisma.$EventPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Certificate model
   */
  interface CertificateFieldRefs {
    readonly id: FieldRef<"Certificate", "String">;
    readonly userId: FieldRef<"Certificate", "String">;
    readonly organizationId: FieldRef<"Certificate", "String">;
    readonly eventId: FieldRef<"Certificate", "String">;
    readonly type: FieldRef<"Certificate", "CertificateType">;
    readonly description: FieldRef<"Certificate", "String">;
    readonly skills: FieldRef<"Certificate", "String[]">;
    readonly hash: FieldRef<"Certificate", "String">;
    readonly title: FieldRef<"Certificate", "String">;
    readonly issueDate: FieldRef<"Certificate", "DateTime">;
    readonly url: FieldRef<"Certificate", "String">;
    readonly createdAt: FieldRef<"Certificate", "DateTime">;
    readonly updatedAt: FieldRef<"Certificate", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Certificate findUnique
   */
  export type CertificateFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null;
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput;
  };

  /**
   * Certificate findUniqueOrThrow
   */
  export type CertificateFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null;
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput;
  };

  /**
   * Certificate findFirst
   */
  export type CertificateFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null;
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Certificates to fetch.
     */
    orderBy?:
      | CertificateOrderByWithRelationInput
      | CertificateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Certificates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[];
  };

  /**
   * Certificate findFirstOrThrow
   */
  export type CertificateFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null;
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Certificates to fetch.
     */
    orderBy?:
      | CertificateOrderByWithRelationInput
      | CertificateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Certificates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[];
  };

  /**
   * Certificate findMany
   */
  export type CertificateFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null;
    /**
     * Filter, which Certificates to fetch.
     */
    where?: CertificateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Certificates to fetch.
     */
    orderBy?:
      | CertificateOrderByWithRelationInput
      | CertificateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Certificates.
     */
    cursor?: CertificateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Certificates.
     */
    skip?: number;
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[];
  };

  /**
   * Certificate create
   */
  export type CertificateCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null;
    /**
     * The data needed to create a Certificate.
     */
    data: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>;
  };

  /**
   * Certificate createMany
   */
  export type CertificateCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Certificates.
     */
    data: CertificateCreateManyInput | CertificateCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Certificate createManyAndReturn
   */
  export type CertificateCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null;
    /**
     * The data used to create many Certificates.
     */
    data: CertificateCreateManyInput | CertificateCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Certificate update
   */
  export type CertificateUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null;
    /**
     * The data needed to update a Certificate.
     */
    data: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>;
    /**
     * Choose, which Certificate to update.
     */
    where: CertificateWhereUniqueInput;
  };

  /**
   * Certificate updateMany
   */
  export type CertificateUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Certificates.
     */
    data: XOR<
      CertificateUpdateManyMutationInput,
      CertificateUncheckedUpdateManyInput
    >;
    /**
     * Filter which Certificates to update
     */
    where?: CertificateWhereInput;
    /**
     * Limit how many Certificates to update.
     */
    limit?: number;
  };

  /**
   * Certificate updateManyAndReturn
   */
  export type CertificateUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null;
    /**
     * The data used to update Certificates.
     */
    data: XOR<
      CertificateUpdateManyMutationInput,
      CertificateUncheckedUpdateManyInput
    >;
    /**
     * Filter which Certificates to update
     */
    where?: CertificateWhereInput;
    /**
     * Limit how many Certificates to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Certificate upsert
   */
  export type CertificateUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null;
    /**
     * The filter to search for the Certificate to update in case it exists.
     */
    where: CertificateWhereUniqueInput;
    /**
     * In case the Certificate found by the `where` argument doesn't exist, create a new Certificate with this data.
     */
    create: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>;
    /**
     * In case the Certificate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>;
  };

  /**
   * Certificate delete
   */
  export type CertificateDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null;
    /**
     * Filter which Certificate to delete.
     */
    where: CertificateWhereUniqueInput;
  };

  /**
   * Certificate deleteMany
   */
  export type CertificateDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Certificates to delete
     */
    where?: CertificateWhereInput;
    /**
     * Limit how many Certificates to delete.
     */
    limit?: number;
  };

  /**
   * Certificate.organization
   */
  export type Certificate$organizationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    where?: OrganizationWhereInput;
  };

  /**
   * Certificate.event
   */
  export type Certificate$eventArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null;
    where?: EventWhereInput;
  };

  /**
   * Certificate without action
   */
  export type CertificateDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: "id";
    name: "name";
    email: "email";
    emailVerified: "emailVerified";
    image: "image";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
    mykadNumber: "mykadNumber";
    mykadVerifiedAt: "mykadVerifiedAt";
    profileType: "profileType";
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SessionScalarFieldEnum: {
    id: "id";
    expiresAt: "expiresAt";
    token: "token";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
    ipAddress: "ipAddress";
    userAgent: "userAgent";
    userId: "userId";
  };

  export type SessionScalarFieldEnum =
    (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];

  export const AccountScalarFieldEnum: {
    id: "id";
    accountId: "accountId";
    providerId: "providerId";
    userId: "userId";
    accessToken: "accessToken";
    refreshToken: "refreshToken";
    idToken: "idToken";
    accessTokenExpiresAt: "accessTokenExpiresAt";
    refreshTokenExpiresAt: "refreshTokenExpiresAt";
    scope: "scope";
    password: "password";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type AccountScalarFieldEnum =
    (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum];

  export const VerificationScalarFieldEnum: {
    id: "id";
    identifier: "identifier";
    value: "value";
    expiresAt: "expiresAt";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type VerificationScalarFieldEnum =
    (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum];

  export const UserProfileScalarFieldEnum: {
    id: "id";
    userId: "userId";
    fullName: "fullName";
    headline: "headline";
    bio: "bio";
    skills: "skills";
    consentTalentPool: "consentTalentPool";
    visibility: "visibility";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type UserProfileScalarFieldEnum =
    (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum];

  export const OrganizationScalarFieldEnum: {
    id: "id";
    name: "name";
    type: "type";
    ssmNumber: "ssmNumber";
    industry: "industry";
    createdById: "createdById";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type OrganizationScalarFieldEnum =
    (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];

  export const EventScalarFieldEnum: {
    id: "id";
    organizationId: "organizationId";
    title: "title";
    description: "description";
    location: "location";
    skills: "skills";
    startsAt: "startsAt";
    endsAt: "endsAt";
    createdById: "createdById";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type EventScalarFieldEnum =
    (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum];

  export const JobPostingScalarFieldEnum: {
    id: "id";
    organizationId: "organizationId";
    title: "title";
    description: "description";
    skills: "skills";
    status: "status";
    createdById: "createdById";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type JobPostingScalarFieldEnum =
    (typeof JobPostingScalarFieldEnum)[keyof typeof JobPostingScalarFieldEnum];

  export const ExperienceScalarFieldEnum: {
    id: "id";
    userId: "userId";
    organizationId: "organizationId";
    eventId: "eventId";
    type: "type";
    title: "title";
    startDate: "startDate";
    endDate: "endDate";
    isCurrent: "isCurrent";
    skills: "skills";
    verificationStatus: "verificationStatus";
    notes: "notes";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type ExperienceScalarFieldEnum =
    (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum];

  export const CheckInScalarFieldEnum: {
    id: "id";
    userId: "userId";
    organizationId: "organizationId";
    eventId: "eventId";
    type: "type";
    note: "note";
    verificationStatus: "verificationStatus";
    addedById: "addedById";
    createdAt: "createdAt";
  };

  export type CheckInScalarFieldEnum =
    (typeof CheckInScalarFieldEnum)[keyof typeof CheckInScalarFieldEnum];

  export const CertificateScalarFieldEnum: {
    id: "id";
    userId: "userId";
    organizationId: "organizationId";
    eventId: "eventId";
    type: "type";
    description: "description";
    skills: "skills";
    hash: "hash";
    title: "title";
    issueDate: "issueDate";
    url: "url";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type CertificateScalarFieldEnum =
    (typeof CertificateScalarFieldEnum)[keyof typeof CertificateScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: "first";
    last: "last";
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String[]"
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Boolean"
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime[]"
  >;

  /**
   * Reference to a field of type 'ProfileType'
   */
  export type EnumProfileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "ProfileType"
  >;

  /**
   * Reference to a field of type 'ProfileType[]'
   */
  export type ListEnumProfileTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "ProfileType[]">;

  /**
   * Reference to a field of type 'TalentVisibility'
   */
  export type EnumTalentVisibilityFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "TalentVisibility">;

  /**
   * Reference to a field of type 'TalentVisibility[]'
   */
  export type ListEnumTalentVisibilityFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "TalentVisibility[]">;

  /**
   * Reference to a field of type 'OrganizationType'
   */
  export type EnumOrganizationTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "OrganizationType">;

  /**
   * Reference to a field of type 'OrganizationType[]'
   */
  export type ListEnumOrganizationTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "OrganizationType[]">;

  /**
   * Reference to a field of type 'JobStatus'
   */
  export type EnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "JobStatus"
  >;

  /**
   * Reference to a field of type 'JobStatus[]'
   */
  export type ListEnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "JobStatus[]"
  >;

  /**
   * Reference to a field of type 'ExperienceType'
   */
  export type EnumExperienceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "ExperienceType"
  >;

  /**
   * Reference to a field of type 'ExperienceType[]'
   */
  export type ListEnumExperienceTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "ExperienceType[]">;

  /**
   * Reference to a field of type 'VerificationStatus'
   */
  export type EnumVerificationStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "VerificationStatus">;

  /**
   * Reference to a field of type 'VerificationStatus[]'
   */
  export type ListEnumVerificationStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "VerificationStatus[]">;

  /**
   * Reference to a field of type 'CheckInType'
   */
  export type EnumCheckInTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "CheckInType"
  >;

  /**
   * Reference to a field of type 'CheckInType[]'
   */
  export type ListEnumCheckInTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "CheckInType[]">;

  /**
   * Reference to a field of type 'CertificateType'
   */
  export type EnumCertificateTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "CertificateType">;

  /**
   * Reference to a field of type 'CertificateType[]'
   */
  export type ListEnumCertificateTypeFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "CertificateType[]">;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int[]"
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<"User"> | string;
    name?: StringFilter<"User"> | string;
    email?: StringFilter<"User"> | string;
    emailVerified?: BoolFilter<"User"> | boolean;
    image?: StringNullableFilter<"User"> | string | null;
    createdAt?: DateTimeFilter<"User"> | Date | string;
    updatedAt?: DateTimeFilter<"User"> | Date | string;
    mykadNumber?: StringNullableFilter<"User"> | string | null;
    mykadVerifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null;
    profileType?: EnumProfileTypeFilter<"User"> | $Enums.ProfileType;
    sessions?: SessionListRelationFilter;
    accounts?: AccountListRelationFilter;
    profile?: XOR<
      UserProfileNullableScalarRelationFilter,
      UserProfileWhereInput
    > | null;
    createdOrganizations?: OrganizationListRelationFilter;
    eventsCreated?: EventListRelationFilter;
    jobsCreated?: JobPostingListRelationFilter;
    experiences?: ExperienceListRelationFilter;
    checkIns?: CheckInListRelationFilter;
    checkInsAdded?: CheckInListRelationFilter;
    certificates?: CertificateListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    emailVerified?: SortOrder;
    image?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    mykadNumber?: SortOrderInput | SortOrder;
    mykadVerifiedAt?: SortOrderInput | SortOrder;
    profileType?: SortOrder;
    sessions?: SessionOrderByRelationAggregateInput;
    accounts?: AccountOrderByRelationAggregateInput;
    profile?: UserProfileOrderByWithRelationInput;
    createdOrganizations?: OrganizationOrderByRelationAggregateInput;
    eventsCreated?: EventOrderByRelationAggregateInput;
    jobsCreated?: JobPostingOrderByRelationAggregateInput;
    experiences?: ExperienceOrderByRelationAggregateInput;
    checkIns?: CheckInOrderByRelationAggregateInput;
    checkInsAdded?: CheckInOrderByRelationAggregateInput;
    certificates?: CertificateOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      mykadNumber?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      name?: StringFilter<"User"> | string;
      emailVerified?: BoolFilter<"User"> | boolean;
      image?: StringNullableFilter<"User"> | string | null;
      createdAt?: DateTimeFilter<"User"> | Date | string;
      updatedAt?: DateTimeFilter<"User"> | Date | string;
      mykadVerifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null;
      profileType?: EnumProfileTypeFilter<"User"> | $Enums.ProfileType;
      sessions?: SessionListRelationFilter;
      accounts?: AccountListRelationFilter;
      profile?: XOR<
        UserProfileNullableScalarRelationFilter,
        UserProfileWhereInput
      > | null;
      createdOrganizations?: OrganizationListRelationFilter;
      eventsCreated?: EventListRelationFilter;
      jobsCreated?: JobPostingListRelationFilter;
      experiences?: ExperienceListRelationFilter;
      checkIns?: CheckInListRelationFilter;
      checkInsAdded?: CheckInListRelationFilter;
      certificates?: CertificateListRelationFilter;
    },
    "id" | "mykadNumber" | "email"
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    emailVerified?: SortOrder;
    image?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    mykadNumber?: SortOrderInput | SortOrder;
    mykadVerifiedAt?: SortOrderInput | SortOrder;
    profileType?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"User"> | string;
    name?: StringWithAggregatesFilter<"User"> | string;
    email?: StringWithAggregatesFilter<"User"> | string;
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean;
    image?: StringNullableWithAggregatesFilter<"User"> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string;
    mykadNumber?: StringNullableWithAggregatesFilter<"User"> | string | null;
    mykadVerifiedAt?:
      | DateTimeNullableWithAggregatesFilter<"User">
      | Date
      | string
      | null;
    profileType?:
      | EnumProfileTypeWithAggregatesFilter<"User">
      | $Enums.ProfileType;
  };

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[];
    OR?: SessionWhereInput[];
    NOT?: SessionWhereInput | SessionWhereInput[];
    id?: StringFilter<"Session"> | string;
    expiresAt?: DateTimeFilter<"Session"> | Date | string;
    token?: StringFilter<"Session"> | string;
    createdAt?: DateTimeFilter<"Session"> | Date | string;
    updatedAt?: DateTimeFilter<"Session"> | Date | string;
    ipAddress?: StringNullableFilter<"Session"> | string | null;
    userAgent?: StringNullableFilter<"Session"> | string | null;
    userId?: StringFilter<"Session"> | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder;
    expiresAt?: SortOrder;
    token?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    ipAddress?: SortOrderInput | SortOrder;
    userAgent?: SortOrderInput | SortOrder;
    userId?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type SessionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      token?: string;
      AND?: SessionWhereInput | SessionWhereInput[];
      OR?: SessionWhereInput[];
      NOT?: SessionWhereInput | SessionWhereInput[];
      expiresAt?: DateTimeFilter<"Session"> | Date | string;
      createdAt?: DateTimeFilter<"Session"> | Date | string;
      updatedAt?: DateTimeFilter<"Session"> | Date | string;
      ipAddress?: StringNullableFilter<"Session"> | string | null;
      userAgent?: StringNullableFilter<"Session"> | string | null;
      userId?: StringFilter<"Session"> | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id" | "token"
  >;

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder;
    expiresAt?: SortOrder;
    token?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    ipAddress?: SortOrderInput | SortOrder;
    userAgent?: SortOrderInput | SortOrder;
    userId?: SortOrder;
    _count?: SessionCountOrderByAggregateInput;
    _max?: SessionMaxOrderByAggregateInput;
    _min?: SessionMinOrderByAggregateInput;
  };

  export type SessionScalarWhereWithAggregatesInput = {
    AND?:
      | SessionScalarWhereWithAggregatesInput
      | SessionScalarWhereWithAggregatesInput[];
    OR?: SessionScalarWhereWithAggregatesInput[];
    NOT?:
      | SessionScalarWhereWithAggregatesInput
      | SessionScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Session"> | string;
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string;
    token?: StringWithAggregatesFilter<"Session"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string;
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null;
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null;
    userId?: StringWithAggregatesFilter<"Session"> | string;
  };

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[];
    OR?: AccountWhereInput[];
    NOT?: AccountWhereInput | AccountWhereInput[];
    id?: StringFilter<"Account"> | string;
    accountId?: StringFilter<"Account"> | string;
    providerId?: StringFilter<"Account"> | string;
    userId?: StringFilter<"Account"> | string;
    accessToken?: StringNullableFilter<"Account"> | string | null;
    refreshToken?: StringNullableFilter<"Account"> | string | null;
    idToken?: StringNullableFilter<"Account"> | string | null;
    accessTokenExpiresAt?:
      | DateTimeNullableFilter<"Account">
      | Date
      | string
      | null;
    refreshTokenExpiresAt?:
      | DateTimeNullableFilter<"Account">
      | Date
      | string
      | null;
    scope?: StringNullableFilter<"Account"> | string | null;
    password?: StringNullableFilter<"Account"> | string | null;
    createdAt?: DateTimeFilter<"Account"> | Date | string;
    updatedAt?: DateTimeFilter<"Account"> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder;
    accountId?: SortOrder;
    providerId?: SortOrder;
    userId?: SortOrder;
    accessToken?: SortOrderInput | SortOrder;
    refreshToken?: SortOrderInput | SortOrder;
    idToken?: SortOrderInput | SortOrder;
    accessTokenExpiresAt?: SortOrderInput | SortOrder;
    refreshTokenExpiresAt?: SortOrderInput | SortOrder;
    scope?: SortOrderInput | SortOrder;
    password?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type AccountWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: AccountWhereInput | AccountWhereInput[];
      OR?: AccountWhereInput[];
      NOT?: AccountWhereInput | AccountWhereInput[];
      accountId?: StringFilter<"Account"> | string;
      providerId?: StringFilter<"Account"> | string;
      userId?: StringFilter<"Account"> | string;
      accessToken?: StringNullableFilter<"Account"> | string | null;
      refreshToken?: StringNullableFilter<"Account"> | string | null;
      idToken?: StringNullableFilter<"Account"> | string | null;
      accessTokenExpiresAt?:
        | DateTimeNullableFilter<"Account">
        | Date
        | string
        | null;
      refreshTokenExpiresAt?:
        | DateTimeNullableFilter<"Account">
        | Date
        | string
        | null;
      scope?: StringNullableFilter<"Account"> | string | null;
      password?: StringNullableFilter<"Account"> | string | null;
      createdAt?: DateTimeFilter<"Account"> | Date | string;
      updatedAt?: DateTimeFilter<"Account"> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id"
  >;

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder;
    accountId?: SortOrder;
    providerId?: SortOrder;
    userId?: SortOrder;
    accessToken?: SortOrderInput | SortOrder;
    refreshToken?: SortOrderInput | SortOrder;
    idToken?: SortOrderInput | SortOrder;
    accessTokenExpiresAt?: SortOrderInput | SortOrder;
    refreshTokenExpiresAt?: SortOrderInput | SortOrder;
    scope?: SortOrderInput | SortOrder;
    password?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: AccountCountOrderByAggregateInput;
    _max?: AccountMaxOrderByAggregateInput;
    _min?: AccountMinOrderByAggregateInput;
  };

  export type AccountScalarWhereWithAggregatesInput = {
    AND?:
      | AccountScalarWhereWithAggregatesInput
      | AccountScalarWhereWithAggregatesInput[];
    OR?: AccountScalarWhereWithAggregatesInput[];
    NOT?:
      | AccountScalarWhereWithAggregatesInput
      | AccountScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Account"> | string;
    accountId?: StringWithAggregatesFilter<"Account"> | string;
    providerId?: StringWithAggregatesFilter<"Account"> | string;
    userId?: StringWithAggregatesFilter<"Account"> | string;
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null;
    refreshToken?:
      | StringNullableWithAggregatesFilter<"Account">
      | string
      | null;
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null;
    accessTokenExpiresAt?:
      | DateTimeNullableWithAggregatesFilter<"Account">
      | Date
      | string
      | null;
    refreshTokenExpiresAt?:
      | DateTimeNullableWithAggregatesFilter<"Account">
      | Date
      | string
      | null;
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null;
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string;
  };

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[];
    OR?: VerificationWhereInput[];
    NOT?: VerificationWhereInput | VerificationWhereInput[];
    id?: StringFilter<"Verification"> | string;
    identifier?: StringFilter<"Verification"> | string;
    value?: StringFilter<"Verification"> | string;
    expiresAt?: DateTimeFilter<"Verification"> | Date | string;
    createdAt?: DateTimeFilter<"Verification"> | Date | string;
    updatedAt?: DateTimeFilter<"Verification"> | Date | string;
  };

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder;
    identifier?: SortOrder;
    value?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type VerificationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: VerificationWhereInput | VerificationWhereInput[];
      OR?: VerificationWhereInput[];
      NOT?: VerificationWhereInput | VerificationWhereInput[];
      identifier?: StringFilter<"Verification"> | string;
      value?: StringFilter<"Verification"> | string;
      expiresAt?: DateTimeFilter<"Verification"> | Date | string;
      createdAt?: DateTimeFilter<"Verification"> | Date | string;
      updatedAt?: DateTimeFilter<"Verification"> | Date | string;
    },
    "id"
  >;

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder;
    identifier?: SortOrder;
    value?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: VerificationCountOrderByAggregateInput;
    _max?: VerificationMaxOrderByAggregateInput;
    _min?: VerificationMinOrderByAggregateInput;
  };

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?:
      | VerificationScalarWhereWithAggregatesInput
      | VerificationScalarWhereWithAggregatesInput[];
    OR?: VerificationScalarWhereWithAggregatesInput[];
    NOT?:
      | VerificationScalarWhereWithAggregatesInput
      | VerificationScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Verification"> | string;
    identifier?: StringWithAggregatesFilter<"Verification"> | string;
    value?: StringWithAggregatesFilter<"Verification"> | string;
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string;
    createdAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string;
  };

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[];
    OR?: UserProfileWhereInput[];
    NOT?: UserProfileWhereInput | UserProfileWhereInput[];
    id?: StringFilter<"UserProfile"> | string;
    userId?: StringFilter<"UserProfile"> | string;
    fullName?: StringNullableFilter<"UserProfile"> | string | null;
    headline?: StringNullableFilter<"UserProfile"> | string | null;
    bio?: StringNullableFilter<"UserProfile"> | string | null;
    skills?: StringNullableListFilter<"UserProfile">;
    consentTalentPool?: BoolFilter<"UserProfile"> | boolean;
    visibility?:
      | EnumTalentVisibilityFilter<"UserProfile">
      | $Enums.TalentVisibility;
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string;
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    fullName?: SortOrderInput | SortOrder;
    headline?: SortOrderInput | SortOrder;
    bio?: SortOrderInput | SortOrder;
    skills?: SortOrder;
    consentTalentPool?: SortOrder;
    visibility?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userId?: string;
      AND?: UserProfileWhereInput | UserProfileWhereInput[];
      OR?: UserProfileWhereInput[];
      NOT?: UserProfileWhereInput | UserProfileWhereInput[];
      fullName?: StringNullableFilter<"UserProfile"> | string | null;
      headline?: StringNullableFilter<"UserProfile"> | string | null;
      bio?: StringNullableFilter<"UserProfile"> | string | null;
      skills?: StringNullableListFilter<"UserProfile">;
      consentTalentPool?: BoolFilter<"UserProfile"> | boolean;
      visibility?:
        | EnumTalentVisibilityFilter<"UserProfile">
        | $Enums.TalentVisibility;
      createdAt?: DateTimeFilter<"UserProfile"> | Date | string;
      updatedAt?: DateTimeFilter<"UserProfile"> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id" | "userId"
  >;

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    fullName?: SortOrderInput | SortOrder;
    headline?: SortOrderInput | SortOrder;
    bio?: SortOrderInput | SortOrder;
    skills?: SortOrder;
    consentTalentPool?: SortOrder;
    visibility?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserProfileCountOrderByAggregateInput;
    _max?: UserProfileMaxOrderByAggregateInput;
    _min?: UserProfileMinOrderByAggregateInput;
  };

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?:
      | UserProfileScalarWhereWithAggregatesInput
      | UserProfileScalarWhereWithAggregatesInput[];
    OR?: UserProfileScalarWhereWithAggregatesInput[];
    NOT?:
      | UserProfileScalarWhereWithAggregatesInput
      | UserProfileScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"UserProfile"> | string;
    userId?: StringWithAggregatesFilter<"UserProfile"> | string;
    fullName?:
      | StringNullableWithAggregatesFilter<"UserProfile">
      | string
      | null;
    headline?:
      | StringNullableWithAggregatesFilter<"UserProfile">
      | string
      | null;
    bio?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null;
    skills?: StringNullableListFilter<"UserProfile">;
    consentTalentPool?: BoolWithAggregatesFilter<"UserProfile"> | boolean;
    visibility?:
      | EnumTalentVisibilityWithAggregatesFilter<"UserProfile">
      | $Enums.TalentVisibility;
    createdAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string;
  };

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[];
    OR?: OrganizationWhereInput[];
    NOT?: OrganizationWhereInput | OrganizationWhereInput[];
    id?: StringFilter<"Organization"> | string;
    name?: StringFilter<"Organization"> | string;
    type?: EnumOrganizationTypeFilter<"Organization"> | $Enums.OrganizationType;
    ssmNumber?: StringNullableFilter<"Organization"> | string | null;
    industry?: StringNullableFilter<"Organization"> | string | null;
    createdById?: StringFilter<"Organization"> | string;
    createdAt?: DateTimeFilter<"Organization"> | Date | string;
    updatedAt?: DateTimeFilter<"Organization"> | Date | string;
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>;
    events?: EventListRelationFilter;
    jobs?: JobPostingListRelationFilter;
    experiences?: ExperienceListRelationFilter;
    checkIns?: CheckInListRelationFilter;
    certificates?: CertificateListRelationFilter;
  };

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    ssmNumber?: SortOrderInput | SortOrder;
    industry?: SortOrderInput | SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    createdBy?: UserOrderByWithRelationInput;
    events?: EventOrderByRelationAggregateInput;
    jobs?: JobPostingOrderByRelationAggregateInput;
    experiences?: ExperienceOrderByRelationAggregateInput;
    checkIns?: CheckInOrderByRelationAggregateInput;
    certificates?: CertificateOrderByRelationAggregateInput;
  };

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: OrganizationWhereInput | OrganizationWhereInput[];
      OR?: OrganizationWhereInput[];
      NOT?: OrganizationWhereInput | OrganizationWhereInput[];
      name?: StringFilter<"Organization"> | string;
      type?:
        | EnumOrganizationTypeFilter<"Organization">
        | $Enums.OrganizationType;
      ssmNumber?: StringNullableFilter<"Organization"> | string | null;
      industry?: StringNullableFilter<"Organization"> | string | null;
      createdById?: StringFilter<"Organization"> | string;
      createdAt?: DateTimeFilter<"Organization"> | Date | string;
      updatedAt?: DateTimeFilter<"Organization"> | Date | string;
      createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>;
      events?: EventListRelationFilter;
      jobs?: JobPostingListRelationFilter;
      experiences?: ExperienceListRelationFilter;
      checkIns?: CheckInListRelationFilter;
      certificates?: CertificateListRelationFilter;
    },
    "id"
  >;

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    ssmNumber?: SortOrderInput | SortOrder;
    industry?: SortOrderInput | SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: OrganizationCountOrderByAggregateInput;
    _max?: OrganizationMaxOrderByAggregateInput;
    _min?: OrganizationMinOrderByAggregateInput;
  };

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?:
      | OrganizationScalarWhereWithAggregatesInput
      | OrganizationScalarWhereWithAggregatesInput[];
    OR?: OrganizationScalarWhereWithAggregatesInput[];
    NOT?:
      | OrganizationScalarWhereWithAggregatesInput
      | OrganizationScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Organization"> | string;
    name?: StringWithAggregatesFilter<"Organization"> | string;
    type?:
      | EnumOrganizationTypeWithAggregatesFilter<"Organization">
      | $Enums.OrganizationType;
    ssmNumber?:
      | StringNullableWithAggregatesFilter<"Organization">
      | string
      | null;
    industry?:
      | StringNullableWithAggregatesFilter<"Organization">
      | string
      | null;
    createdById?: StringWithAggregatesFilter<"Organization"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string;
  };

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[];
    OR?: EventWhereInput[];
    NOT?: EventWhereInput | EventWhereInput[];
    id?: StringFilter<"Event"> | string;
    organizationId?: StringFilter<"Event"> | string;
    title?: StringFilter<"Event"> | string;
    description?: StringNullableFilter<"Event"> | string | null;
    location?: StringNullableFilter<"Event"> | string | null;
    skills?: StringNullableListFilter<"Event">;
    startsAt?: DateTimeFilter<"Event"> | Date | string;
    endsAt?: DateTimeNullableFilter<"Event"> | Date | string | null;
    createdById?: StringFilter<"Event"> | string;
    createdAt?: DateTimeFilter<"Event"> | Date | string;
    updatedAt?: DateTimeFilter<"Event"> | Date | string;
    organization?: XOR<
      OrganizationScalarRelationFilter,
      OrganizationWhereInput
    >;
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>;
    checkIns?: CheckInListRelationFilter;
    experiences?: ExperienceListRelationFilter;
    certificates?: CertificateListRelationFilter;
  };

  export type EventOrderByWithRelationInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    skills?: SortOrder;
    startsAt?: SortOrder;
    endsAt?: SortOrderInput | SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    organization?: OrganizationOrderByWithRelationInput;
    createdBy?: UserOrderByWithRelationInput;
    checkIns?: CheckInOrderByRelationAggregateInput;
    experiences?: ExperienceOrderByRelationAggregateInput;
    certificates?: CertificateOrderByRelationAggregateInput;
  };

  export type EventWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: EventWhereInput | EventWhereInput[];
      OR?: EventWhereInput[];
      NOT?: EventWhereInput | EventWhereInput[];
      organizationId?: StringFilter<"Event"> | string;
      title?: StringFilter<"Event"> | string;
      description?: StringNullableFilter<"Event"> | string | null;
      location?: StringNullableFilter<"Event"> | string | null;
      skills?: StringNullableListFilter<"Event">;
      startsAt?: DateTimeFilter<"Event"> | Date | string;
      endsAt?: DateTimeNullableFilter<"Event"> | Date | string | null;
      createdById?: StringFilter<"Event"> | string;
      createdAt?: DateTimeFilter<"Event"> | Date | string;
      updatedAt?: DateTimeFilter<"Event"> | Date | string;
      organization?: XOR<
        OrganizationScalarRelationFilter,
        OrganizationWhereInput
      >;
      createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>;
      checkIns?: CheckInListRelationFilter;
      experiences?: ExperienceListRelationFilter;
      certificates?: CertificateListRelationFilter;
    },
    "id"
  >;

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    skills?: SortOrder;
    startsAt?: SortOrder;
    endsAt?: SortOrderInput | SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: EventCountOrderByAggregateInput;
    _max?: EventMaxOrderByAggregateInput;
    _min?: EventMinOrderByAggregateInput;
  };

  export type EventScalarWhereWithAggregatesInput = {
    AND?:
      | EventScalarWhereWithAggregatesInput
      | EventScalarWhereWithAggregatesInput[];
    OR?: EventScalarWhereWithAggregatesInput[];
    NOT?:
      | EventScalarWhereWithAggregatesInput
      | EventScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Event"> | string;
    organizationId?: StringWithAggregatesFilter<"Event"> | string;
    title?: StringWithAggregatesFilter<"Event"> | string;
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null;
    location?: StringNullableWithAggregatesFilter<"Event"> | string | null;
    skills?: StringNullableListFilter<"Event">;
    startsAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string;
    endsAt?:
      | DateTimeNullableWithAggregatesFilter<"Event">
      | Date
      | string
      | null;
    createdById?: StringWithAggregatesFilter<"Event"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string;
  };

  export type JobPostingWhereInput = {
    AND?: JobPostingWhereInput | JobPostingWhereInput[];
    OR?: JobPostingWhereInput[];
    NOT?: JobPostingWhereInput | JobPostingWhereInput[];
    id?: StringFilter<"JobPosting"> | string;
    organizationId?: StringFilter<"JobPosting"> | string;
    title?: StringFilter<"JobPosting"> | string;
    description?: StringNullableFilter<"JobPosting"> | string | null;
    skills?: StringNullableListFilter<"JobPosting">;
    status?: EnumJobStatusFilter<"JobPosting"> | $Enums.JobStatus;
    createdById?: StringFilter<"JobPosting"> | string;
    createdAt?: DateTimeFilter<"JobPosting"> | Date | string;
    updatedAt?: DateTimeFilter<"JobPosting"> | Date | string;
    organization?: XOR<
      OrganizationScalarRelationFilter,
      OrganizationWhereInput
    >;
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type JobPostingOrderByWithRelationInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    skills?: SortOrder;
    status?: SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    organization?: OrganizationOrderByWithRelationInput;
    createdBy?: UserOrderByWithRelationInput;
  };

  export type JobPostingWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: JobPostingWhereInput | JobPostingWhereInput[];
      OR?: JobPostingWhereInput[];
      NOT?: JobPostingWhereInput | JobPostingWhereInput[];
      organizationId?: StringFilter<"JobPosting"> | string;
      title?: StringFilter<"JobPosting"> | string;
      description?: StringNullableFilter<"JobPosting"> | string | null;
      skills?: StringNullableListFilter<"JobPosting">;
      status?: EnumJobStatusFilter<"JobPosting"> | $Enums.JobStatus;
      createdById?: StringFilter<"JobPosting"> | string;
      createdAt?: DateTimeFilter<"JobPosting"> | Date | string;
      updatedAt?: DateTimeFilter<"JobPosting"> | Date | string;
      organization?: XOR<
        OrganizationScalarRelationFilter,
        OrganizationWhereInput
      >;
      createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id"
  >;

  export type JobPostingOrderByWithAggregationInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    skills?: SortOrder;
    status?: SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: JobPostingCountOrderByAggregateInput;
    _max?: JobPostingMaxOrderByAggregateInput;
    _min?: JobPostingMinOrderByAggregateInput;
  };

  export type JobPostingScalarWhereWithAggregatesInput = {
    AND?:
      | JobPostingScalarWhereWithAggregatesInput
      | JobPostingScalarWhereWithAggregatesInput[];
    OR?: JobPostingScalarWhereWithAggregatesInput[];
    NOT?:
      | JobPostingScalarWhereWithAggregatesInput
      | JobPostingScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"JobPosting"> | string;
    organizationId?: StringWithAggregatesFilter<"JobPosting"> | string;
    title?: StringWithAggregatesFilter<"JobPosting"> | string;
    description?:
      | StringNullableWithAggregatesFilter<"JobPosting">
      | string
      | null;
    skills?: StringNullableListFilter<"JobPosting">;
    status?: EnumJobStatusWithAggregatesFilter<"JobPosting"> | $Enums.JobStatus;
    createdById?: StringWithAggregatesFilter<"JobPosting"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"JobPosting"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"JobPosting"> | Date | string;
  };

  export type ExperienceWhereInput = {
    AND?: ExperienceWhereInput | ExperienceWhereInput[];
    OR?: ExperienceWhereInput[];
    NOT?: ExperienceWhereInput | ExperienceWhereInput[];
    id?: StringFilter<"Experience"> | string;
    userId?: StringFilter<"Experience"> | string;
    organizationId?: StringNullableFilter<"Experience"> | string | null;
    eventId?: StringNullableFilter<"Experience"> | string | null;
    type?: EnumExperienceTypeFilter<"Experience"> | $Enums.ExperienceType;
    title?: StringFilter<"Experience"> | string;
    startDate?: DateTimeNullableFilter<"Experience"> | Date | string | null;
    endDate?: DateTimeNullableFilter<"Experience"> | Date | string | null;
    isCurrent?: BoolFilter<"Experience"> | boolean;
    skills?: StringNullableListFilter<"Experience">;
    verificationStatus?:
      | EnumVerificationStatusFilter<"Experience">
      | $Enums.VerificationStatus;
    notes?: StringNullableFilter<"Experience"> | string | null;
    createdAt?: DateTimeFilter<"Experience"> | Date | string;
    updatedAt?: DateTimeFilter<"Experience"> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    organization?: XOR<
      OrganizationNullableScalarRelationFilter,
      OrganizationWhereInput
    > | null;
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null;
  };

  export type ExperienceOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    organizationId?: SortOrderInput | SortOrder;
    eventId?: SortOrderInput | SortOrder;
    type?: SortOrder;
    title?: SortOrder;
    startDate?: SortOrderInput | SortOrder;
    endDate?: SortOrderInput | SortOrder;
    isCurrent?: SortOrder;
    skills?: SortOrder;
    verificationStatus?: SortOrder;
    notes?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
    organization?: OrganizationOrderByWithRelationInput;
    event?: EventOrderByWithRelationInput;
  };

  export type ExperienceWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userId_eventId_type?: ExperienceUserIdEventIdTypeCompoundUniqueInput;
      userId_organizationId_type?: ExperienceUserIdOrganizationIdTypeCompoundUniqueInput;
      AND?: ExperienceWhereInput | ExperienceWhereInput[];
      OR?: ExperienceWhereInput[];
      NOT?: ExperienceWhereInput | ExperienceWhereInput[];
      userId?: StringFilter<"Experience"> | string;
      organizationId?: StringNullableFilter<"Experience"> | string | null;
      eventId?: StringNullableFilter<"Experience"> | string | null;
      type?: EnumExperienceTypeFilter<"Experience"> | $Enums.ExperienceType;
      title?: StringFilter<"Experience"> | string;
      startDate?: DateTimeNullableFilter<"Experience"> | Date | string | null;
      endDate?: DateTimeNullableFilter<"Experience"> | Date | string | null;
      isCurrent?: BoolFilter<"Experience"> | boolean;
      skills?: StringNullableListFilter<"Experience">;
      verificationStatus?:
        | EnumVerificationStatusFilter<"Experience">
        | $Enums.VerificationStatus;
      notes?: StringNullableFilter<"Experience"> | string | null;
      createdAt?: DateTimeFilter<"Experience"> | Date | string;
      updatedAt?: DateTimeFilter<"Experience"> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      organization?: XOR<
        OrganizationNullableScalarRelationFilter,
        OrganizationWhereInput
      > | null;
      event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null;
    },
    "id" | "userId_eventId_type" | "userId_organizationId_type"
  >;

  export type ExperienceOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    organizationId?: SortOrderInput | SortOrder;
    eventId?: SortOrderInput | SortOrder;
    type?: SortOrder;
    title?: SortOrder;
    startDate?: SortOrderInput | SortOrder;
    endDate?: SortOrderInput | SortOrder;
    isCurrent?: SortOrder;
    skills?: SortOrder;
    verificationStatus?: SortOrder;
    notes?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: ExperienceCountOrderByAggregateInput;
    _max?: ExperienceMaxOrderByAggregateInput;
    _min?: ExperienceMinOrderByAggregateInput;
  };

  export type ExperienceScalarWhereWithAggregatesInput = {
    AND?:
      | ExperienceScalarWhereWithAggregatesInput
      | ExperienceScalarWhereWithAggregatesInput[];
    OR?: ExperienceScalarWhereWithAggregatesInput[];
    NOT?:
      | ExperienceScalarWhereWithAggregatesInput
      | ExperienceScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Experience"> | string;
    userId?: StringWithAggregatesFilter<"Experience"> | string;
    organizationId?:
      | StringNullableWithAggregatesFilter<"Experience">
      | string
      | null;
    eventId?: StringNullableWithAggregatesFilter<"Experience"> | string | null;
    type?:
      | EnumExperienceTypeWithAggregatesFilter<"Experience">
      | $Enums.ExperienceType;
    title?: StringWithAggregatesFilter<"Experience"> | string;
    startDate?:
      | DateTimeNullableWithAggregatesFilter<"Experience">
      | Date
      | string
      | null;
    endDate?:
      | DateTimeNullableWithAggregatesFilter<"Experience">
      | Date
      | string
      | null;
    isCurrent?: BoolWithAggregatesFilter<"Experience"> | boolean;
    skills?: StringNullableListFilter<"Experience">;
    verificationStatus?:
      | EnumVerificationStatusWithAggregatesFilter<"Experience">
      | $Enums.VerificationStatus;
    notes?: StringNullableWithAggregatesFilter<"Experience"> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<"Experience"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Experience"> | Date | string;
  };

  export type CheckInWhereInput = {
    AND?: CheckInWhereInput | CheckInWhereInput[];
    OR?: CheckInWhereInput[];
    NOT?: CheckInWhereInput | CheckInWhereInput[];
    id?: StringFilter<"CheckIn"> | string;
    userId?: StringFilter<"CheckIn"> | string;
    organizationId?: StringFilter<"CheckIn"> | string;
    eventId?: StringNullableFilter<"CheckIn"> | string | null;
    type?: EnumCheckInTypeFilter<"CheckIn"> | $Enums.CheckInType;
    note?: StringNullableFilter<"CheckIn"> | string | null;
    verificationStatus?:
      | EnumVerificationStatusFilter<"CheckIn">
      | $Enums.VerificationStatus;
    addedById?: StringNullableFilter<"CheckIn"> | string | null;
    createdAt?: DateTimeFilter<"CheckIn"> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    organization?: XOR<
      OrganizationScalarRelationFilter,
      OrganizationWhereInput
    >;
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null;
    addedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
  };

  export type CheckInOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    organizationId?: SortOrder;
    eventId?: SortOrderInput | SortOrder;
    type?: SortOrder;
    note?: SortOrderInput | SortOrder;
    verificationStatus?: SortOrder;
    addedById?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
    organization?: OrganizationOrderByWithRelationInput;
    event?: EventOrderByWithRelationInput;
    addedBy?: UserOrderByWithRelationInput;
  };

  export type CheckInWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userId_eventId_type?: CheckInUserIdEventIdTypeCompoundUniqueInput;
      userId_organizationId_type?: CheckInUserIdOrganizationIdTypeCompoundUniqueInput;
      AND?: CheckInWhereInput | CheckInWhereInput[];
      OR?: CheckInWhereInput[];
      NOT?: CheckInWhereInput | CheckInWhereInput[];
      userId?: StringFilter<"CheckIn"> | string;
      organizationId?: StringFilter<"CheckIn"> | string;
      eventId?: StringNullableFilter<"CheckIn"> | string | null;
      type?: EnumCheckInTypeFilter<"CheckIn"> | $Enums.CheckInType;
      note?: StringNullableFilter<"CheckIn"> | string | null;
      verificationStatus?:
        | EnumVerificationStatusFilter<"CheckIn">
        | $Enums.VerificationStatus;
      addedById?: StringNullableFilter<"CheckIn"> | string | null;
      createdAt?: DateTimeFilter<"CheckIn"> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      organization?: XOR<
        OrganizationScalarRelationFilter,
        OrganizationWhereInput
      >;
      event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null;
      addedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
    },
    "id" | "userId_eventId_type" | "userId_organizationId_type"
  >;

  export type CheckInOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    organizationId?: SortOrder;
    eventId?: SortOrderInput | SortOrder;
    type?: SortOrder;
    note?: SortOrderInput | SortOrder;
    verificationStatus?: SortOrder;
    addedById?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    _count?: CheckInCountOrderByAggregateInput;
    _max?: CheckInMaxOrderByAggregateInput;
    _min?: CheckInMinOrderByAggregateInput;
  };

  export type CheckInScalarWhereWithAggregatesInput = {
    AND?:
      | CheckInScalarWhereWithAggregatesInput
      | CheckInScalarWhereWithAggregatesInput[];
    OR?: CheckInScalarWhereWithAggregatesInput[];
    NOT?:
      | CheckInScalarWhereWithAggregatesInput
      | CheckInScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"CheckIn"> | string;
    userId?: StringWithAggregatesFilter<"CheckIn"> | string;
    organizationId?: StringWithAggregatesFilter<"CheckIn"> | string;
    eventId?: StringNullableWithAggregatesFilter<"CheckIn"> | string | null;
    type?: EnumCheckInTypeWithAggregatesFilter<"CheckIn"> | $Enums.CheckInType;
    note?: StringNullableWithAggregatesFilter<"CheckIn"> | string | null;
    verificationStatus?:
      | EnumVerificationStatusWithAggregatesFilter<"CheckIn">
      | $Enums.VerificationStatus;
    addedById?: StringNullableWithAggregatesFilter<"CheckIn"> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<"CheckIn"> | Date | string;
  };

  export type CertificateWhereInput = {
    AND?: CertificateWhereInput | CertificateWhereInput[];
    OR?: CertificateWhereInput[];
    NOT?: CertificateWhereInput | CertificateWhereInput[];
    id?: StringFilter<"Certificate"> | string;
    userId?: StringFilter<"Certificate"> | string;
    organizationId?: StringNullableFilter<"Certificate"> | string | null;
    eventId?: StringNullableFilter<"Certificate"> | string | null;
    type?: EnumCertificateTypeFilter<"Certificate"> | $Enums.CertificateType;
    description?: StringNullableFilter<"Certificate"> | string | null;
    skills?: StringNullableListFilter<"Certificate">;
    hash?: StringNullableFilter<"Certificate"> | string | null;
    title?: StringFilter<"Certificate"> | string;
    issueDate?: DateTimeFilter<"Certificate"> | Date | string;
    url?: StringNullableFilter<"Certificate"> | string | null;
    createdAt?: DateTimeFilter<"Certificate"> | Date | string;
    updatedAt?: DateTimeFilter<"Certificate"> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    organization?: XOR<
      OrganizationNullableScalarRelationFilter,
      OrganizationWhereInput
    > | null;
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null;
  };

  export type CertificateOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    organizationId?: SortOrderInput | SortOrder;
    eventId?: SortOrderInput | SortOrder;
    type?: SortOrder;
    description?: SortOrderInput | SortOrder;
    skills?: SortOrder;
    hash?: SortOrderInput | SortOrder;
    title?: SortOrder;
    issueDate?: SortOrder;
    url?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
    organization?: OrganizationOrderByWithRelationInput;
    event?: EventOrderByWithRelationInput;
  };

  export type CertificateWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      hash?: string;
      AND?: CertificateWhereInput | CertificateWhereInput[];
      OR?: CertificateWhereInput[];
      NOT?: CertificateWhereInput | CertificateWhereInput[];
      userId?: StringFilter<"Certificate"> | string;
      organizationId?: StringNullableFilter<"Certificate"> | string | null;
      eventId?: StringNullableFilter<"Certificate"> | string | null;
      type?: EnumCertificateTypeFilter<"Certificate"> | $Enums.CertificateType;
      description?: StringNullableFilter<"Certificate"> | string | null;
      skills?: StringNullableListFilter<"Certificate">;
      title?: StringFilter<"Certificate"> | string;
      issueDate?: DateTimeFilter<"Certificate"> | Date | string;
      url?: StringNullableFilter<"Certificate"> | string | null;
      createdAt?: DateTimeFilter<"Certificate"> | Date | string;
      updatedAt?: DateTimeFilter<"Certificate"> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      organization?: XOR<
        OrganizationNullableScalarRelationFilter,
        OrganizationWhereInput
      > | null;
      event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null;
    },
    "id" | "hash"
  >;

  export type CertificateOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    organizationId?: SortOrderInput | SortOrder;
    eventId?: SortOrderInput | SortOrder;
    type?: SortOrder;
    description?: SortOrderInput | SortOrder;
    skills?: SortOrder;
    hash?: SortOrderInput | SortOrder;
    title?: SortOrder;
    issueDate?: SortOrder;
    url?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: CertificateCountOrderByAggregateInput;
    _max?: CertificateMaxOrderByAggregateInput;
    _min?: CertificateMinOrderByAggregateInput;
  };

  export type CertificateScalarWhereWithAggregatesInput = {
    AND?:
      | CertificateScalarWhereWithAggregatesInput
      | CertificateScalarWhereWithAggregatesInput[];
    OR?: CertificateScalarWhereWithAggregatesInput[];
    NOT?:
      | CertificateScalarWhereWithAggregatesInput
      | CertificateScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Certificate"> | string;
    userId?: StringWithAggregatesFilter<"Certificate"> | string;
    organizationId?:
      | StringNullableWithAggregatesFilter<"Certificate">
      | string
      | null;
    eventId?: StringNullableWithAggregatesFilter<"Certificate"> | string | null;
    type?:
      | EnumCertificateTypeWithAggregatesFilter<"Certificate">
      | $Enums.CertificateType;
    description?:
      | StringNullableWithAggregatesFilter<"Certificate">
      | string
      | null;
    skills?: StringNullableListFilter<"Certificate">;
    hash?: StringNullableWithAggregatesFilter<"Certificate"> | string | null;
    title?: StringWithAggregatesFilter<"Certificate"> | string;
    issueDate?: DateTimeWithAggregatesFilter<"Certificate"> | Date | string;
    url?: StringNullableWithAggregatesFilter<"Certificate"> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<"Certificate"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Certificate"> | Date | string;
  };

  export type UserCreateInput = {
    id: string;
    name: string;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mykadNumber?: string | null;
    mykadVerifiedAt?: Date | string | null;
    profileType?: $Enums.ProfileType;
    sessions?: SessionCreateNestedManyWithoutUserInput;
    accounts?: AccountCreateNestedManyWithoutUserInput;
    profile?: UserProfileCreateNestedOneWithoutUserInput;
    createdOrganizations?: OrganizationCreateNestedManyWithoutCreatedByInput;
    eventsCreated?: EventCreateNestedManyWithoutCreatedByInput;
    jobsCreated?: JobPostingCreateNestedManyWithoutCreatedByInput;
    experiences?: ExperienceCreateNestedManyWithoutUserInput;
    checkIns?: CheckInCreateNestedManyWithoutUserInput;
    checkInsAdded?: CheckInCreateNestedManyWithoutAddedByInput;
    certificates?: CertificateCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id: string;
    name: string;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mykadNumber?: string | null;
    mykadVerifiedAt?: Date | string | null;
    profileType?: $Enums.ProfileType;
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput;
    createdOrganizations?: OrganizationUncheckedCreateNestedManyWithoutCreatedByInput;
    eventsCreated?: EventUncheckedCreateNestedManyWithoutCreatedByInput;
    jobsCreated?: JobPostingUncheckedCreateNestedManyWithoutCreatedByInput;
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput;
    checkIns?: CheckInUncheckedCreateNestedManyWithoutUserInput;
    checkInsAdded?: CheckInUncheckedCreateNestedManyWithoutAddedByInput;
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mykadNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    mykadVerifiedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profileType?:
      | EnumProfileTypeFieldUpdateOperationsInput
      | $Enums.ProfileType;
    sessions?: SessionUpdateManyWithoutUserNestedInput;
    accounts?: AccountUpdateManyWithoutUserNestedInput;
    profile?: UserProfileUpdateOneWithoutUserNestedInput;
    createdOrganizations?: OrganizationUpdateManyWithoutCreatedByNestedInput;
    eventsCreated?: EventUpdateManyWithoutCreatedByNestedInput;
    jobsCreated?: JobPostingUpdateManyWithoutCreatedByNestedInput;
    experiences?: ExperienceUpdateManyWithoutUserNestedInput;
    checkIns?: CheckInUpdateManyWithoutUserNestedInput;
    checkInsAdded?: CheckInUpdateManyWithoutAddedByNestedInput;
    certificates?: CertificateUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mykadNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    mykadVerifiedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profileType?:
      | EnumProfileTypeFieldUpdateOperationsInput
      | $Enums.ProfileType;
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput;
    createdOrganizations?: OrganizationUncheckedUpdateManyWithoutCreatedByNestedInput;
    eventsCreated?: EventUncheckedUpdateManyWithoutCreatedByNestedInput;
    jobsCreated?: JobPostingUncheckedUpdateManyWithoutCreatedByNestedInput;
    experiences?: ExperienceUncheckedUpdateManyWithoutUserNestedInput;
    checkIns?: CheckInUncheckedUpdateManyWithoutUserNestedInput;
    checkInsAdded?: CheckInUncheckedUpdateManyWithoutAddedByNestedInput;
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id: string;
    name: string;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mykadNumber?: string | null;
    mykadVerifiedAt?: Date | string | null;
    profileType?: $Enums.ProfileType;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mykadNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    mykadVerifiedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profileType?:
      | EnumProfileTypeFieldUpdateOperationsInput
      | $Enums.ProfileType;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mykadNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    mykadVerifiedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profileType?:
      | EnumProfileTypeFieldUpdateOperationsInput
      | $Enums.ProfileType;
  };

  export type SessionCreateInput = {
    id: string;
    expiresAt: Date | string;
    token: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ipAddress?: string | null;
    userAgent?: string | null;
    user: UserCreateNestedOneWithoutSessionsInput;
  };

  export type SessionUncheckedCreateInput = {
    id: string;
    expiresAt: Date | string;
    token: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ipAddress?: string | null;
    userAgent?: string | null;
    userId: string;
  };

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    token?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null;
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput;
  };

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    token?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: StringFieldUpdateOperationsInput | string;
  };

  export type SessionCreateManyInput = {
    id: string;
    expiresAt: Date | string;
    token: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ipAddress?: string | null;
    userAgent?: string | null;
    userId: string;
  };

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    token?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    token?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: StringFieldUpdateOperationsInput | string;
  };

  export type AccountCreateInput = {
    id: string;
    accountId: string;
    providerId: string;
    accessToken?: string | null;
    refreshToken?: string | null;
    idToken?: string | null;
    accessTokenExpiresAt?: Date | string | null;
    refreshTokenExpiresAt?: Date | string | null;
    scope?: string | null;
    password?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutAccountsInput;
  };

  export type AccountUncheckedCreateInput = {
    id: string;
    accountId: string;
    providerId: string;
    userId: string;
    accessToken?: string | null;
    refreshToken?: string | null;
    idToken?: string | null;
    accessTokenExpiresAt?: Date | string | null;
    refreshTokenExpiresAt?: Date | string | null;
    scope?: string | null;
    password?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    accountId?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    idToken?: NullableStringFieldUpdateOperationsInput | string | null;
    accessTokenExpiresAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    refreshTokenExpiresAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    scope?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput;
  };

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    accountId?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    idToken?: NullableStringFieldUpdateOperationsInput | string | null;
    accessTokenExpiresAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    refreshTokenExpiresAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    scope?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AccountCreateManyInput = {
    id: string;
    accountId: string;
    providerId: string;
    userId: string;
    accessToken?: string | null;
    refreshToken?: string | null;
    idToken?: string | null;
    accessTokenExpiresAt?: Date | string | null;
    refreshTokenExpiresAt?: Date | string | null;
    scope?: string | null;
    password?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    accountId?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    idToken?: NullableStringFieldUpdateOperationsInput | string | null;
    accessTokenExpiresAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    refreshTokenExpiresAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    scope?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    accountId?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    idToken?: NullableStringFieldUpdateOperationsInput | string | null;
    accessTokenExpiresAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    refreshTokenExpiresAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    scope?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type VerificationCreateInput = {
    id: string;
    identifier: string;
    value: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type VerificationUncheckedCreateInput = {
    id: string;
    identifier: string;
    value: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    identifier?: StringFieldUpdateOperationsInput | string;
    value?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    identifier?: StringFieldUpdateOperationsInput | string;
    value?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type VerificationCreateManyInput = {
    id: string;
    identifier: string;
    value: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    identifier?: StringFieldUpdateOperationsInput | string;
    value?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    identifier?: StringFieldUpdateOperationsInput | string;
    value?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserProfileCreateInput = {
    id?: string;
    fullName?: string | null;
    headline?: string | null;
    bio?: string | null;
    skills?: UserProfileCreateskillsInput | string[];
    consentTalentPool?: boolean;
    visibility?: $Enums.TalentVisibility;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutProfileInput;
  };

  export type UserProfileUncheckedCreateInput = {
    id?: string;
    userId: string;
    fullName?: string | null;
    headline?: string | null;
    bio?: string | null;
    skills?: UserProfileCreateskillsInput | string[];
    consentTalentPool?: boolean;
    visibility?: $Enums.TalentVisibility;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    fullName?: NullableStringFieldUpdateOperationsInput | string | null;
    headline?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: UserProfileUpdateskillsInput | string[];
    consentTalentPool?: BoolFieldUpdateOperationsInput | boolean;
    visibility?:
      | EnumTalentVisibilityFieldUpdateOperationsInput
      | $Enums.TalentVisibility;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutProfileNestedInput;
  };

  export type UserProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    fullName?: NullableStringFieldUpdateOperationsInput | string | null;
    headline?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: UserProfileUpdateskillsInput | string[];
    consentTalentPool?: BoolFieldUpdateOperationsInput | boolean;
    visibility?:
      | EnumTalentVisibilityFieldUpdateOperationsInput
      | $Enums.TalentVisibility;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserProfileCreateManyInput = {
    id?: string;
    userId: string;
    fullName?: string | null;
    headline?: string | null;
    bio?: string | null;
    skills?: UserProfileCreateskillsInput | string[];
    consentTalentPool?: boolean;
    visibility?: $Enums.TalentVisibility;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    fullName?: NullableStringFieldUpdateOperationsInput | string | null;
    headline?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: UserProfileUpdateskillsInput | string[];
    consentTalentPool?: BoolFieldUpdateOperationsInput | boolean;
    visibility?:
      | EnumTalentVisibilityFieldUpdateOperationsInput
      | $Enums.TalentVisibility;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    fullName?: NullableStringFieldUpdateOperationsInput | string | null;
    headline?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: UserProfileUpdateskillsInput | string[];
    consentTalentPool?: BoolFieldUpdateOperationsInput | boolean;
    visibility?:
      | EnumTalentVisibilityFieldUpdateOperationsInput
      | $Enums.TalentVisibility;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizationCreateInput = {
    id?: string;
    name: string;
    type: $Enums.OrganizationType;
    ssmNumber?: string | null;
    industry?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy: UserCreateNestedOneWithoutCreatedOrganizationsInput;
    events?: EventCreateNestedManyWithoutOrganizationInput;
    jobs?: JobPostingCreateNestedManyWithoutOrganizationInput;
    experiences?: ExperienceCreateNestedManyWithoutOrganizationInput;
    checkIns?: CheckInCreateNestedManyWithoutOrganizationInput;
    certificates?: CertificateCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationUncheckedCreateInput = {
    id?: string;
    name: string;
    type: $Enums.OrganizationType;
    ssmNumber?: string | null;
    industry?: string | null;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: EventUncheckedCreateNestedManyWithoutOrganizationInput;
    jobs?: JobPostingUncheckedCreateNestedManyWithoutOrganizationInput;
    experiences?: ExperienceUncheckedCreateNestedManyWithoutOrganizationInput;
    checkIns?: CheckInUncheckedCreateNestedManyWithoutOrganizationInput;
    certificates?: CertificateUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumOrganizationTypeFieldUpdateOperationsInput
      | $Enums.OrganizationType;
    ssmNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: UserUpdateOneRequiredWithoutCreatedOrganizationsNestedInput;
    events?: EventUpdateManyWithoutOrganizationNestedInput;
    jobs?: JobPostingUpdateManyWithoutOrganizationNestedInput;
    experiences?: ExperienceUpdateManyWithoutOrganizationNestedInput;
    checkIns?: CheckInUpdateManyWithoutOrganizationNestedInput;
    certificates?: CertificateUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumOrganizationTypeFieldUpdateOperationsInput
      | $Enums.OrganizationType;
    ssmNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    events?: EventUncheckedUpdateManyWithoutOrganizationNestedInput;
    jobs?: JobPostingUncheckedUpdateManyWithoutOrganizationNestedInput;
    experiences?: ExperienceUncheckedUpdateManyWithoutOrganizationNestedInput;
    checkIns?: CheckInUncheckedUpdateManyWithoutOrganizationNestedInput;
    certificates?: CertificateUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationCreateManyInput = {
    id?: string;
    name: string;
    type: $Enums.OrganizationType;
    ssmNumber?: string | null;
    industry?: string | null;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumOrganizationTypeFieldUpdateOperationsInput
      | $Enums.OrganizationType;
    ssmNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumOrganizationTypeFieldUpdateOperationsInput
      | $Enums.OrganizationType;
    ssmNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    location?: string | null;
    skills?: EventCreateskillsInput | string[];
    startsAt: Date | string;
    endsAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: OrganizationCreateNestedOneWithoutEventsInput;
    createdBy: UserCreateNestedOneWithoutEventsCreatedInput;
    checkIns?: CheckInCreateNestedManyWithoutEventInput;
    experiences?: ExperienceCreateNestedManyWithoutEventInput;
    certificates?: CertificateCreateNestedManyWithoutEventInput;
  };

  export type EventUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    title: string;
    description?: string | null;
    location?: string | null;
    skills?: EventCreateskillsInput | string[];
    startsAt: Date | string;
    endsAt?: Date | string | null;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    checkIns?: CheckInUncheckedCreateNestedManyWithoutEventInput;
    experiences?: ExperienceUncheckedCreateNestedManyWithoutEventInput;
    certificates?: CertificateUncheckedCreateNestedManyWithoutEventInput;
  };

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: EventUpdateskillsInput | string[];
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: OrganizationUpdateOneRequiredWithoutEventsNestedInput;
    createdBy?: UserUpdateOneRequiredWithoutEventsCreatedNestedInput;
    checkIns?: CheckInUpdateManyWithoutEventNestedInput;
    experiences?: ExperienceUpdateManyWithoutEventNestedInput;
    certificates?: CertificateUpdateManyWithoutEventNestedInput;
  };

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: EventUpdateskillsInput | string[];
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    checkIns?: CheckInUncheckedUpdateManyWithoutEventNestedInput;
    experiences?: ExperienceUncheckedUpdateManyWithoutEventNestedInput;
    certificates?: CertificateUncheckedUpdateManyWithoutEventNestedInput;
  };

  export type EventCreateManyInput = {
    id?: string;
    organizationId: string;
    title: string;
    description?: string | null;
    location?: string | null;
    skills?: EventCreateskillsInput | string[];
    startsAt: Date | string;
    endsAt?: Date | string | null;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: EventUpdateskillsInput | string[];
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: EventUpdateskillsInput | string[];
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobPostingCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    skills?: JobPostingCreateskillsInput | string[];
    status?: $Enums.JobStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: OrganizationCreateNestedOneWithoutJobsInput;
    createdBy: UserCreateNestedOneWithoutJobsCreatedInput;
  };

  export type JobPostingUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    title: string;
    description?: string | null;
    skills?: JobPostingCreateskillsInput | string[];
    status?: $Enums.JobStatus;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type JobPostingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: JobPostingUpdateskillsInput | string[];
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: OrganizationUpdateOneRequiredWithoutJobsNestedInput;
    createdBy?: UserUpdateOneRequiredWithoutJobsCreatedNestedInput;
  };

  export type JobPostingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: JobPostingUpdateskillsInput | string[];
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobPostingCreateManyInput = {
    id?: string;
    organizationId: string;
    title: string;
    description?: string | null;
    skills?: JobPostingCreateskillsInput | string[];
    status?: $Enums.JobStatus;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type JobPostingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: JobPostingUpdateskillsInput | string[];
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobPostingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: JobPostingUpdateskillsInput | string[];
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ExperienceCreateInput = {
    id?: string;
    type: $Enums.ExperienceType;
    title: string;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    isCurrent?: boolean;
    skills?: ExperienceCreateskillsInput | string[];
    verificationStatus?: $Enums.VerificationStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutExperiencesInput;
    organization?: OrganizationCreateNestedOneWithoutExperiencesInput;
    event?: EventCreateNestedOneWithoutExperiencesInput;
  };

  export type ExperienceUncheckedCreateInput = {
    id?: string;
    userId: string;
    organizationId?: string | null;
    eventId?: string | null;
    type: $Enums.ExperienceType;
    title: string;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    isCurrent?: boolean;
    skills?: ExperienceCreateskillsInput | string[];
    verificationStatus?: $Enums.VerificationStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ExperienceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumExperienceTypeFieldUpdateOperationsInput | $Enums.ExperienceType;
    title?: StringFieldUpdateOperationsInput | string;
    startDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isCurrent?: BoolFieldUpdateOperationsInput | boolean;
    skills?: ExperienceUpdateskillsInput | string[];
    verificationStatus?:
      | EnumVerificationStatusFieldUpdateOperationsInput
      | $Enums.VerificationStatus;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutExperiencesNestedInput;
    organization?: OrganizationUpdateOneWithoutExperiencesNestedInput;
    event?: EventUpdateOneWithoutExperiencesNestedInput;
  };

  export type ExperienceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null;
    eventId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumExperienceTypeFieldUpdateOperationsInput | $Enums.ExperienceType;
    title?: StringFieldUpdateOperationsInput | string;
    startDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isCurrent?: BoolFieldUpdateOperationsInput | boolean;
    skills?: ExperienceUpdateskillsInput | string[];
    verificationStatus?:
      | EnumVerificationStatusFieldUpdateOperationsInput
      | $Enums.VerificationStatus;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ExperienceCreateManyInput = {
    id?: string;
    userId: string;
    organizationId?: string | null;
    eventId?: string | null;
    type: $Enums.ExperienceType;
    title: string;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    isCurrent?: boolean;
    skills?: ExperienceCreateskillsInput | string[];
    verificationStatus?: $Enums.VerificationStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ExperienceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumExperienceTypeFieldUpdateOperationsInput | $Enums.ExperienceType;
    title?: StringFieldUpdateOperationsInput | string;
    startDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isCurrent?: BoolFieldUpdateOperationsInput | boolean;
    skills?: ExperienceUpdateskillsInput | string[];
    verificationStatus?:
      | EnumVerificationStatusFieldUpdateOperationsInput
      | $Enums.VerificationStatus;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ExperienceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null;
    eventId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumExperienceTypeFieldUpdateOperationsInput | $Enums.ExperienceType;
    title?: StringFieldUpdateOperationsInput | string;
    startDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isCurrent?: BoolFieldUpdateOperationsInput | boolean;
    skills?: ExperienceUpdateskillsInput | string[];
    verificationStatus?:
      | EnumVerificationStatusFieldUpdateOperationsInput
      | $Enums.VerificationStatus;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CheckInCreateInput = {
    id?: string;
    type: $Enums.CheckInType;
    note?: string | null;
    verificationStatus?: $Enums.VerificationStatus;
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutCheckInsInput;
    organization: OrganizationCreateNestedOneWithoutCheckInsInput;
    event?: EventCreateNestedOneWithoutCheckInsInput;
    addedBy?: UserCreateNestedOneWithoutCheckInsAddedInput;
  };

  export type CheckInUncheckedCreateInput = {
    id?: string;
    userId: string;
    organizationId: string;
    eventId?: string | null;
    type: $Enums.CheckInType;
    note?: string | null;
    verificationStatus?: $Enums.VerificationStatus;
    addedById?: string | null;
    createdAt?: Date | string;
  };

  export type CheckInUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumCheckInTypeFieldUpdateOperationsInput | $Enums.CheckInType;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?:
      | EnumVerificationStatusFieldUpdateOperationsInput
      | $Enums.VerificationStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutCheckInsNestedInput;
    organization?: OrganizationUpdateOneRequiredWithoutCheckInsNestedInput;
    event?: EventUpdateOneWithoutCheckInsNestedInput;
    addedBy?: UserUpdateOneWithoutCheckInsAddedNestedInput;
  };

  export type CheckInUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    eventId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumCheckInTypeFieldUpdateOperationsInput | $Enums.CheckInType;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?:
      | EnumVerificationStatusFieldUpdateOperationsInput
      | $Enums.VerificationStatus;
    addedById?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CheckInCreateManyInput = {
    id?: string;
    userId: string;
    organizationId: string;
    eventId?: string | null;
    type: $Enums.CheckInType;
    note?: string | null;
    verificationStatus?: $Enums.VerificationStatus;
    addedById?: string | null;
    createdAt?: Date | string;
  };

  export type CheckInUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumCheckInTypeFieldUpdateOperationsInput | $Enums.CheckInType;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?:
      | EnumVerificationStatusFieldUpdateOperationsInput
      | $Enums.VerificationStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CheckInUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    eventId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumCheckInTypeFieldUpdateOperationsInput | $Enums.CheckInType;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?:
      | EnumVerificationStatusFieldUpdateOperationsInput
      | $Enums.VerificationStatus;
    addedById?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CertificateCreateInput = {
    id?: string;
    type?: $Enums.CertificateType;
    description?: string | null;
    skills?: CertificateCreateskillsInput | string[];
    hash?: string | null;
    title: string;
    issueDate: Date | string;
    url?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutCertificatesInput;
    organization?: OrganizationCreateNestedOneWithoutCertificatesInput;
    event?: EventCreateNestedOneWithoutCertificatesInput;
  };

  export type CertificateUncheckedCreateInput = {
    id?: string;
    userId: string;
    organizationId?: string | null;
    eventId?: string | null;
    type?: $Enums.CertificateType;
    description?: string | null;
    skills?: CertificateCreateskillsInput | string[];
    hash?: string | null;
    title: string;
    issueDate: Date | string;
    url?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CertificateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumCertificateTypeFieldUpdateOperationsInput
      | $Enums.CertificateType;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: CertificateUpdateskillsInput | string[];
    hash?: NullableStringFieldUpdateOperationsInput | string | null;
    title?: StringFieldUpdateOperationsInput | string;
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutCertificatesNestedInput;
    organization?: OrganizationUpdateOneWithoutCertificatesNestedInput;
    event?: EventUpdateOneWithoutCertificatesNestedInput;
  };

  export type CertificateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null;
    eventId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?:
      | EnumCertificateTypeFieldUpdateOperationsInput
      | $Enums.CertificateType;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: CertificateUpdateskillsInput | string[];
    hash?: NullableStringFieldUpdateOperationsInput | string | null;
    title?: StringFieldUpdateOperationsInput | string;
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CertificateCreateManyInput = {
    id?: string;
    userId: string;
    organizationId?: string | null;
    eventId?: string | null;
    type?: $Enums.CertificateType;
    description?: string | null;
    skills?: CertificateCreateskillsInput | string[];
    hash?: string | null;
    title: string;
    issueDate: Date | string;
    url?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CertificateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumCertificateTypeFieldUpdateOperationsInput
      | $Enums.CertificateType;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: CertificateUpdateskillsInput | string[];
    hash?: NullableStringFieldUpdateOperationsInput | string | null;
    title?: StringFieldUpdateOperationsInput | string;
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CertificateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null;
    eventId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?:
      | EnumCertificateTypeFieldUpdateOperationsInput
      | $Enums.CertificateType;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: CertificateUpdateskillsInput | string[];
    hash?: NullableStringFieldUpdateOperationsInput | string | null;
    title?: StringFieldUpdateOperationsInput | string;
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type EnumProfileTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProfileType | EnumProfileTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ProfileType[] | ListEnumProfileTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ProfileType[]
      | ListEnumProfileTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumProfileTypeFilter<$PrismaModel> | $Enums.ProfileType;
  };

  export type SessionListRelationFilter = {
    every?: SessionWhereInput;
    some?: SessionWhereInput;
    none?: SessionWhereInput;
  };

  export type AccountListRelationFilter = {
    every?: AccountWhereInput;
    some?: AccountWhereInput;
    none?: AccountWhereInput;
  };

  export type UserProfileNullableScalarRelationFilter = {
    is?: UserProfileWhereInput | null;
    isNot?: UserProfileWhereInput | null;
  };

  export type OrganizationListRelationFilter = {
    every?: OrganizationWhereInput;
    some?: OrganizationWhereInput;
    none?: OrganizationWhereInput;
  };

  export type EventListRelationFilter = {
    every?: EventWhereInput;
    some?: EventWhereInput;
    none?: EventWhereInput;
  };

  export type JobPostingListRelationFilter = {
    every?: JobPostingWhereInput;
    some?: JobPostingWhereInput;
    none?: JobPostingWhereInput;
  };

  export type ExperienceListRelationFilter = {
    every?: ExperienceWhereInput;
    some?: ExperienceWhereInput;
    none?: ExperienceWhereInput;
  };

  export type CheckInListRelationFilter = {
    every?: CheckInWhereInput;
    some?: CheckInWhereInput;
    none?: CheckInWhereInput;
  };

  export type CertificateListRelationFilter = {
    every?: CertificateWhereInput;
    some?: CertificateWhereInput;
    none?: CertificateWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type OrganizationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type JobPostingOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CheckInOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CertificateOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    emailVerified?: SortOrder;
    image?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    mykadNumber?: SortOrder;
    mykadVerifiedAt?: SortOrder;
    profileType?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    emailVerified?: SortOrder;
    image?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    mykadNumber?: SortOrder;
    mykadVerifiedAt?: SortOrder;
    profileType?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    emailVerified?: SortOrder;
    image?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    mykadNumber?: SortOrder;
    mykadVerifiedAt?: SortOrder;
    profileType?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type EnumProfileTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProfileType | EnumProfileTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ProfileType[] | ListEnumProfileTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ProfileType[]
      | ListEnumProfileTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumProfileTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.ProfileType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumProfileTypeFilter<$PrismaModel>;
    _max?: NestedEnumProfileTypeFilter<$PrismaModel>;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder;
    expiresAt?: SortOrder;
    token?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    ipAddress?: SortOrder;
    userAgent?: SortOrder;
    userId?: SortOrder;
  };

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder;
    expiresAt?: SortOrder;
    token?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    ipAddress?: SortOrder;
    userAgent?: SortOrder;
    userId?: SortOrder;
  };

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder;
    expiresAt?: SortOrder;
    token?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    ipAddress?: SortOrder;
    userAgent?: SortOrder;
    userId?: SortOrder;
  };

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder;
    accountId?: SortOrder;
    providerId?: SortOrder;
    userId?: SortOrder;
    accessToken?: SortOrder;
    refreshToken?: SortOrder;
    idToken?: SortOrder;
    accessTokenExpiresAt?: SortOrder;
    refreshTokenExpiresAt?: SortOrder;
    scope?: SortOrder;
    password?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder;
    accountId?: SortOrder;
    providerId?: SortOrder;
    userId?: SortOrder;
    accessToken?: SortOrder;
    refreshToken?: SortOrder;
    idToken?: SortOrder;
    accessTokenExpiresAt?: SortOrder;
    refreshTokenExpiresAt?: SortOrder;
    scope?: SortOrder;
    password?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder;
    accountId?: SortOrder;
    providerId?: SortOrder;
    userId?: SortOrder;
    accessToken?: SortOrder;
    refreshToken?: SortOrder;
    idToken?: SortOrder;
    accessTokenExpiresAt?: SortOrder;
    refreshTokenExpiresAt?: SortOrder;
    scope?: SortOrder;
    password?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder;
    identifier?: SortOrder;
    value?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder;
    identifier?: SortOrder;
    value?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder;
    identifier?: SortOrder;
    value?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
  };

  export type EnumTalentVisibilityFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.TalentVisibility
      | EnumTalentVisibilityFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TalentVisibility[]
      | ListEnumTalentVisibilityFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TalentVisibility[]
      | ListEnumTalentVisibilityFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTalentVisibilityFilter<$PrismaModel>
      | $Enums.TalentVisibility;
  };

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    fullName?: SortOrder;
    headline?: SortOrder;
    bio?: SortOrder;
    skills?: SortOrder;
    consentTalentPool?: SortOrder;
    visibility?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    fullName?: SortOrder;
    headline?: SortOrder;
    bio?: SortOrder;
    consentTalentPool?: SortOrder;
    visibility?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    fullName?: SortOrder;
    headline?: SortOrder;
    bio?: SortOrder;
    consentTalentPool?: SortOrder;
    visibility?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EnumTalentVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.TalentVisibility
      | EnumTalentVisibilityFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TalentVisibility[]
      | ListEnumTalentVisibilityFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TalentVisibility[]
      | ListEnumTalentVisibilityFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTalentVisibilityWithAggregatesFilter<$PrismaModel>
      | $Enums.TalentVisibility;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTalentVisibilityFilter<$PrismaModel>;
    _max?: NestedEnumTalentVisibilityFilter<$PrismaModel>;
  };

  export type EnumOrganizationTypeFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.OrganizationType
      | EnumOrganizationTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.OrganizationType[]
      | ListEnumOrganizationTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.OrganizationType[]
      | ListEnumOrganizationTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumOrganizationTypeFilter<$PrismaModel>
      | $Enums.OrganizationType;
  };

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    ssmNumber?: SortOrder;
    industry?: SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    ssmNumber?: SortOrder;
    industry?: SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    ssmNumber?: SortOrder;
    industry?: SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EnumOrganizationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.OrganizationType
      | EnumOrganizationTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.OrganizationType[]
      | ListEnumOrganizationTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.OrganizationType[]
      | ListEnumOrganizationTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumOrganizationTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.OrganizationType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumOrganizationTypeFilter<$PrismaModel>;
    _max?: NestedEnumOrganizationTypeFilter<$PrismaModel>;
  };

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput;
    isNot?: OrganizationWhereInput;
  };

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    skills?: SortOrder;
    startsAt?: SortOrder;
    endsAt?: SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    startsAt?: SortOrder;
    endsAt?: SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    startsAt?: SortOrder;
    endsAt?: SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus;
  };

  export type JobPostingCountOrderByAggregateInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    skills?: SortOrder;
    status?: SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type JobPostingMaxOrderByAggregateInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type JobPostingMinOrderByAggregateInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    createdById?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumJobStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.JobStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumJobStatusFilter<$PrismaModel>;
    _max?: NestedEnumJobStatusFilter<$PrismaModel>;
  };

  export type EnumExperienceTypeFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.ExperienceType
      | EnumExperienceTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ExperienceType[]
      | ListEnumExperienceTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ExperienceType[]
      | ListEnumExperienceTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumExperienceTypeFilter<$PrismaModel> | $Enums.ExperienceType;
  };

  export type EnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.VerificationStatus
      | EnumVerificationStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.VerificationStatus[]
      | ListEnumVerificationStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.VerificationStatus[]
      | ListEnumVerificationStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumVerificationStatusFilter<$PrismaModel>
      | $Enums.VerificationStatus;
  };

  export type OrganizationNullableScalarRelationFilter = {
    is?: OrganizationWhereInput | null;
    isNot?: OrganizationWhereInput | null;
  };

  export type EventNullableScalarRelationFilter = {
    is?: EventWhereInput | null;
    isNot?: EventWhereInput | null;
  };

  export type ExperienceUserIdEventIdTypeCompoundUniqueInput = {
    userId: string;
    eventId: string;
    type: $Enums.ExperienceType;
  };

  export type ExperienceUserIdOrganizationIdTypeCompoundUniqueInput = {
    userId: string;
    organizationId: string;
    type: $Enums.ExperienceType;
  };

  export type ExperienceCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    organizationId?: SortOrder;
    eventId?: SortOrder;
    type?: SortOrder;
    title?: SortOrder;
    startDate?: SortOrder;
    endDate?: SortOrder;
    isCurrent?: SortOrder;
    skills?: SortOrder;
    verificationStatus?: SortOrder;
    notes?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ExperienceMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    organizationId?: SortOrder;
    eventId?: SortOrder;
    type?: SortOrder;
    title?: SortOrder;
    startDate?: SortOrder;
    endDate?: SortOrder;
    isCurrent?: SortOrder;
    verificationStatus?: SortOrder;
    notes?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ExperienceMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    organizationId?: SortOrder;
    eventId?: SortOrder;
    type?: SortOrder;
    title?: SortOrder;
    startDate?: SortOrder;
    endDate?: SortOrder;
    isCurrent?: SortOrder;
    verificationStatus?: SortOrder;
    notes?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EnumExperienceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.ExperienceType
      | EnumExperienceTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ExperienceType[]
      | ListEnumExperienceTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ExperienceType[]
      | ListEnumExperienceTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumExperienceTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.ExperienceType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumExperienceTypeFilter<$PrismaModel>;
    _max?: NestedEnumExperienceTypeFilter<$PrismaModel>;
  };

  export type EnumVerificationStatusWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | $Enums.VerificationStatus
        | EnumVerificationStatusFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.VerificationStatus[]
        | ListEnumVerificationStatusFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.VerificationStatus[]
        | ListEnumVerificationStatusFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel>
        | $Enums.VerificationStatus;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumVerificationStatusFilter<$PrismaModel>;
      _max?: NestedEnumVerificationStatusFilter<$PrismaModel>;
    };

  export type EnumCheckInTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckInType | EnumCheckInTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.CheckInType[] | ListEnumCheckInTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.CheckInType[]
      | ListEnumCheckInTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumCheckInTypeFilter<$PrismaModel> | $Enums.CheckInType;
  };

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null;
    isNot?: UserWhereInput | null;
  };

  export type CheckInUserIdEventIdTypeCompoundUniqueInput = {
    userId: string;
    eventId: string;
    type: $Enums.CheckInType;
  };

  export type CheckInUserIdOrganizationIdTypeCompoundUniqueInput = {
    userId: string;
    organizationId: string;
    type: $Enums.CheckInType;
  };

  export type CheckInCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    organizationId?: SortOrder;
    eventId?: SortOrder;
    type?: SortOrder;
    note?: SortOrder;
    verificationStatus?: SortOrder;
    addedById?: SortOrder;
    createdAt?: SortOrder;
  };

  export type CheckInMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    organizationId?: SortOrder;
    eventId?: SortOrder;
    type?: SortOrder;
    note?: SortOrder;
    verificationStatus?: SortOrder;
    addedById?: SortOrder;
    createdAt?: SortOrder;
  };

  export type CheckInMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    organizationId?: SortOrder;
    eventId?: SortOrder;
    type?: SortOrder;
    note?: SortOrder;
    verificationStatus?: SortOrder;
    addedById?: SortOrder;
    createdAt?: SortOrder;
  };

  export type EnumCheckInTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckInType | EnumCheckInTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.CheckInType[] | ListEnumCheckInTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.CheckInType[]
      | ListEnumCheckInTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumCheckInTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.CheckInType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumCheckInTypeFilter<$PrismaModel>;
    _max?: NestedEnumCheckInTypeFilter<$PrismaModel>;
  };

  export type EnumCertificateTypeFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.CertificateType
      | EnumCertificateTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.CertificateType[]
      | ListEnumCertificateTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.CertificateType[]
      | ListEnumCertificateTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumCertificateTypeFilter<$PrismaModel>
      | $Enums.CertificateType;
  };

  export type CertificateCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    organizationId?: SortOrder;
    eventId?: SortOrder;
    type?: SortOrder;
    description?: SortOrder;
    skills?: SortOrder;
    hash?: SortOrder;
    title?: SortOrder;
    issueDate?: SortOrder;
    url?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CertificateMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    organizationId?: SortOrder;
    eventId?: SortOrder;
    type?: SortOrder;
    description?: SortOrder;
    hash?: SortOrder;
    title?: SortOrder;
    issueDate?: SortOrder;
    url?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CertificateMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    organizationId?: SortOrder;
    eventId?: SortOrder;
    type?: SortOrder;
    description?: SortOrder;
    hash?: SortOrder;
    title?: SortOrder;
    issueDate?: SortOrder;
    url?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EnumCertificateTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.CertificateType
      | EnumCertificateTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.CertificateType[]
      | ListEnumCertificateTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.CertificateType[]
      | ListEnumCertificateTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumCertificateTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.CertificateType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumCertificateTypeFilter<$PrismaModel>;
    _max?: NestedEnumCertificateTypeFilter<$PrismaModel>;
  };

  export type SessionCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          SessionCreateWithoutUserInput,
          SessionUncheckedCreateWithoutUserInput
        >
      | SessionCreateWithoutUserInput[]
      | SessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | SessionCreateOrConnectWithoutUserInput
      | SessionCreateOrConnectWithoutUserInput[];
    createMany?: SessionCreateManyUserInputEnvelope;
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[];
  };

  export type AccountCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          AccountCreateWithoutUserInput,
          AccountUncheckedCreateWithoutUserInput
        >
      | AccountCreateWithoutUserInput[]
      | AccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AccountCreateOrConnectWithoutUserInput
      | AccountCreateOrConnectWithoutUserInput[];
    createMany?: AccountCreateManyUserInputEnvelope;
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
  };

  export type UserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<
      UserProfileCreateWithoutUserInput,
      UserProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput;
    connect?: UserProfileWhereUniqueInput;
  };

  export type OrganizationCreateNestedManyWithoutCreatedByInput = {
    create?:
      | XOR<
          OrganizationCreateWithoutCreatedByInput,
          OrganizationUncheckedCreateWithoutCreatedByInput
        >
      | OrganizationCreateWithoutCreatedByInput[]
      | OrganizationUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | OrganizationCreateOrConnectWithoutCreatedByInput
      | OrganizationCreateOrConnectWithoutCreatedByInput[];
    createMany?: OrganizationCreateManyCreatedByInputEnvelope;
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[];
  };

  export type EventCreateNestedManyWithoutCreatedByInput = {
    create?:
      | XOR<
          EventCreateWithoutCreatedByInput,
          EventUncheckedCreateWithoutCreatedByInput
        >
      | EventCreateWithoutCreatedByInput[]
      | EventUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | EventCreateOrConnectWithoutCreatedByInput
      | EventCreateOrConnectWithoutCreatedByInput[];
    createMany?: EventCreateManyCreatedByInputEnvelope;
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[];
  };

  export type JobPostingCreateNestedManyWithoutCreatedByInput = {
    create?:
      | XOR<
          JobPostingCreateWithoutCreatedByInput,
          JobPostingUncheckedCreateWithoutCreatedByInput
        >
      | JobPostingCreateWithoutCreatedByInput[]
      | JobPostingUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | JobPostingCreateOrConnectWithoutCreatedByInput
      | JobPostingCreateOrConnectWithoutCreatedByInput[];
    createMany?: JobPostingCreateManyCreatedByInputEnvelope;
    connect?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[];
  };

  export type ExperienceCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ExperienceCreateWithoutUserInput,
          ExperienceUncheckedCreateWithoutUserInput
        >
      | ExperienceCreateWithoutUserInput[]
      | ExperienceUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ExperienceCreateOrConnectWithoutUserInput
      | ExperienceCreateOrConnectWithoutUserInput[];
    createMany?: ExperienceCreateManyUserInputEnvelope;
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[];
  };

  export type CheckInCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          CheckInCreateWithoutUserInput,
          CheckInUncheckedCreateWithoutUserInput
        >
      | CheckInCreateWithoutUserInput[]
      | CheckInUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CheckInCreateOrConnectWithoutUserInput
      | CheckInCreateOrConnectWithoutUserInput[];
    createMany?: CheckInCreateManyUserInputEnvelope;
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
  };

  export type CheckInCreateNestedManyWithoutAddedByInput = {
    create?:
      | XOR<
          CheckInCreateWithoutAddedByInput,
          CheckInUncheckedCreateWithoutAddedByInput
        >
      | CheckInCreateWithoutAddedByInput[]
      | CheckInUncheckedCreateWithoutAddedByInput[];
    connectOrCreate?:
      | CheckInCreateOrConnectWithoutAddedByInput
      | CheckInCreateOrConnectWithoutAddedByInput[];
    createMany?: CheckInCreateManyAddedByInputEnvelope;
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
  };

  export type CertificateCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          CertificateCreateWithoutUserInput,
          CertificateUncheckedCreateWithoutUserInput
        >
      | CertificateCreateWithoutUserInput[]
      | CertificateUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CertificateCreateOrConnectWithoutUserInput
      | CertificateCreateOrConnectWithoutUserInput[];
    createMany?: CertificateCreateManyUserInputEnvelope;
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[];
  };

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          SessionCreateWithoutUserInput,
          SessionUncheckedCreateWithoutUserInput
        >
      | SessionCreateWithoutUserInput[]
      | SessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | SessionCreateOrConnectWithoutUserInput
      | SessionCreateOrConnectWithoutUserInput[];
    createMany?: SessionCreateManyUserInputEnvelope;
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[];
  };

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          AccountCreateWithoutUserInput,
          AccountUncheckedCreateWithoutUserInput
        >
      | AccountCreateWithoutUserInput[]
      | AccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AccountCreateOrConnectWithoutUserInput
      | AccountCreateOrConnectWithoutUserInput[];
    createMany?: AccountCreateManyUserInputEnvelope;
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
  };

  export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<
      UserProfileCreateWithoutUserInput,
      UserProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput;
    connect?: UserProfileWhereUniqueInput;
  };

  export type OrganizationUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?:
      | XOR<
          OrganizationCreateWithoutCreatedByInput,
          OrganizationUncheckedCreateWithoutCreatedByInput
        >
      | OrganizationCreateWithoutCreatedByInput[]
      | OrganizationUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | OrganizationCreateOrConnectWithoutCreatedByInput
      | OrganizationCreateOrConnectWithoutCreatedByInput[];
    createMany?: OrganizationCreateManyCreatedByInputEnvelope;
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[];
  };

  export type EventUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?:
      | XOR<
          EventCreateWithoutCreatedByInput,
          EventUncheckedCreateWithoutCreatedByInput
        >
      | EventCreateWithoutCreatedByInput[]
      | EventUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | EventCreateOrConnectWithoutCreatedByInput
      | EventCreateOrConnectWithoutCreatedByInput[];
    createMany?: EventCreateManyCreatedByInputEnvelope;
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[];
  };

  export type JobPostingUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?:
      | XOR<
          JobPostingCreateWithoutCreatedByInput,
          JobPostingUncheckedCreateWithoutCreatedByInput
        >
      | JobPostingCreateWithoutCreatedByInput[]
      | JobPostingUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | JobPostingCreateOrConnectWithoutCreatedByInput
      | JobPostingCreateOrConnectWithoutCreatedByInput[];
    createMany?: JobPostingCreateManyCreatedByInputEnvelope;
    connect?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[];
  };

  export type ExperienceUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ExperienceCreateWithoutUserInput,
          ExperienceUncheckedCreateWithoutUserInput
        >
      | ExperienceCreateWithoutUserInput[]
      | ExperienceUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ExperienceCreateOrConnectWithoutUserInput
      | ExperienceCreateOrConnectWithoutUserInput[];
    createMany?: ExperienceCreateManyUserInputEnvelope;
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[];
  };

  export type CheckInUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          CheckInCreateWithoutUserInput,
          CheckInUncheckedCreateWithoutUserInput
        >
      | CheckInCreateWithoutUserInput[]
      | CheckInUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CheckInCreateOrConnectWithoutUserInput
      | CheckInCreateOrConnectWithoutUserInput[];
    createMany?: CheckInCreateManyUserInputEnvelope;
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
  };

  export type CheckInUncheckedCreateNestedManyWithoutAddedByInput = {
    create?:
      | XOR<
          CheckInCreateWithoutAddedByInput,
          CheckInUncheckedCreateWithoutAddedByInput
        >
      | CheckInCreateWithoutAddedByInput[]
      | CheckInUncheckedCreateWithoutAddedByInput[];
    connectOrCreate?:
      | CheckInCreateOrConnectWithoutAddedByInput
      | CheckInCreateOrConnectWithoutAddedByInput[];
    createMany?: CheckInCreateManyAddedByInputEnvelope;
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
  };

  export type CertificateUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          CertificateCreateWithoutUserInput,
          CertificateUncheckedCreateWithoutUserInput
        >
      | CertificateCreateWithoutUserInput[]
      | CertificateUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CertificateCreateOrConnectWithoutUserInput
      | CertificateCreateOrConnectWithoutUserInput[];
    createMany?: CertificateCreateManyUserInputEnvelope;
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type EnumProfileTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProfileType;
  };

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          SessionCreateWithoutUserInput,
          SessionUncheckedCreateWithoutUserInput
        >
      | SessionCreateWithoutUserInput[]
      | SessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | SessionCreateOrConnectWithoutUserInput
      | SessionCreateOrConnectWithoutUserInput[];
    upsert?:
      | SessionUpsertWithWhereUniqueWithoutUserInput
      | SessionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: SessionCreateManyUserInputEnvelope;
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[];
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[];
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[];
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[];
    update?:
      | SessionUpdateWithWhereUniqueWithoutUserInput
      | SessionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | SessionUpdateManyWithWhereWithoutUserInput
      | SessionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[];
  };

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          AccountCreateWithoutUserInput,
          AccountUncheckedCreateWithoutUserInput
        >
      | AccountCreateWithoutUserInput[]
      | AccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AccountCreateOrConnectWithoutUserInput
      | AccountCreateOrConnectWithoutUserInput[];
    upsert?:
      | AccountUpsertWithWhereUniqueWithoutUserInput
      | AccountUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: AccountCreateManyUserInputEnvelope;
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    update?:
      | AccountUpdateWithWhereUniqueWithoutUserInput
      | AccountUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | AccountUpdateManyWithWhereWithoutUserInput
      | AccountUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[];
  };

  export type UserProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      UserProfileCreateWithoutUserInput,
      UserProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput;
    upsert?: UserProfileUpsertWithoutUserInput;
    disconnect?: UserProfileWhereInput | boolean;
    delete?: UserProfileWhereInput | boolean;
    connect?: UserProfileWhereUniqueInput;
    update?: XOR<
      XOR<
        UserProfileUpdateToOneWithWhereWithoutUserInput,
        UserProfileUpdateWithoutUserInput
      >,
      UserProfileUncheckedUpdateWithoutUserInput
    >;
  };

  export type OrganizationUpdateManyWithoutCreatedByNestedInput = {
    create?:
      | XOR<
          OrganizationCreateWithoutCreatedByInput,
          OrganizationUncheckedCreateWithoutCreatedByInput
        >
      | OrganizationCreateWithoutCreatedByInput[]
      | OrganizationUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | OrganizationCreateOrConnectWithoutCreatedByInput
      | OrganizationCreateOrConnectWithoutCreatedByInput[];
    upsert?:
      | OrganizationUpsertWithWhereUniqueWithoutCreatedByInput
      | OrganizationUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: OrganizationCreateManyCreatedByInputEnvelope;
    set?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[];
    disconnect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[];
    delete?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[];
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[];
    update?:
      | OrganizationUpdateWithWhereUniqueWithoutCreatedByInput
      | OrganizationUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?:
      | OrganizationUpdateManyWithWhereWithoutCreatedByInput
      | OrganizationUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[];
  };

  export type EventUpdateManyWithoutCreatedByNestedInput = {
    create?:
      | XOR<
          EventCreateWithoutCreatedByInput,
          EventUncheckedCreateWithoutCreatedByInput
        >
      | EventCreateWithoutCreatedByInput[]
      | EventUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | EventCreateOrConnectWithoutCreatedByInput
      | EventCreateOrConnectWithoutCreatedByInput[];
    upsert?:
      | EventUpsertWithWhereUniqueWithoutCreatedByInput
      | EventUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: EventCreateManyCreatedByInputEnvelope;
    set?: EventWhereUniqueInput | EventWhereUniqueInput[];
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[];
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[];
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[];
    update?:
      | EventUpdateWithWhereUniqueWithoutCreatedByInput
      | EventUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?:
      | EventUpdateManyWithWhereWithoutCreatedByInput
      | EventUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[];
  };

  export type JobPostingUpdateManyWithoutCreatedByNestedInput = {
    create?:
      | XOR<
          JobPostingCreateWithoutCreatedByInput,
          JobPostingUncheckedCreateWithoutCreatedByInput
        >
      | JobPostingCreateWithoutCreatedByInput[]
      | JobPostingUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | JobPostingCreateOrConnectWithoutCreatedByInput
      | JobPostingCreateOrConnectWithoutCreatedByInput[];
    upsert?:
      | JobPostingUpsertWithWhereUniqueWithoutCreatedByInput
      | JobPostingUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: JobPostingCreateManyCreatedByInputEnvelope;
    set?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[];
    disconnect?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[];
    delete?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[];
    connect?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[];
    update?:
      | JobPostingUpdateWithWhereUniqueWithoutCreatedByInput
      | JobPostingUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?:
      | JobPostingUpdateManyWithWhereWithoutCreatedByInput
      | JobPostingUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: JobPostingScalarWhereInput | JobPostingScalarWhereInput[];
  };

  export type ExperienceUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ExperienceCreateWithoutUserInput,
          ExperienceUncheckedCreateWithoutUserInput
        >
      | ExperienceCreateWithoutUserInput[]
      | ExperienceUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ExperienceCreateOrConnectWithoutUserInput
      | ExperienceCreateOrConnectWithoutUserInput[];
    upsert?:
      | ExperienceUpsertWithWhereUniqueWithoutUserInput
      | ExperienceUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ExperienceCreateManyUserInputEnvelope;
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[];
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[];
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[];
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[];
    update?:
      | ExperienceUpdateWithWhereUniqueWithoutUserInput
      | ExperienceUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ExperienceUpdateManyWithWhereWithoutUserInput
      | ExperienceUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[];
  };

  export type CheckInUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          CheckInCreateWithoutUserInput,
          CheckInUncheckedCreateWithoutUserInput
        >
      | CheckInCreateWithoutUserInput[]
      | CheckInUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CheckInCreateOrConnectWithoutUserInput
      | CheckInCreateOrConnectWithoutUserInput[];
    upsert?:
      | CheckInUpsertWithWhereUniqueWithoutUserInput
      | CheckInUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: CheckInCreateManyUserInputEnvelope;
    set?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    disconnect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    delete?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    update?:
      | CheckInUpdateWithWhereUniqueWithoutUserInput
      | CheckInUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | CheckInUpdateManyWithWhereWithoutUserInput
      | CheckInUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: CheckInScalarWhereInput | CheckInScalarWhereInput[];
  };

  export type CheckInUpdateManyWithoutAddedByNestedInput = {
    create?:
      | XOR<
          CheckInCreateWithoutAddedByInput,
          CheckInUncheckedCreateWithoutAddedByInput
        >
      | CheckInCreateWithoutAddedByInput[]
      | CheckInUncheckedCreateWithoutAddedByInput[];
    connectOrCreate?:
      | CheckInCreateOrConnectWithoutAddedByInput
      | CheckInCreateOrConnectWithoutAddedByInput[];
    upsert?:
      | CheckInUpsertWithWhereUniqueWithoutAddedByInput
      | CheckInUpsertWithWhereUniqueWithoutAddedByInput[];
    createMany?: CheckInCreateManyAddedByInputEnvelope;
    set?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    disconnect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    delete?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    update?:
      | CheckInUpdateWithWhereUniqueWithoutAddedByInput
      | CheckInUpdateWithWhereUniqueWithoutAddedByInput[];
    updateMany?:
      | CheckInUpdateManyWithWhereWithoutAddedByInput
      | CheckInUpdateManyWithWhereWithoutAddedByInput[];
    deleteMany?: CheckInScalarWhereInput | CheckInScalarWhereInput[];
  };

  export type CertificateUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          CertificateCreateWithoutUserInput,
          CertificateUncheckedCreateWithoutUserInput
        >
      | CertificateCreateWithoutUserInput[]
      | CertificateUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CertificateCreateOrConnectWithoutUserInput
      | CertificateCreateOrConnectWithoutUserInput[];
    upsert?:
      | CertificateUpsertWithWhereUniqueWithoutUserInput
      | CertificateUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: CertificateCreateManyUserInputEnvelope;
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[];
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[];
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[];
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[];
    update?:
      | CertificateUpdateWithWhereUniqueWithoutUserInput
      | CertificateUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | CertificateUpdateManyWithWhereWithoutUserInput
      | CertificateUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[];
  };

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          SessionCreateWithoutUserInput,
          SessionUncheckedCreateWithoutUserInput
        >
      | SessionCreateWithoutUserInput[]
      | SessionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | SessionCreateOrConnectWithoutUserInput
      | SessionCreateOrConnectWithoutUserInput[];
    upsert?:
      | SessionUpsertWithWhereUniqueWithoutUserInput
      | SessionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: SessionCreateManyUserInputEnvelope;
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[];
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[];
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[];
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[];
    update?:
      | SessionUpdateWithWhereUniqueWithoutUserInput
      | SessionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | SessionUpdateManyWithWhereWithoutUserInput
      | SessionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[];
  };

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          AccountCreateWithoutUserInput,
          AccountUncheckedCreateWithoutUserInput
        >
      | AccountCreateWithoutUserInput[]
      | AccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | AccountCreateOrConnectWithoutUserInput
      | AccountCreateOrConnectWithoutUserInput[];
    upsert?:
      | AccountUpsertWithWhereUniqueWithoutUserInput
      | AccountUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: AccountCreateManyUserInputEnvelope;
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[];
    update?:
      | AccountUpdateWithWhereUniqueWithoutUserInput
      | AccountUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | AccountUpdateManyWithWhereWithoutUserInput
      | AccountUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[];
  };

  export type UserProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      UserProfileCreateWithoutUserInput,
      UserProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput;
    upsert?: UserProfileUpsertWithoutUserInput;
    disconnect?: UserProfileWhereInput | boolean;
    delete?: UserProfileWhereInput | boolean;
    connect?: UserProfileWhereUniqueInput;
    update?: XOR<
      XOR<
        UserProfileUpdateToOneWithWhereWithoutUserInput,
        UserProfileUpdateWithoutUserInput
      >,
      UserProfileUncheckedUpdateWithoutUserInput
    >;
  };

  export type OrganizationUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?:
      | XOR<
          OrganizationCreateWithoutCreatedByInput,
          OrganizationUncheckedCreateWithoutCreatedByInput
        >
      | OrganizationCreateWithoutCreatedByInput[]
      | OrganizationUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | OrganizationCreateOrConnectWithoutCreatedByInput
      | OrganizationCreateOrConnectWithoutCreatedByInput[];
    upsert?:
      | OrganizationUpsertWithWhereUniqueWithoutCreatedByInput
      | OrganizationUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: OrganizationCreateManyCreatedByInputEnvelope;
    set?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[];
    disconnect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[];
    delete?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[];
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[];
    update?:
      | OrganizationUpdateWithWhereUniqueWithoutCreatedByInput
      | OrganizationUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?:
      | OrganizationUpdateManyWithWhereWithoutCreatedByInput
      | OrganizationUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[];
  };

  export type EventUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?:
      | XOR<
          EventCreateWithoutCreatedByInput,
          EventUncheckedCreateWithoutCreatedByInput
        >
      | EventCreateWithoutCreatedByInput[]
      | EventUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | EventCreateOrConnectWithoutCreatedByInput
      | EventCreateOrConnectWithoutCreatedByInput[];
    upsert?:
      | EventUpsertWithWhereUniqueWithoutCreatedByInput
      | EventUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: EventCreateManyCreatedByInputEnvelope;
    set?: EventWhereUniqueInput | EventWhereUniqueInput[];
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[];
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[];
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[];
    update?:
      | EventUpdateWithWhereUniqueWithoutCreatedByInput
      | EventUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?:
      | EventUpdateManyWithWhereWithoutCreatedByInput
      | EventUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[];
  };

  export type JobPostingUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?:
      | XOR<
          JobPostingCreateWithoutCreatedByInput,
          JobPostingUncheckedCreateWithoutCreatedByInput
        >
      | JobPostingCreateWithoutCreatedByInput[]
      | JobPostingUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | JobPostingCreateOrConnectWithoutCreatedByInput
      | JobPostingCreateOrConnectWithoutCreatedByInput[];
    upsert?:
      | JobPostingUpsertWithWhereUniqueWithoutCreatedByInput
      | JobPostingUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: JobPostingCreateManyCreatedByInputEnvelope;
    set?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[];
    disconnect?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[];
    delete?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[];
    connect?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[];
    update?:
      | JobPostingUpdateWithWhereUniqueWithoutCreatedByInput
      | JobPostingUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?:
      | JobPostingUpdateManyWithWhereWithoutCreatedByInput
      | JobPostingUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: JobPostingScalarWhereInput | JobPostingScalarWhereInput[];
  };

  export type ExperienceUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ExperienceCreateWithoutUserInput,
          ExperienceUncheckedCreateWithoutUserInput
        >
      | ExperienceCreateWithoutUserInput[]
      | ExperienceUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ExperienceCreateOrConnectWithoutUserInput
      | ExperienceCreateOrConnectWithoutUserInput[];
    upsert?:
      | ExperienceUpsertWithWhereUniqueWithoutUserInput
      | ExperienceUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ExperienceCreateManyUserInputEnvelope;
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[];
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[];
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[];
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[];
    update?:
      | ExperienceUpdateWithWhereUniqueWithoutUserInput
      | ExperienceUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ExperienceUpdateManyWithWhereWithoutUserInput
      | ExperienceUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[];
  };

  export type CheckInUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          CheckInCreateWithoutUserInput,
          CheckInUncheckedCreateWithoutUserInput
        >
      | CheckInCreateWithoutUserInput[]
      | CheckInUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CheckInCreateOrConnectWithoutUserInput
      | CheckInCreateOrConnectWithoutUserInput[];
    upsert?:
      | CheckInUpsertWithWhereUniqueWithoutUserInput
      | CheckInUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: CheckInCreateManyUserInputEnvelope;
    set?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    disconnect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    delete?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    update?:
      | CheckInUpdateWithWhereUniqueWithoutUserInput
      | CheckInUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | CheckInUpdateManyWithWhereWithoutUserInput
      | CheckInUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: CheckInScalarWhereInput | CheckInScalarWhereInput[];
  };

  export type CheckInUncheckedUpdateManyWithoutAddedByNestedInput = {
    create?:
      | XOR<
          CheckInCreateWithoutAddedByInput,
          CheckInUncheckedCreateWithoutAddedByInput
        >
      | CheckInCreateWithoutAddedByInput[]
      | CheckInUncheckedCreateWithoutAddedByInput[];
    connectOrCreate?:
      | CheckInCreateOrConnectWithoutAddedByInput
      | CheckInCreateOrConnectWithoutAddedByInput[];
    upsert?:
      | CheckInUpsertWithWhereUniqueWithoutAddedByInput
      | CheckInUpsertWithWhereUniqueWithoutAddedByInput[];
    createMany?: CheckInCreateManyAddedByInputEnvelope;
    set?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    disconnect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    delete?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    update?:
      | CheckInUpdateWithWhereUniqueWithoutAddedByInput
      | CheckInUpdateWithWhereUniqueWithoutAddedByInput[];
    updateMany?:
      | CheckInUpdateManyWithWhereWithoutAddedByInput
      | CheckInUpdateManyWithWhereWithoutAddedByInput[];
    deleteMany?: CheckInScalarWhereInput | CheckInScalarWhereInput[];
  };

  export type CertificateUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          CertificateCreateWithoutUserInput,
          CertificateUncheckedCreateWithoutUserInput
        >
      | CertificateCreateWithoutUserInput[]
      | CertificateUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CertificateCreateOrConnectWithoutUserInput
      | CertificateCreateOrConnectWithoutUserInput[];
    upsert?:
      | CertificateUpsertWithWhereUniqueWithoutUserInput
      | CertificateUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: CertificateCreateManyUserInputEnvelope;
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[];
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[];
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[];
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[];
    update?:
      | CertificateUpdateWithWhereUniqueWithoutUserInput
      | CertificateUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | CertificateUpdateManyWithWhereWithoutUserInput
      | CertificateUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<
      UserCreateWithoutSessionsInput,
      UserUncheckedCreateWithoutSessionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<
      UserCreateWithoutSessionsInput,
      UserUncheckedCreateWithoutSessionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput;
    upsert?: UserUpsertWithoutSessionsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutSessionsInput,
        UserUpdateWithoutSessionsInput
      >,
      UserUncheckedUpdateWithoutSessionsInput
    >;
  };

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<
      UserCreateWithoutAccountsInput,
      UserUncheckedCreateWithoutAccountsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<
      UserCreateWithoutAccountsInput,
      UserUncheckedCreateWithoutAccountsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput;
    upsert?: UserUpsertWithoutAccountsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutAccountsInput,
        UserUpdateWithoutAccountsInput
      >,
      UserUncheckedUpdateWithoutAccountsInput
    >;
  };

  export type UserProfileCreateskillsInput = {
    set: string[];
  };

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<
      UserCreateWithoutProfileInput,
      UserUncheckedCreateWithoutProfileInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserProfileUpdateskillsInput = {
    set?: string[];
    push?: string | string[];
  };

  export type EnumTalentVisibilityFieldUpdateOperationsInput = {
    set?: $Enums.TalentVisibility;
  };

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<
      UserCreateWithoutProfileInput,
      UserUncheckedCreateWithoutProfileInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput;
    upsert?: UserUpsertWithoutProfileInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutProfileInput,
        UserUpdateWithoutProfileInput
      >,
      UserUncheckedUpdateWithoutProfileInput
    >;
  };

  export type UserCreateNestedOneWithoutCreatedOrganizationsInput = {
    create?: XOR<
      UserCreateWithoutCreatedOrganizationsInput,
      UserUncheckedCreateWithoutCreatedOrganizationsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCreatedOrganizationsInput;
    connect?: UserWhereUniqueInput;
  };

  export type EventCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          EventCreateWithoutOrganizationInput,
          EventUncheckedCreateWithoutOrganizationInput
        >
      | EventCreateWithoutOrganizationInput[]
      | EventUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | EventCreateOrConnectWithoutOrganizationInput
      | EventCreateOrConnectWithoutOrganizationInput[];
    createMany?: EventCreateManyOrganizationInputEnvelope;
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[];
  };

  export type JobPostingCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          JobPostingCreateWithoutOrganizationInput,
          JobPostingUncheckedCreateWithoutOrganizationInput
        >
      | JobPostingCreateWithoutOrganizationInput[]
      | JobPostingUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | JobPostingCreateOrConnectWithoutOrganizationInput
      | JobPostingCreateOrConnectWithoutOrganizationInput[];
    createMany?: JobPostingCreateManyOrganizationInputEnvelope;
    connect?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[];
  };

  export type ExperienceCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          ExperienceCreateWithoutOrganizationInput,
          ExperienceUncheckedCreateWithoutOrganizationInput
        >
      | ExperienceCreateWithoutOrganizationInput[]
      | ExperienceUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | ExperienceCreateOrConnectWithoutOrganizationInput
      | ExperienceCreateOrConnectWithoutOrganizationInput[];
    createMany?: ExperienceCreateManyOrganizationInputEnvelope;
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[];
  };

  export type CheckInCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          CheckInCreateWithoutOrganizationInput,
          CheckInUncheckedCreateWithoutOrganizationInput
        >
      | CheckInCreateWithoutOrganizationInput[]
      | CheckInUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | CheckInCreateOrConnectWithoutOrganizationInput
      | CheckInCreateOrConnectWithoutOrganizationInput[];
    createMany?: CheckInCreateManyOrganizationInputEnvelope;
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
  };

  export type CertificateCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          CertificateCreateWithoutOrganizationInput,
          CertificateUncheckedCreateWithoutOrganizationInput
        >
      | CertificateCreateWithoutOrganizationInput[]
      | CertificateUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | CertificateCreateOrConnectWithoutOrganizationInput
      | CertificateCreateOrConnectWithoutOrganizationInput[];
    createMany?: CertificateCreateManyOrganizationInputEnvelope;
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[];
  };

  export type EventUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          EventCreateWithoutOrganizationInput,
          EventUncheckedCreateWithoutOrganizationInput
        >
      | EventCreateWithoutOrganizationInput[]
      | EventUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | EventCreateOrConnectWithoutOrganizationInput
      | EventCreateOrConnectWithoutOrganizationInput[];
    createMany?: EventCreateManyOrganizationInputEnvelope;
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[];
  };

  export type JobPostingUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          JobPostingCreateWithoutOrganizationInput,
          JobPostingUncheckedCreateWithoutOrganizationInput
        >
      | JobPostingCreateWithoutOrganizationInput[]
      | JobPostingUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | JobPostingCreateOrConnectWithoutOrganizationInput
      | JobPostingCreateOrConnectWithoutOrganizationInput[];
    createMany?: JobPostingCreateManyOrganizationInputEnvelope;
    connect?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[];
  };

  export type ExperienceUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          ExperienceCreateWithoutOrganizationInput,
          ExperienceUncheckedCreateWithoutOrganizationInput
        >
      | ExperienceCreateWithoutOrganizationInput[]
      | ExperienceUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | ExperienceCreateOrConnectWithoutOrganizationInput
      | ExperienceCreateOrConnectWithoutOrganizationInput[];
    createMany?: ExperienceCreateManyOrganizationInputEnvelope;
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[];
  };

  export type CheckInUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          CheckInCreateWithoutOrganizationInput,
          CheckInUncheckedCreateWithoutOrganizationInput
        >
      | CheckInCreateWithoutOrganizationInput[]
      | CheckInUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | CheckInCreateOrConnectWithoutOrganizationInput
      | CheckInCreateOrConnectWithoutOrganizationInput[];
    createMany?: CheckInCreateManyOrganizationInputEnvelope;
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
  };

  export type CertificateUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          CertificateCreateWithoutOrganizationInput,
          CertificateUncheckedCreateWithoutOrganizationInput
        >
      | CertificateCreateWithoutOrganizationInput[]
      | CertificateUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | CertificateCreateOrConnectWithoutOrganizationInput
      | CertificateCreateOrConnectWithoutOrganizationInput[];
    createMany?: CertificateCreateManyOrganizationInputEnvelope;
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[];
  };

  export type EnumOrganizationTypeFieldUpdateOperationsInput = {
    set?: $Enums.OrganizationType;
  };

  export type UserUpdateOneRequiredWithoutCreatedOrganizationsNestedInput = {
    create?: XOR<
      UserCreateWithoutCreatedOrganizationsInput,
      UserUncheckedCreateWithoutCreatedOrganizationsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCreatedOrganizationsInput;
    upsert?: UserUpsertWithoutCreatedOrganizationsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutCreatedOrganizationsInput,
        UserUpdateWithoutCreatedOrganizationsInput
      >,
      UserUncheckedUpdateWithoutCreatedOrganizationsInput
    >;
  };

  export type EventUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          EventCreateWithoutOrganizationInput,
          EventUncheckedCreateWithoutOrganizationInput
        >
      | EventCreateWithoutOrganizationInput[]
      | EventUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | EventCreateOrConnectWithoutOrganizationInput
      | EventCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | EventUpsertWithWhereUniqueWithoutOrganizationInput
      | EventUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: EventCreateManyOrganizationInputEnvelope;
    set?: EventWhereUniqueInput | EventWhereUniqueInput[];
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[];
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[];
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[];
    update?:
      | EventUpdateWithWhereUniqueWithoutOrganizationInput
      | EventUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | EventUpdateManyWithWhereWithoutOrganizationInput
      | EventUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[];
  };

  export type JobPostingUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          JobPostingCreateWithoutOrganizationInput,
          JobPostingUncheckedCreateWithoutOrganizationInput
        >
      | JobPostingCreateWithoutOrganizationInput[]
      | JobPostingUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | JobPostingCreateOrConnectWithoutOrganizationInput
      | JobPostingCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | JobPostingUpsertWithWhereUniqueWithoutOrganizationInput
      | JobPostingUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: JobPostingCreateManyOrganizationInputEnvelope;
    set?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[];
    disconnect?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[];
    delete?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[];
    connect?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[];
    update?:
      | JobPostingUpdateWithWhereUniqueWithoutOrganizationInput
      | JobPostingUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | JobPostingUpdateManyWithWhereWithoutOrganizationInput
      | JobPostingUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: JobPostingScalarWhereInput | JobPostingScalarWhereInput[];
  };

  export type ExperienceUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          ExperienceCreateWithoutOrganizationInput,
          ExperienceUncheckedCreateWithoutOrganizationInput
        >
      | ExperienceCreateWithoutOrganizationInput[]
      | ExperienceUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | ExperienceCreateOrConnectWithoutOrganizationInput
      | ExperienceCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | ExperienceUpsertWithWhereUniqueWithoutOrganizationInput
      | ExperienceUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: ExperienceCreateManyOrganizationInputEnvelope;
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[];
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[];
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[];
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[];
    update?:
      | ExperienceUpdateWithWhereUniqueWithoutOrganizationInput
      | ExperienceUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | ExperienceUpdateManyWithWhereWithoutOrganizationInput
      | ExperienceUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[];
  };

  export type CheckInUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          CheckInCreateWithoutOrganizationInput,
          CheckInUncheckedCreateWithoutOrganizationInput
        >
      | CheckInCreateWithoutOrganizationInput[]
      | CheckInUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | CheckInCreateOrConnectWithoutOrganizationInput
      | CheckInCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | CheckInUpsertWithWhereUniqueWithoutOrganizationInput
      | CheckInUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: CheckInCreateManyOrganizationInputEnvelope;
    set?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    disconnect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    delete?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    update?:
      | CheckInUpdateWithWhereUniqueWithoutOrganizationInput
      | CheckInUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | CheckInUpdateManyWithWhereWithoutOrganizationInput
      | CheckInUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: CheckInScalarWhereInput | CheckInScalarWhereInput[];
  };

  export type CertificateUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          CertificateCreateWithoutOrganizationInput,
          CertificateUncheckedCreateWithoutOrganizationInput
        >
      | CertificateCreateWithoutOrganizationInput[]
      | CertificateUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | CertificateCreateOrConnectWithoutOrganizationInput
      | CertificateCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | CertificateUpsertWithWhereUniqueWithoutOrganizationInput
      | CertificateUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: CertificateCreateManyOrganizationInputEnvelope;
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[];
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[];
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[];
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[];
    update?:
      | CertificateUpdateWithWhereUniqueWithoutOrganizationInput
      | CertificateUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | CertificateUpdateManyWithWhereWithoutOrganizationInput
      | CertificateUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[];
  };

  export type EventUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          EventCreateWithoutOrganizationInput,
          EventUncheckedCreateWithoutOrganizationInput
        >
      | EventCreateWithoutOrganizationInput[]
      | EventUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | EventCreateOrConnectWithoutOrganizationInput
      | EventCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | EventUpsertWithWhereUniqueWithoutOrganizationInput
      | EventUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: EventCreateManyOrganizationInputEnvelope;
    set?: EventWhereUniqueInput | EventWhereUniqueInput[];
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[];
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[];
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[];
    update?:
      | EventUpdateWithWhereUniqueWithoutOrganizationInput
      | EventUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | EventUpdateManyWithWhereWithoutOrganizationInput
      | EventUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[];
  };

  export type JobPostingUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          JobPostingCreateWithoutOrganizationInput,
          JobPostingUncheckedCreateWithoutOrganizationInput
        >
      | JobPostingCreateWithoutOrganizationInput[]
      | JobPostingUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | JobPostingCreateOrConnectWithoutOrganizationInput
      | JobPostingCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | JobPostingUpsertWithWhereUniqueWithoutOrganizationInput
      | JobPostingUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: JobPostingCreateManyOrganizationInputEnvelope;
    set?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[];
    disconnect?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[];
    delete?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[];
    connect?: JobPostingWhereUniqueInput | JobPostingWhereUniqueInput[];
    update?:
      | JobPostingUpdateWithWhereUniqueWithoutOrganizationInput
      | JobPostingUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | JobPostingUpdateManyWithWhereWithoutOrganizationInput
      | JobPostingUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: JobPostingScalarWhereInput | JobPostingScalarWhereInput[];
  };

  export type ExperienceUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          ExperienceCreateWithoutOrganizationInput,
          ExperienceUncheckedCreateWithoutOrganizationInput
        >
      | ExperienceCreateWithoutOrganizationInput[]
      | ExperienceUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | ExperienceCreateOrConnectWithoutOrganizationInput
      | ExperienceCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | ExperienceUpsertWithWhereUniqueWithoutOrganizationInput
      | ExperienceUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: ExperienceCreateManyOrganizationInputEnvelope;
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[];
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[];
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[];
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[];
    update?:
      | ExperienceUpdateWithWhereUniqueWithoutOrganizationInput
      | ExperienceUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | ExperienceUpdateManyWithWhereWithoutOrganizationInput
      | ExperienceUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[];
  };

  export type CheckInUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          CheckInCreateWithoutOrganizationInput,
          CheckInUncheckedCreateWithoutOrganizationInput
        >
      | CheckInCreateWithoutOrganizationInput[]
      | CheckInUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | CheckInCreateOrConnectWithoutOrganizationInput
      | CheckInCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | CheckInUpsertWithWhereUniqueWithoutOrganizationInput
      | CheckInUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: CheckInCreateManyOrganizationInputEnvelope;
    set?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    disconnect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    delete?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    update?:
      | CheckInUpdateWithWhereUniqueWithoutOrganizationInput
      | CheckInUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | CheckInUpdateManyWithWhereWithoutOrganizationInput
      | CheckInUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: CheckInScalarWhereInput | CheckInScalarWhereInput[];
  };

  export type CertificateUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          CertificateCreateWithoutOrganizationInput,
          CertificateUncheckedCreateWithoutOrganizationInput
        >
      | CertificateCreateWithoutOrganizationInput[]
      | CertificateUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | CertificateCreateOrConnectWithoutOrganizationInput
      | CertificateCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | CertificateUpsertWithWhereUniqueWithoutOrganizationInput
      | CertificateUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: CertificateCreateManyOrganizationInputEnvelope;
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[];
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[];
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[];
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[];
    update?:
      | CertificateUpdateWithWhereUniqueWithoutOrganizationInput
      | CertificateUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | CertificateUpdateManyWithWhereWithoutOrganizationInput
      | CertificateUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[];
  };

  export type EventCreateskillsInput = {
    set: string[];
  };

  export type OrganizationCreateNestedOneWithoutEventsInput = {
    create?: XOR<
      OrganizationCreateWithoutEventsInput,
      OrganizationUncheckedCreateWithoutEventsInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutEventsInput;
    connect?: OrganizationWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutEventsCreatedInput = {
    create?: XOR<
      UserCreateWithoutEventsCreatedInput,
      UserUncheckedCreateWithoutEventsCreatedInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutEventsCreatedInput;
    connect?: UserWhereUniqueInput;
  };

  export type CheckInCreateNestedManyWithoutEventInput = {
    create?:
      | XOR<
          CheckInCreateWithoutEventInput,
          CheckInUncheckedCreateWithoutEventInput
        >
      | CheckInCreateWithoutEventInput[]
      | CheckInUncheckedCreateWithoutEventInput[];
    connectOrCreate?:
      | CheckInCreateOrConnectWithoutEventInput
      | CheckInCreateOrConnectWithoutEventInput[];
    createMany?: CheckInCreateManyEventInputEnvelope;
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
  };

  export type ExperienceCreateNestedManyWithoutEventInput = {
    create?:
      | XOR<
          ExperienceCreateWithoutEventInput,
          ExperienceUncheckedCreateWithoutEventInput
        >
      | ExperienceCreateWithoutEventInput[]
      | ExperienceUncheckedCreateWithoutEventInput[];
    connectOrCreate?:
      | ExperienceCreateOrConnectWithoutEventInput
      | ExperienceCreateOrConnectWithoutEventInput[];
    createMany?: ExperienceCreateManyEventInputEnvelope;
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[];
  };

  export type CertificateCreateNestedManyWithoutEventInput = {
    create?:
      | XOR<
          CertificateCreateWithoutEventInput,
          CertificateUncheckedCreateWithoutEventInput
        >
      | CertificateCreateWithoutEventInput[]
      | CertificateUncheckedCreateWithoutEventInput[];
    connectOrCreate?:
      | CertificateCreateOrConnectWithoutEventInput
      | CertificateCreateOrConnectWithoutEventInput[];
    createMany?: CertificateCreateManyEventInputEnvelope;
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[];
  };

  export type CheckInUncheckedCreateNestedManyWithoutEventInput = {
    create?:
      | XOR<
          CheckInCreateWithoutEventInput,
          CheckInUncheckedCreateWithoutEventInput
        >
      | CheckInCreateWithoutEventInput[]
      | CheckInUncheckedCreateWithoutEventInput[];
    connectOrCreate?:
      | CheckInCreateOrConnectWithoutEventInput
      | CheckInCreateOrConnectWithoutEventInput[];
    createMany?: CheckInCreateManyEventInputEnvelope;
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
  };

  export type ExperienceUncheckedCreateNestedManyWithoutEventInput = {
    create?:
      | XOR<
          ExperienceCreateWithoutEventInput,
          ExperienceUncheckedCreateWithoutEventInput
        >
      | ExperienceCreateWithoutEventInput[]
      | ExperienceUncheckedCreateWithoutEventInput[];
    connectOrCreate?:
      | ExperienceCreateOrConnectWithoutEventInput
      | ExperienceCreateOrConnectWithoutEventInput[];
    createMany?: ExperienceCreateManyEventInputEnvelope;
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[];
  };

  export type CertificateUncheckedCreateNestedManyWithoutEventInput = {
    create?:
      | XOR<
          CertificateCreateWithoutEventInput,
          CertificateUncheckedCreateWithoutEventInput
        >
      | CertificateCreateWithoutEventInput[]
      | CertificateUncheckedCreateWithoutEventInput[];
    connectOrCreate?:
      | CertificateCreateOrConnectWithoutEventInput
      | CertificateCreateOrConnectWithoutEventInput[];
    createMany?: CertificateCreateManyEventInputEnvelope;
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[];
  };

  export type EventUpdateskillsInput = {
    set?: string[];
    push?: string | string[];
  };

  export type OrganizationUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<
      OrganizationCreateWithoutEventsInput,
      OrganizationUncheckedCreateWithoutEventsInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutEventsInput;
    upsert?: OrganizationUpsertWithoutEventsInput;
    connect?: OrganizationWhereUniqueInput;
    update?: XOR<
      XOR<
        OrganizationUpdateToOneWithWhereWithoutEventsInput,
        OrganizationUpdateWithoutEventsInput
      >,
      OrganizationUncheckedUpdateWithoutEventsInput
    >;
  };

  export type UserUpdateOneRequiredWithoutEventsCreatedNestedInput = {
    create?: XOR<
      UserCreateWithoutEventsCreatedInput,
      UserUncheckedCreateWithoutEventsCreatedInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutEventsCreatedInput;
    upsert?: UserUpsertWithoutEventsCreatedInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutEventsCreatedInput,
        UserUpdateWithoutEventsCreatedInput
      >,
      UserUncheckedUpdateWithoutEventsCreatedInput
    >;
  };

  export type CheckInUpdateManyWithoutEventNestedInput = {
    create?:
      | XOR<
          CheckInCreateWithoutEventInput,
          CheckInUncheckedCreateWithoutEventInput
        >
      | CheckInCreateWithoutEventInput[]
      | CheckInUncheckedCreateWithoutEventInput[];
    connectOrCreate?:
      | CheckInCreateOrConnectWithoutEventInput
      | CheckInCreateOrConnectWithoutEventInput[];
    upsert?:
      | CheckInUpsertWithWhereUniqueWithoutEventInput
      | CheckInUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: CheckInCreateManyEventInputEnvelope;
    set?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    disconnect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    delete?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    update?:
      | CheckInUpdateWithWhereUniqueWithoutEventInput
      | CheckInUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?:
      | CheckInUpdateManyWithWhereWithoutEventInput
      | CheckInUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: CheckInScalarWhereInput | CheckInScalarWhereInput[];
  };

  export type ExperienceUpdateManyWithoutEventNestedInput = {
    create?:
      | XOR<
          ExperienceCreateWithoutEventInput,
          ExperienceUncheckedCreateWithoutEventInput
        >
      | ExperienceCreateWithoutEventInput[]
      | ExperienceUncheckedCreateWithoutEventInput[];
    connectOrCreate?:
      | ExperienceCreateOrConnectWithoutEventInput
      | ExperienceCreateOrConnectWithoutEventInput[];
    upsert?:
      | ExperienceUpsertWithWhereUniqueWithoutEventInput
      | ExperienceUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: ExperienceCreateManyEventInputEnvelope;
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[];
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[];
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[];
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[];
    update?:
      | ExperienceUpdateWithWhereUniqueWithoutEventInput
      | ExperienceUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?:
      | ExperienceUpdateManyWithWhereWithoutEventInput
      | ExperienceUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[];
  };

  export type CertificateUpdateManyWithoutEventNestedInput = {
    create?:
      | XOR<
          CertificateCreateWithoutEventInput,
          CertificateUncheckedCreateWithoutEventInput
        >
      | CertificateCreateWithoutEventInput[]
      | CertificateUncheckedCreateWithoutEventInput[];
    connectOrCreate?:
      | CertificateCreateOrConnectWithoutEventInput
      | CertificateCreateOrConnectWithoutEventInput[];
    upsert?:
      | CertificateUpsertWithWhereUniqueWithoutEventInput
      | CertificateUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: CertificateCreateManyEventInputEnvelope;
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[];
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[];
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[];
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[];
    update?:
      | CertificateUpdateWithWhereUniqueWithoutEventInput
      | CertificateUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?:
      | CertificateUpdateManyWithWhereWithoutEventInput
      | CertificateUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[];
  };

  export type CheckInUncheckedUpdateManyWithoutEventNestedInput = {
    create?:
      | XOR<
          CheckInCreateWithoutEventInput,
          CheckInUncheckedCreateWithoutEventInput
        >
      | CheckInCreateWithoutEventInput[]
      | CheckInUncheckedCreateWithoutEventInput[];
    connectOrCreate?:
      | CheckInCreateOrConnectWithoutEventInput
      | CheckInCreateOrConnectWithoutEventInput[];
    upsert?:
      | CheckInUpsertWithWhereUniqueWithoutEventInput
      | CheckInUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: CheckInCreateManyEventInputEnvelope;
    set?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    disconnect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    delete?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[];
    update?:
      | CheckInUpdateWithWhereUniqueWithoutEventInput
      | CheckInUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?:
      | CheckInUpdateManyWithWhereWithoutEventInput
      | CheckInUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: CheckInScalarWhereInput | CheckInScalarWhereInput[];
  };

  export type ExperienceUncheckedUpdateManyWithoutEventNestedInput = {
    create?:
      | XOR<
          ExperienceCreateWithoutEventInput,
          ExperienceUncheckedCreateWithoutEventInput
        >
      | ExperienceCreateWithoutEventInput[]
      | ExperienceUncheckedCreateWithoutEventInput[];
    connectOrCreate?:
      | ExperienceCreateOrConnectWithoutEventInput
      | ExperienceCreateOrConnectWithoutEventInput[];
    upsert?:
      | ExperienceUpsertWithWhereUniqueWithoutEventInput
      | ExperienceUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: ExperienceCreateManyEventInputEnvelope;
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[];
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[];
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[];
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[];
    update?:
      | ExperienceUpdateWithWhereUniqueWithoutEventInput
      | ExperienceUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?:
      | ExperienceUpdateManyWithWhereWithoutEventInput
      | ExperienceUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[];
  };

  export type CertificateUncheckedUpdateManyWithoutEventNestedInput = {
    create?:
      | XOR<
          CertificateCreateWithoutEventInput,
          CertificateUncheckedCreateWithoutEventInput
        >
      | CertificateCreateWithoutEventInput[]
      | CertificateUncheckedCreateWithoutEventInput[];
    connectOrCreate?:
      | CertificateCreateOrConnectWithoutEventInput
      | CertificateCreateOrConnectWithoutEventInput[];
    upsert?:
      | CertificateUpsertWithWhereUniqueWithoutEventInput
      | CertificateUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: CertificateCreateManyEventInputEnvelope;
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[];
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[];
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[];
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[];
    update?:
      | CertificateUpdateWithWhereUniqueWithoutEventInput
      | CertificateUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?:
      | CertificateUpdateManyWithWhereWithoutEventInput
      | CertificateUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[];
  };

  export type JobPostingCreateskillsInput = {
    set: string[];
  };

  export type OrganizationCreateNestedOneWithoutJobsInput = {
    create?: XOR<
      OrganizationCreateWithoutJobsInput,
      OrganizationUncheckedCreateWithoutJobsInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutJobsInput;
    connect?: OrganizationWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutJobsCreatedInput = {
    create?: XOR<
      UserCreateWithoutJobsCreatedInput,
      UserUncheckedCreateWithoutJobsCreatedInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutJobsCreatedInput;
    connect?: UserWhereUniqueInput;
  };

  export type JobPostingUpdateskillsInput = {
    set?: string[];
    push?: string | string[];
  };

  export type EnumJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobStatus;
  };

  export type OrganizationUpdateOneRequiredWithoutJobsNestedInput = {
    create?: XOR<
      OrganizationCreateWithoutJobsInput,
      OrganizationUncheckedCreateWithoutJobsInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutJobsInput;
    upsert?: OrganizationUpsertWithoutJobsInput;
    connect?: OrganizationWhereUniqueInput;
    update?: XOR<
      XOR<
        OrganizationUpdateToOneWithWhereWithoutJobsInput,
        OrganizationUpdateWithoutJobsInput
      >,
      OrganizationUncheckedUpdateWithoutJobsInput
    >;
  };

  export type UserUpdateOneRequiredWithoutJobsCreatedNestedInput = {
    create?: XOR<
      UserCreateWithoutJobsCreatedInput,
      UserUncheckedCreateWithoutJobsCreatedInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutJobsCreatedInput;
    upsert?: UserUpsertWithoutJobsCreatedInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutJobsCreatedInput,
        UserUpdateWithoutJobsCreatedInput
      >,
      UserUncheckedUpdateWithoutJobsCreatedInput
    >;
  };

  export type ExperienceCreateskillsInput = {
    set: string[];
  };

  export type UserCreateNestedOneWithoutExperiencesInput = {
    create?: XOR<
      UserCreateWithoutExperiencesInput,
      UserUncheckedCreateWithoutExperiencesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutExperiencesInput;
    connect?: UserWhereUniqueInput;
  };

  export type OrganizationCreateNestedOneWithoutExperiencesInput = {
    create?: XOR<
      OrganizationCreateWithoutExperiencesInput,
      OrganizationUncheckedCreateWithoutExperiencesInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutExperiencesInput;
    connect?: OrganizationWhereUniqueInput;
  };

  export type EventCreateNestedOneWithoutExperiencesInput = {
    create?: XOR<
      EventCreateWithoutExperiencesInput,
      EventUncheckedCreateWithoutExperiencesInput
    >;
    connectOrCreate?: EventCreateOrConnectWithoutExperiencesInput;
    connect?: EventWhereUniqueInput;
  };

  export type EnumExperienceTypeFieldUpdateOperationsInput = {
    set?: $Enums.ExperienceType;
  };

  export type ExperienceUpdateskillsInput = {
    set?: string[];
    push?: string | string[];
  };

  export type EnumVerificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.VerificationStatus;
  };

  export type UserUpdateOneRequiredWithoutExperiencesNestedInput = {
    create?: XOR<
      UserCreateWithoutExperiencesInput,
      UserUncheckedCreateWithoutExperiencesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutExperiencesInput;
    upsert?: UserUpsertWithoutExperiencesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutExperiencesInput,
        UserUpdateWithoutExperiencesInput
      >,
      UserUncheckedUpdateWithoutExperiencesInput
    >;
  };

  export type OrganizationUpdateOneWithoutExperiencesNestedInput = {
    create?: XOR<
      OrganizationCreateWithoutExperiencesInput,
      OrganizationUncheckedCreateWithoutExperiencesInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutExperiencesInput;
    upsert?: OrganizationUpsertWithoutExperiencesInput;
    disconnect?: OrganizationWhereInput | boolean;
    delete?: OrganizationWhereInput | boolean;
    connect?: OrganizationWhereUniqueInput;
    update?: XOR<
      XOR<
        OrganizationUpdateToOneWithWhereWithoutExperiencesInput,
        OrganizationUpdateWithoutExperiencesInput
      >,
      OrganizationUncheckedUpdateWithoutExperiencesInput
    >;
  };

  export type EventUpdateOneWithoutExperiencesNestedInput = {
    create?: XOR<
      EventCreateWithoutExperiencesInput,
      EventUncheckedCreateWithoutExperiencesInput
    >;
    connectOrCreate?: EventCreateOrConnectWithoutExperiencesInput;
    upsert?: EventUpsertWithoutExperiencesInput;
    disconnect?: EventWhereInput | boolean;
    delete?: EventWhereInput | boolean;
    connect?: EventWhereUniqueInput;
    update?: XOR<
      XOR<
        EventUpdateToOneWithWhereWithoutExperiencesInput,
        EventUpdateWithoutExperiencesInput
      >,
      EventUncheckedUpdateWithoutExperiencesInput
    >;
  };

  export type UserCreateNestedOneWithoutCheckInsInput = {
    create?: XOR<
      UserCreateWithoutCheckInsInput,
      UserUncheckedCreateWithoutCheckInsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCheckInsInput;
    connect?: UserWhereUniqueInput;
  };

  export type OrganizationCreateNestedOneWithoutCheckInsInput = {
    create?: XOR<
      OrganizationCreateWithoutCheckInsInput,
      OrganizationUncheckedCreateWithoutCheckInsInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutCheckInsInput;
    connect?: OrganizationWhereUniqueInput;
  };

  export type EventCreateNestedOneWithoutCheckInsInput = {
    create?: XOR<
      EventCreateWithoutCheckInsInput,
      EventUncheckedCreateWithoutCheckInsInput
    >;
    connectOrCreate?: EventCreateOrConnectWithoutCheckInsInput;
    connect?: EventWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutCheckInsAddedInput = {
    create?: XOR<
      UserCreateWithoutCheckInsAddedInput,
      UserUncheckedCreateWithoutCheckInsAddedInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCheckInsAddedInput;
    connect?: UserWhereUniqueInput;
  };

  export type EnumCheckInTypeFieldUpdateOperationsInput = {
    set?: $Enums.CheckInType;
  };

  export type UserUpdateOneRequiredWithoutCheckInsNestedInput = {
    create?: XOR<
      UserCreateWithoutCheckInsInput,
      UserUncheckedCreateWithoutCheckInsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCheckInsInput;
    upsert?: UserUpsertWithoutCheckInsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutCheckInsInput,
        UserUpdateWithoutCheckInsInput
      >,
      UserUncheckedUpdateWithoutCheckInsInput
    >;
  };

  export type OrganizationUpdateOneRequiredWithoutCheckInsNestedInput = {
    create?: XOR<
      OrganizationCreateWithoutCheckInsInput,
      OrganizationUncheckedCreateWithoutCheckInsInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutCheckInsInput;
    upsert?: OrganizationUpsertWithoutCheckInsInput;
    connect?: OrganizationWhereUniqueInput;
    update?: XOR<
      XOR<
        OrganizationUpdateToOneWithWhereWithoutCheckInsInput,
        OrganizationUpdateWithoutCheckInsInput
      >,
      OrganizationUncheckedUpdateWithoutCheckInsInput
    >;
  };

  export type EventUpdateOneWithoutCheckInsNestedInput = {
    create?: XOR<
      EventCreateWithoutCheckInsInput,
      EventUncheckedCreateWithoutCheckInsInput
    >;
    connectOrCreate?: EventCreateOrConnectWithoutCheckInsInput;
    upsert?: EventUpsertWithoutCheckInsInput;
    disconnect?: EventWhereInput | boolean;
    delete?: EventWhereInput | boolean;
    connect?: EventWhereUniqueInput;
    update?: XOR<
      XOR<
        EventUpdateToOneWithWhereWithoutCheckInsInput,
        EventUpdateWithoutCheckInsInput
      >,
      EventUncheckedUpdateWithoutCheckInsInput
    >;
  };

  export type UserUpdateOneWithoutCheckInsAddedNestedInput = {
    create?: XOR<
      UserCreateWithoutCheckInsAddedInput,
      UserUncheckedCreateWithoutCheckInsAddedInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCheckInsAddedInput;
    upsert?: UserUpsertWithoutCheckInsAddedInput;
    disconnect?: UserWhereInput | boolean;
    delete?: UserWhereInput | boolean;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutCheckInsAddedInput,
        UserUpdateWithoutCheckInsAddedInput
      >,
      UserUncheckedUpdateWithoutCheckInsAddedInput
    >;
  };

  export type CertificateCreateskillsInput = {
    set: string[];
  };

  export type UserCreateNestedOneWithoutCertificatesInput = {
    create?: XOR<
      UserCreateWithoutCertificatesInput,
      UserUncheckedCreateWithoutCertificatesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCertificatesInput;
    connect?: UserWhereUniqueInput;
  };

  export type OrganizationCreateNestedOneWithoutCertificatesInput = {
    create?: XOR<
      OrganizationCreateWithoutCertificatesInput,
      OrganizationUncheckedCreateWithoutCertificatesInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutCertificatesInput;
    connect?: OrganizationWhereUniqueInput;
  };

  export type EventCreateNestedOneWithoutCertificatesInput = {
    create?: XOR<
      EventCreateWithoutCertificatesInput,
      EventUncheckedCreateWithoutCertificatesInput
    >;
    connectOrCreate?: EventCreateOrConnectWithoutCertificatesInput;
    connect?: EventWhereUniqueInput;
  };

  export type EnumCertificateTypeFieldUpdateOperationsInput = {
    set?: $Enums.CertificateType;
  };

  export type CertificateUpdateskillsInput = {
    set?: string[];
    push?: string | string[];
  };

  export type UserUpdateOneRequiredWithoutCertificatesNestedInput = {
    create?: XOR<
      UserCreateWithoutCertificatesInput,
      UserUncheckedCreateWithoutCertificatesInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCertificatesInput;
    upsert?: UserUpsertWithoutCertificatesInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutCertificatesInput,
        UserUpdateWithoutCertificatesInput
      >,
      UserUncheckedUpdateWithoutCertificatesInput
    >;
  };

  export type OrganizationUpdateOneWithoutCertificatesNestedInput = {
    create?: XOR<
      OrganizationCreateWithoutCertificatesInput,
      OrganizationUncheckedCreateWithoutCertificatesInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutCertificatesInput;
    upsert?: OrganizationUpsertWithoutCertificatesInput;
    disconnect?: OrganizationWhereInput | boolean;
    delete?: OrganizationWhereInput | boolean;
    connect?: OrganizationWhereUniqueInput;
    update?: XOR<
      XOR<
        OrganizationUpdateToOneWithWhereWithoutCertificatesInput,
        OrganizationUpdateWithoutCertificatesInput
      >,
      OrganizationUncheckedUpdateWithoutCertificatesInput
    >;
  };

  export type EventUpdateOneWithoutCertificatesNestedInput = {
    create?: XOR<
      EventCreateWithoutCertificatesInput,
      EventUncheckedCreateWithoutCertificatesInput
    >;
    connectOrCreate?: EventCreateOrConnectWithoutCertificatesInput;
    upsert?: EventUpsertWithoutCertificatesInput;
    disconnect?: EventWhereInput | boolean;
    delete?: EventWhereInput | boolean;
    connect?: EventWhereUniqueInput;
    update?: XOR<
      XOR<
        EventUpdateToOneWithWhereWithoutCertificatesInput,
        EventUpdateWithoutCertificatesInput
      >,
      EventUncheckedUpdateWithoutCertificatesInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedEnumProfileTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProfileType | EnumProfileTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ProfileType[] | ListEnumProfileTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ProfileType[]
      | ListEnumProfileTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumProfileTypeFilter<$PrismaModel> | $Enums.ProfileType;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      notIn?:
        | Date[]
        | string[]
        | ListDateTimeFieldRefInput<$PrismaModel>
        | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

  export type NestedEnumProfileTypeWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: $Enums.ProfileType | EnumProfileTypeFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.ProfileType[]
        | ListEnumProfileTypeFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.ProfileType[]
        | ListEnumProfileTypeFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumProfileTypeWithAggregatesFilter<$PrismaModel>
        | $Enums.ProfileType;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumProfileTypeFilter<$PrismaModel>;
      _max?: NestedEnumProfileTypeFilter<$PrismaModel>;
    };

  export type NestedEnumTalentVisibilityFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.TalentVisibility
      | EnumTalentVisibilityFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TalentVisibility[]
      | ListEnumTalentVisibilityFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TalentVisibility[]
      | ListEnumTalentVisibilityFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTalentVisibilityFilter<$PrismaModel>
      | $Enums.TalentVisibility;
  };

  export type NestedEnumTalentVisibilityWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.TalentVisibility
      | EnumTalentVisibilityFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TalentVisibility[]
      | ListEnumTalentVisibilityFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TalentVisibility[]
      | ListEnumTalentVisibilityFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTalentVisibilityWithAggregatesFilter<$PrismaModel>
      | $Enums.TalentVisibility;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTalentVisibilityFilter<$PrismaModel>;
    _max?: NestedEnumTalentVisibilityFilter<$PrismaModel>;
  };

  export type NestedEnumOrganizationTypeFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.OrganizationType
      | EnumOrganizationTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.OrganizationType[]
      | ListEnumOrganizationTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.OrganizationType[]
      | ListEnumOrganizationTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumOrganizationTypeFilter<$PrismaModel>
      | $Enums.OrganizationType;
  };

  export type NestedEnumOrganizationTypeWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.OrganizationType
      | EnumOrganizationTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.OrganizationType[]
      | ListEnumOrganizationTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.OrganizationType[]
      | ListEnumOrganizationTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumOrganizationTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.OrganizationType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumOrganizationTypeFilter<$PrismaModel>;
    _max?: NestedEnumOrganizationTypeFilter<$PrismaModel>;
  };

  export type NestedEnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus;
  };

  export type NestedEnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumJobStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.JobStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumJobStatusFilter<$PrismaModel>;
    _max?: NestedEnumJobStatusFilter<$PrismaModel>;
  };

  export type NestedEnumExperienceTypeFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.ExperienceType
      | EnumExperienceTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ExperienceType[]
      | ListEnumExperienceTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ExperienceType[]
      | ListEnumExperienceTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumExperienceTypeFilter<$PrismaModel> | $Enums.ExperienceType;
  };

  export type NestedEnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.VerificationStatus
      | EnumVerificationStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.VerificationStatus[]
      | ListEnumVerificationStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.VerificationStatus[]
      | ListEnumVerificationStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumVerificationStatusFilter<$PrismaModel>
      | $Enums.VerificationStatus;
  };

  export type NestedEnumExperienceTypeWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.ExperienceType
      | EnumExperienceTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ExperienceType[]
      | ListEnumExperienceTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ExperienceType[]
      | ListEnumExperienceTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumExperienceTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.ExperienceType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumExperienceTypeFilter<$PrismaModel>;
    _max?: NestedEnumExperienceTypeFilter<$PrismaModel>;
  };

  export type NestedEnumVerificationStatusWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.VerificationStatus
      | EnumVerificationStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.VerificationStatus[]
      | ListEnumVerificationStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.VerificationStatus[]
      | ListEnumVerificationStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.VerificationStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumVerificationStatusFilter<$PrismaModel>;
    _max?: NestedEnumVerificationStatusFilter<$PrismaModel>;
  };

  export type NestedEnumCheckInTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckInType | EnumCheckInTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.CheckInType[] | ListEnumCheckInTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.CheckInType[]
      | ListEnumCheckInTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumCheckInTypeFilter<$PrismaModel> | $Enums.CheckInType;
  };

  export type NestedEnumCheckInTypeWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: $Enums.CheckInType | EnumCheckInTypeFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.CheckInType[]
        | ListEnumCheckInTypeFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.CheckInType[]
        | ListEnumCheckInTypeFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumCheckInTypeWithAggregatesFilter<$PrismaModel>
        | $Enums.CheckInType;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumCheckInTypeFilter<$PrismaModel>;
      _max?: NestedEnumCheckInTypeFilter<$PrismaModel>;
    };

  export type NestedEnumCertificateTypeFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.CertificateType
      | EnumCertificateTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.CertificateType[]
      | ListEnumCertificateTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.CertificateType[]
      | ListEnumCertificateTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumCertificateTypeFilter<$PrismaModel>
      | $Enums.CertificateType;
  };

  export type NestedEnumCertificateTypeWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.CertificateType
      | EnumCertificateTypeFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.CertificateType[]
      | ListEnumCertificateTypeFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.CertificateType[]
      | ListEnumCertificateTypeFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumCertificateTypeWithAggregatesFilter<$PrismaModel>
      | $Enums.CertificateType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumCertificateTypeFilter<$PrismaModel>;
    _max?: NestedEnumCertificateTypeFilter<$PrismaModel>;
  };

  export type SessionCreateWithoutUserInput = {
    id: string;
    expiresAt: Date | string;
    token: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ipAddress?: string | null;
    userAgent?: string | null;
  };

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string;
    expiresAt: Date | string;
    token: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ipAddress?: string | null;
    userAgent?: string | null;
  };

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput;
    create: XOR<
      SessionCreateWithoutUserInput,
      SessionUncheckedCreateWithoutUserInput
    >;
  };

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type AccountCreateWithoutUserInput = {
    id: string;
    accountId: string;
    providerId: string;
    accessToken?: string | null;
    refreshToken?: string | null;
    idToken?: string | null;
    accessTokenExpiresAt?: Date | string | null;
    refreshTokenExpiresAt?: Date | string | null;
    scope?: string | null;
    password?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string;
    accountId: string;
    providerId: string;
    accessToken?: string | null;
    refreshToken?: string | null;
    idToken?: string | null;
    accessTokenExpiresAt?: Date | string | null;
    refreshTokenExpiresAt?: Date | string | null;
    scope?: string | null;
    password?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput;
    create: XOR<
      AccountCreateWithoutUserInput,
      AccountUncheckedCreateWithoutUserInput
    >;
  };

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type UserProfileCreateWithoutUserInput = {
    id?: string;
    fullName?: string | null;
    headline?: string | null;
    bio?: string | null;
    skills?: UserProfileCreateskillsInput | string[];
    consentTalentPool?: boolean;
    visibility?: $Enums.TalentVisibility;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserProfileUncheckedCreateWithoutUserInput = {
    id?: string;
    fullName?: string | null;
    headline?: string | null;
    bio?: string | null;
    skills?: UserProfileCreateskillsInput | string[];
    consentTalentPool?: boolean;
    visibility?: $Enums.TalentVisibility;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput;
    create: XOR<
      UserProfileCreateWithoutUserInput,
      UserProfileUncheckedCreateWithoutUserInput
    >;
  };

  export type OrganizationCreateWithoutCreatedByInput = {
    id?: string;
    name: string;
    type: $Enums.OrganizationType;
    ssmNumber?: string | null;
    industry?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: EventCreateNestedManyWithoutOrganizationInput;
    jobs?: JobPostingCreateNestedManyWithoutOrganizationInput;
    experiences?: ExperienceCreateNestedManyWithoutOrganizationInput;
    checkIns?: CheckInCreateNestedManyWithoutOrganizationInput;
    certificates?: CertificateCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    name: string;
    type: $Enums.OrganizationType;
    ssmNumber?: string | null;
    industry?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: EventUncheckedCreateNestedManyWithoutOrganizationInput;
    jobs?: JobPostingUncheckedCreateNestedManyWithoutOrganizationInput;
    experiences?: ExperienceUncheckedCreateNestedManyWithoutOrganizationInput;
    checkIns?: CheckInUncheckedCreateNestedManyWithoutOrganizationInput;
    certificates?: CertificateUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationCreateOrConnectWithoutCreatedByInput = {
    where: OrganizationWhereUniqueInput;
    create: XOR<
      OrganizationCreateWithoutCreatedByInput,
      OrganizationUncheckedCreateWithoutCreatedByInput
    >;
  };

  export type OrganizationCreateManyCreatedByInputEnvelope = {
    data:
      | OrganizationCreateManyCreatedByInput
      | OrganizationCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
  };

  export type EventCreateWithoutCreatedByInput = {
    id?: string;
    title: string;
    description?: string | null;
    location?: string | null;
    skills?: EventCreateskillsInput | string[];
    startsAt: Date | string;
    endsAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: OrganizationCreateNestedOneWithoutEventsInput;
    checkIns?: CheckInCreateNestedManyWithoutEventInput;
    experiences?: ExperienceCreateNestedManyWithoutEventInput;
    certificates?: CertificateCreateNestedManyWithoutEventInput;
  };

  export type EventUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    organizationId: string;
    title: string;
    description?: string | null;
    location?: string | null;
    skills?: EventCreateskillsInput | string[];
    startsAt: Date | string;
    endsAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    checkIns?: CheckInUncheckedCreateNestedManyWithoutEventInput;
    experiences?: ExperienceUncheckedCreateNestedManyWithoutEventInput;
    certificates?: CertificateUncheckedCreateNestedManyWithoutEventInput;
  };

  export type EventCreateOrConnectWithoutCreatedByInput = {
    where: EventWhereUniqueInput;
    create: XOR<
      EventCreateWithoutCreatedByInput,
      EventUncheckedCreateWithoutCreatedByInput
    >;
  };

  export type EventCreateManyCreatedByInputEnvelope = {
    data: EventCreateManyCreatedByInput | EventCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
  };

  export type JobPostingCreateWithoutCreatedByInput = {
    id?: string;
    title: string;
    description?: string | null;
    skills?: JobPostingCreateskillsInput | string[];
    status?: $Enums.JobStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: OrganizationCreateNestedOneWithoutJobsInput;
  };

  export type JobPostingUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    organizationId: string;
    title: string;
    description?: string | null;
    skills?: JobPostingCreateskillsInput | string[];
    status?: $Enums.JobStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type JobPostingCreateOrConnectWithoutCreatedByInput = {
    where: JobPostingWhereUniqueInput;
    create: XOR<
      JobPostingCreateWithoutCreatedByInput,
      JobPostingUncheckedCreateWithoutCreatedByInput
    >;
  };

  export type JobPostingCreateManyCreatedByInputEnvelope = {
    data:
      | JobPostingCreateManyCreatedByInput
      | JobPostingCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
  };

  export type ExperienceCreateWithoutUserInput = {
    id?: string;
    type: $Enums.ExperienceType;
    title: string;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    isCurrent?: boolean;
    skills?: ExperienceCreateskillsInput | string[];
    verificationStatus?: $Enums.VerificationStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization?: OrganizationCreateNestedOneWithoutExperiencesInput;
    event?: EventCreateNestedOneWithoutExperiencesInput;
  };

  export type ExperienceUncheckedCreateWithoutUserInput = {
    id?: string;
    organizationId?: string | null;
    eventId?: string | null;
    type: $Enums.ExperienceType;
    title: string;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    isCurrent?: boolean;
    skills?: ExperienceCreateskillsInput | string[];
    verificationStatus?: $Enums.VerificationStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ExperienceCreateOrConnectWithoutUserInput = {
    where: ExperienceWhereUniqueInput;
    create: XOR<
      ExperienceCreateWithoutUserInput,
      ExperienceUncheckedCreateWithoutUserInput
    >;
  };

  export type ExperienceCreateManyUserInputEnvelope = {
    data: ExperienceCreateManyUserInput | ExperienceCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type CheckInCreateWithoutUserInput = {
    id?: string;
    type: $Enums.CheckInType;
    note?: string | null;
    verificationStatus?: $Enums.VerificationStatus;
    createdAt?: Date | string;
    organization: OrganizationCreateNestedOneWithoutCheckInsInput;
    event?: EventCreateNestedOneWithoutCheckInsInput;
    addedBy?: UserCreateNestedOneWithoutCheckInsAddedInput;
  };

  export type CheckInUncheckedCreateWithoutUserInput = {
    id?: string;
    organizationId: string;
    eventId?: string | null;
    type: $Enums.CheckInType;
    note?: string | null;
    verificationStatus?: $Enums.VerificationStatus;
    addedById?: string | null;
    createdAt?: Date | string;
  };

  export type CheckInCreateOrConnectWithoutUserInput = {
    where: CheckInWhereUniqueInput;
    create: XOR<
      CheckInCreateWithoutUserInput,
      CheckInUncheckedCreateWithoutUserInput
    >;
  };

  export type CheckInCreateManyUserInputEnvelope = {
    data: CheckInCreateManyUserInput | CheckInCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type CheckInCreateWithoutAddedByInput = {
    id?: string;
    type: $Enums.CheckInType;
    note?: string | null;
    verificationStatus?: $Enums.VerificationStatus;
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutCheckInsInput;
    organization: OrganizationCreateNestedOneWithoutCheckInsInput;
    event?: EventCreateNestedOneWithoutCheckInsInput;
  };

  export type CheckInUncheckedCreateWithoutAddedByInput = {
    id?: string;
    userId: string;
    organizationId: string;
    eventId?: string | null;
    type: $Enums.CheckInType;
    note?: string | null;
    verificationStatus?: $Enums.VerificationStatus;
    createdAt?: Date | string;
  };

  export type CheckInCreateOrConnectWithoutAddedByInput = {
    where: CheckInWhereUniqueInput;
    create: XOR<
      CheckInCreateWithoutAddedByInput,
      CheckInUncheckedCreateWithoutAddedByInput
    >;
  };

  export type CheckInCreateManyAddedByInputEnvelope = {
    data: CheckInCreateManyAddedByInput | CheckInCreateManyAddedByInput[];
    skipDuplicates?: boolean;
  };

  export type CertificateCreateWithoutUserInput = {
    id?: string;
    type?: $Enums.CertificateType;
    description?: string | null;
    skills?: CertificateCreateskillsInput | string[];
    hash?: string | null;
    title: string;
    issueDate: Date | string;
    url?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization?: OrganizationCreateNestedOneWithoutCertificatesInput;
    event?: EventCreateNestedOneWithoutCertificatesInput;
  };

  export type CertificateUncheckedCreateWithoutUserInput = {
    id?: string;
    organizationId?: string | null;
    eventId?: string | null;
    type?: $Enums.CertificateType;
    description?: string | null;
    skills?: CertificateCreateskillsInput | string[];
    hash?: string | null;
    title: string;
    issueDate: Date | string;
    url?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CertificateCreateOrConnectWithoutUserInput = {
    where: CertificateWhereUniqueInput;
    create: XOR<
      CertificateCreateWithoutUserInput,
      CertificateUncheckedCreateWithoutUserInput
    >;
  };

  export type CertificateCreateManyUserInputEnvelope = {
    data: CertificateCreateManyUserInput | CertificateCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput;
    update: XOR<
      SessionUpdateWithoutUserInput,
      SessionUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      SessionCreateWithoutUserInput,
      SessionUncheckedCreateWithoutUserInput
    >;
  };

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput;
    data: XOR<
      SessionUpdateWithoutUserInput,
      SessionUncheckedUpdateWithoutUserInput
    >;
  };

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput;
    data: XOR<
      SessionUpdateManyMutationInput,
      SessionUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[];
    OR?: SessionScalarWhereInput[];
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[];
    id?: StringFilter<"Session"> | string;
    expiresAt?: DateTimeFilter<"Session"> | Date | string;
    token?: StringFilter<"Session"> | string;
    createdAt?: DateTimeFilter<"Session"> | Date | string;
    updatedAt?: DateTimeFilter<"Session"> | Date | string;
    ipAddress?: StringNullableFilter<"Session"> | string | null;
    userAgent?: StringNullableFilter<"Session"> | string | null;
    userId?: StringFilter<"Session"> | string;
  };

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput;
    update: XOR<
      AccountUpdateWithoutUserInput,
      AccountUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      AccountCreateWithoutUserInput,
      AccountUncheckedCreateWithoutUserInput
    >;
  };

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput;
    data: XOR<
      AccountUpdateWithoutUserInput,
      AccountUncheckedUpdateWithoutUserInput
    >;
  };

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput;
    data: XOR<
      AccountUpdateManyMutationInput,
      AccountUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[];
    OR?: AccountScalarWhereInput[];
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[];
    id?: StringFilter<"Account"> | string;
    accountId?: StringFilter<"Account"> | string;
    providerId?: StringFilter<"Account"> | string;
    userId?: StringFilter<"Account"> | string;
    accessToken?: StringNullableFilter<"Account"> | string | null;
    refreshToken?: StringNullableFilter<"Account"> | string | null;
    idToken?: StringNullableFilter<"Account"> | string | null;
    accessTokenExpiresAt?:
      | DateTimeNullableFilter<"Account">
      | Date
      | string
      | null;
    refreshTokenExpiresAt?:
      | DateTimeNullableFilter<"Account">
      | Date
      | string
      | null;
    scope?: StringNullableFilter<"Account"> | string | null;
    password?: StringNullableFilter<"Account"> | string | null;
    createdAt?: DateTimeFilter<"Account"> | Date | string;
    updatedAt?: DateTimeFilter<"Account"> | Date | string;
  };

  export type UserProfileUpsertWithoutUserInput = {
    update: XOR<
      UserProfileUpdateWithoutUserInput,
      UserProfileUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      UserProfileCreateWithoutUserInput,
      UserProfileUncheckedCreateWithoutUserInput
    >;
    where?: UserProfileWhereInput;
  };

  export type UserProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProfileWhereInput;
    data: XOR<
      UserProfileUpdateWithoutUserInput,
      UserProfileUncheckedUpdateWithoutUserInput
    >;
  };

  export type UserProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    fullName?: NullableStringFieldUpdateOperationsInput | string | null;
    headline?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: UserProfileUpdateskillsInput | string[];
    consentTalentPool?: BoolFieldUpdateOperationsInput | boolean;
    visibility?:
      | EnumTalentVisibilityFieldUpdateOperationsInput
      | $Enums.TalentVisibility;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    fullName?: NullableStringFieldUpdateOperationsInput | string | null;
    headline?: NullableStringFieldUpdateOperationsInput | string | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: UserProfileUpdateskillsInput | string[];
    consentTalentPool?: BoolFieldUpdateOperationsInput | boolean;
    visibility?:
      | EnumTalentVisibilityFieldUpdateOperationsInput
      | $Enums.TalentVisibility;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizationUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: OrganizationWhereUniqueInput;
    update: XOR<
      OrganizationUpdateWithoutCreatedByInput,
      OrganizationUncheckedUpdateWithoutCreatedByInput
    >;
    create: XOR<
      OrganizationCreateWithoutCreatedByInput,
      OrganizationUncheckedCreateWithoutCreatedByInput
    >;
  };

  export type OrganizationUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: OrganizationWhereUniqueInput;
    data: XOR<
      OrganizationUpdateWithoutCreatedByInput,
      OrganizationUncheckedUpdateWithoutCreatedByInput
    >;
  };

  export type OrganizationUpdateManyWithWhereWithoutCreatedByInput = {
    where: OrganizationScalarWhereInput;
    data: XOR<
      OrganizationUpdateManyMutationInput,
      OrganizationUncheckedUpdateManyWithoutCreatedByInput
    >;
  };

  export type OrganizationScalarWhereInput = {
    AND?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[];
    OR?: OrganizationScalarWhereInput[];
    NOT?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[];
    id?: StringFilter<"Organization"> | string;
    name?: StringFilter<"Organization"> | string;
    type?: EnumOrganizationTypeFilter<"Organization"> | $Enums.OrganizationType;
    ssmNumber?: StringNullableFilter<"Organization"> | string | null;
    industry?: StringNullableFilter<"Organization"> | string | null;
    createdById?: StringFilter<"Organization"> | string;
    createdAt?: DateTimeFilter<"Organization"> | Date | string;
    updatedAt?: DateTimeFilter<"Organization"> | Date | string;
  };

  export type EventUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: EventWhereUniqueInput;
    update: XOR<
      EventUpdateWithoutCreatedByInput,
      EventUncheckedUpdateWithoutCreatedByInput
    >;
    create: XOR<
      EventCreateWithoutCreatedByInput,
      EventUncheckedCreateWithoutCreatedByInput
    >;
  };

  export type EventUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: EventWhereUniqueInput;
    data: XOR<
      EventUpdateWithoutCreatedByInput,
      EventUncheckedUpdateWithoutCreatedByInput
    >;
  };

  export type EventUpdateManyWithWhereWithoutCreatedByInput = {
    where: EventScalarWhereInput;
    data: XOR<
      EventUpdateManyMutationInput,
      EventUncheckedUpdateManyWithoutCreatedByInput
    >;
  };

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[];
    OR?: EventScalarWhereInput[];
    NOT?: EventScalarWhereInput | EventScalarWhereInput[];
    id?: StringFilter<"Event"> | string;
    organizationId?: StringFilter<"Event"> | string;
    title?: StringFilter<"Event"> | string;
    description?: StringNullableFilter<"Event"> | string | null;
    location?: StringNullableFilter<"Event"> | string | null;
    skills?: StringNullableListFilter<"Event">;
    startsAt?: DateTimeFilter<"Event"> | Date | string;
    endsAt?: DateTimeNullableFilter<"Event"> | Date | string | null;
    createdById?: StringFilter<"Event"> | string;
    createdAt?: DateTimeFilter<"Event"> | Date | string;
    updatedAt?: DateTimeFilter<"Event"> | Date | string;
  };

  export type JobPostingUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: JobPostingWhereUniqueInput;
    update: XOR<
      JobPostingUpdateWithoutCreatedByInput,
      JobPostingUncheckedUpdateWithoutCreatedByInput
    >;
    create: XOR<
      JobPostingCreateWithoutCreatedByInput,
      JobPostingUncheckedCreateWithoutCreatedByInput
    >;
  };

  export type JobPostingUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: JobPostingWhereUniqueInput;
    data: XOR<
      JobPostingUpdateWithoutCreatedByInput,
      JobPostingUncheckedUpdateWithoutCreatedByInput
    >;
  };

  export type JobPostingUpdateManyWithWhereWithoutCreatedByInput = {
    where: JobPostingScalarWhereInput;
    data: XOR<
      JobPostingUpdateManyMutationInput,
      JobPostingUncheckedUpdateManyWithoutCreatedByInput
    >;
  };

  export type JobPostingScalarWhereInput = {
    AND?: JobPostingScalarWhereInput | JobPostingScalarWhereInput[];
    OR?: JobPostingScalarWhereInput[];
    NOT?: JobPostingScalarWhereInput | JobPostingScalarWhereInput[];
    id?: StringFilter<"JobPosting"> | string;
    organizationId?: StringFilter<"JobPosting"> | string;
    title?: StringFilter<"JobPosting"> | string;
    description?: StringNullableFilter<"JobPosting"> | string | null;
    skills?: StringNullableListFilter<"JobPosting">;
    status?: EnumJobStatusFilter<"JobPosting"> | $Enums.JobStatus;
    createdById?: StringFilter<"JobPosting"> | string;
    createdAt?: DateTimeFilter<"JobPosting"> | Date | string;
    updatedAt?: DateTimeFilter<"JobPosting"> | Date | string;
  };

  export type ExperienceUpsertWithWhereUniqueWithoutUserInput = {
    where: ExperienceWhereUniqueInput;
    update: XOR<
      ExperienceUpdateWithoutUserInput,
      ExperienceUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      ExperienceCreateWithoutUserInput,
      ExperienceUncheckedCreateWithoutUserInput
    >;
  };

  export type ExperienceUpdateWithWhereUniqueWithoutUserInput = {
    where: ExperienceWhereUniqueInput;
    data: XOR<
      ExperienceUpdateWithoutUserInput,
      ExperienceUncheckedUpdateWithoutUserInput
    >;
  };

  export type ExperienceUpdateManyWithWhereWithoutUserInput = {
    where: ExperienceScalarWhereInput;
    data: XOR<
      ExperienceUpdateManyMutationInput,
      ExperienceUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type ExperienceScalarWhereInput = {
    AND?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[];
    OR?: ExperienceScalarWhereInput[];
    NOT?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[];
    id?: StringFilter<"Experience"> | string;
    userId?: StringFilter<"Experience"> | string;
    organizationId?: StringNullableFilter<"Experience"> | string | null;
    eventId?: StringNullableFilter<"Experience"> | string | null;
    type?: EnumExperienceTypeFilter<"Experience"> | $Enums.ExperienceType;
    title?: StringFilter<"Experience"> | string;
    startDate?: DateTimeNullableFilter<"Experience"> | Date | string | null;
    endDate?: DateTimeNullableFilter<"Experience"> | Date | string | null;
    isCurrent?: BoolFilter<"Experience"> | boolean;
    skills?: StringNullableListFilter<"Experience">;
    verificationStatus?:
      | EnumVerificationStatusFilter<"Experience">
      | $Enums.VerificationStatus;
    notes?: StringNullableFilter<"Experience"> | string | null;
    createdAt?: DateTimeFilter<"Experience"> | Date | string;
    updatedAt?: DateTimeFilter<"Experience"> | Date | string;
  };

  export type CheckInUpsertWithWhereUniqueWithoutUserInput = {
    where: CheckInWhereUniqueInput;
    update: XOR<
      CheckInUpdateWithoutUserInput,
      CheckInUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      CheckInCreateWithoutUserInput,
      CheckInUncheckedCreateWithoutUserInput
    >;
  };

  export type CheckInUpdateWithWhereUniqueWithoutUserInput = {
    where: CheckInWhereUniqueInput;
    data: XOR<
      CheckInUpdateWithoutUserInput,
      CheckInUncheckedUpdateWithoutUserInput
    >;
  };

  export type CheckInUpdateManyWithWhereWithoutUserInput = {
    where: CheckInScalarWhereInput;
    data: XOR<
      CheckInUpdateManyMutationInput,
      CheckInUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type CheckInScalarWhereInput = {
    AND?: CheckInScalarWhereInput | CheckInScalarWhereInput[];
    OR?: CheckInScalarWhereInput[];
    NOT?: CheckInScalarWhereInput | CheckInScalarWhereInput[];
    id?: StringFilter<"CheckIn"> | string;
    userId?: StringFilter<"CheckIn"> | string;
    organizationId?: StringFilter<"CheckIn"> | string;
    eventId?: StringNullableFilter<"CheckIn"> | string | null;
    type?: EnumCheckInTypeFilter<"CheckIn"> | $Enums.CheckInType;
    note?: StringNullableFilter<"CheckIn"> | string | null;
    verificationStatus?:
      | EnumVerificationStatusFilter<"CheckIn">
      | $Enums.VerificationStatus;
    addedById?: StringNullableFilter<"CheckIn"> | string | null;
    createdAt?: DateTimeFilter<"CheckIn"> | Date | string;
  };

  export type CheckInUpsertWithWhereUniqueWithoutAddedByInput = {
    where: CheckInWhereUniqueInput;
    update: XOR<
      CheckInUpdateWithoutAddedByInput,
      CheckInUncheckedUpdateWithoutAddedByInput
    >;
    create: XOR<
      CheckInCreateWithoutAddedByInput,
      CheckInUncheckedCreateWithoutAddedByInput
    >;
  };

  export type CheckInUpdateWithWhereUniqueWithoutAddedByInput = {
    where: CheckInWhereUniqueInput;
    data: XOR<
      CheckInUpdateWithoutAddedByInput,
      CheckInUncheckedUpdateWithoutAddedByInput
    >;
  };

  export type CheckInUpdateManyWithWhereWithoutAddedByInput = {
    where: CheckInScalarWhereInput;
    data: XOR<
      CheckInUpdateManyMutationInput,
      CheckInUncheckedUpdateManyWithoutAddedByInput
    >;
  };

  export type CertificateUpsertWithWhereUniqueWithoutUserInput = {
    where: CertificateWhereUniqueInput;
    update: XOR<
      CertificateUpdateWithoutUserInput,
      CertificateUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      CertificateCreateWithoutUserInput,
      CertificateUncheckedCreateWithoutUserInput
    >;
  };

  export type CertificateUpdateWithWhereUniqueWithoutUserInput = {
    where: CertificateWhereUniqueInput;
    data: XOR<
      CertificateUpdateWithoutUserInput,
      CertificateUncheckedUpdateWithoutUserInput
    >;
  };

  export type CertificateUpdateManyWithWhereWithoutUserInput = {
    where: CertificateScalarWhereInput;
    data: XOR<
      CertificateUpdateManyMutationInput,
      CertificateUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type CertificateScalarWhereInput = {
    AND?: CertificateScalarWhereInput | CertificateScalarWhereInput[];
    OR?: CertificateScalarWhereInput[];
    NOT?: CertificateScalarWhereInput | CertificateScalarWhereInput[];
    id?: StringFilter<"Certificate"> | string;
    userId?: StringFilter<"Certificate"> | string;
    organizationId?: StringNullableFilter<"Certificate"> | string | null;
    eventId?: StringNullableFilter<"Certificate"> | string | null;
    type?: EnumCertificateTypeFilter<"Certificate"> | $Enums.CertificateType;
    description?: StringNullableFilter<"Certificate"> | string | null;
    skills?: StringNullableListFilter<"Certificate">;
    hash?: StringNullableFilter<"Certificate"> | string | null;
    title?: StringFilter<"Certificate"> | string;
    issueDate?: DateTimeFilter<"Certificate"> | Date | string;
    url?: StringNullableFilter<"Certificate"> | string | null;
    createdAt?: DateTimeFilter<"Certificate"> | Date | string;
    updatedAt?: DateTimeFilter<"Certificate"> | Date | string;
  };

  export type UserCreateWithoutSessionsInput = {
    id: string;
    name: string;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mykadNumber?: string | null;
    mykadVerifiedAt?: Date | string | null;
    profileType?: $Enums.ProfileType;
    accounts?: AccountCreateNestedManyWithoutUserInput;
    profile?: UserProfileCreateNestedOneWithoutUserInput;
    createdOrganizations?: OrganizationCreateNestedManyWithoutCreatedByInput;
    eventsCreated?: EventCreateNestedManyWithoutCreatedByInput;
    jobsCreated?: JobPostingCreateNestedManyWithoutCreatedByInput;
    experiences?: ExperienceCreateNestedManyWithoutUserInput;
    checkIns?: CheckInCreateNestedManyWithoutUserInput;
    checkInsAdded?: CheckInCreateNestedManyWithoutAddedByInput;
    certificates?: CertificateCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string;
    name: string;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mykadNumber?: string | null;
    mykadVerifiedAt?: Date | string | null;
    profileType?: $Enums.ProfileType;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput;
    createdOrganizations?: OrganizationUncheckedCreateNestedManyWithoutCreatedByInput;
    eventsCreated?: EventUncheckedCreateNestedManyWithoutCreatedByInput;
    jobsCreated?: JobPostingUncheckedCreateNestedManyWithoutCreatedByInput;
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput;
    checkIns?: CheckInUncheckedCreateNestedManyWithoutUserInput;
    checkInsAdded?: CheckInUncheckedCreateNestedManyWithoutAddedByInput;
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutSessionsInput,
      UserUncheckedCreateWithoutSessionsInput
    >;
  };

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<
      UserUpdateWithoutSessionsInput,
      UserUncheckedUpdateWithoutSessionsInput
    >;
    create: XOR<
      UserCreateWithoutSessionsInput,
      UserUncheckedCreateWithoutSessionsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutSessionsInput,
      UserUncheckedUpdateWithoutSessionsInput
    >;
  };

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mykadNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    mykadVerifiedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profileType?:
      | EnumProfileTypeFieldUpdateOperationsInput
      | $Enums.ProfileType;
    accounts?: AccountUpdateManyWithoutUserNestedInput;
    profile?: UserProfileUpdateOneWithoutUserNestedInput;
    createdOrganizations?: OrganizationUpdateManyWithoutCreatedByNestedInput;
    eventsCreated?: EventUpdateManyWithoutCreatedByNestedInput;
    jobsCreated?: JobPostingUpdateManyWithoutCreatedByNestedInput;
    experiences?: ExperienceUpdateManyWithoutUserNestedInput;
    checkIns?: CheckInUpdateManyWithoutUserNestedInput;
    checkInsAdded?: CheckInUpdateManyWithoutAddedByNestedInput;
    certificates?: CertificateUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mykadNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    mykadVerifiedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profileType?:
      | EnumProfileTypeFieldUpdateOperationsInput
      | $Enums.ProfileType;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput;
    createdOrganizations?: OrganizationUncheckedUpdateManyWithoutCreatedByNestedInput;
    eventsCreated?: EventUncheckedUpdateManyWithoutCreatedByNestedInput;
    jobsCreated?: JobPostingUncheckedUpdateManyWithoutCreatedByNestedInput;
    experiences?: ExperienceUncheckedUpdateManyWithoutUserNestedInput;
    checkIns?: CheckInUncheckedUpdateManyWithoutUserNestedInput;
    checkInsAdded?: CheckInUncheckedUpdateManyWithoutAddedByNestedInput;
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutAccountsInput = {
    id: string;
    name: string;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mykadNumber?: string | null;
    mykadVerifiedAt?: Date | string | null;
    profileType?: $Enums.ProfileType;
    sessions?: SessionCreateNestedManyWithoutUserInput;
    profile?: UserProfileCreateNestedOneWithoutUserInput;
    createdOrganizations?: OrganizationCreateNestedManyWithoutCreatedByInput;
    eventsCreated?: EventCreateNestedManyWithoutCreatedByInput;
    jobsCreated?: JobPostingCreateNestedManyWithoutCreatedByInput;
    experiences?: ExperienceCreateNestedManyWithoutUserInput;
    checkIns?: CheckInCreateNestedManyWithoutUserInput;
    checkInsAdded?: CheckInCreateNestedManyWithoutAddedByInput;
    certificates?: CertificateCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string;
    name: string;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mykadNumber?: string | null;
    mykadVerifiedAt?: Date | string | null;
    profileType?: $Enums.ProfileType;
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput;
    createdOrganizations?: OrganizationUncheckedCreateNestedManyWithoutCreatedByInput;
    eventsCreated?: EventUncheckedCreateNestedManyWithoutCreatedByInput;
    jobsCreated?: JobPostingUncheckedCreateNestedManyWithoutCreatedByInput;
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput;
    checkIns?: CheckInUncheckedCreateNestedManyWithoutUserInput;
    checkInsAdded?: CheckInUncheckedCreateNestedManyWithoutAddedByInput;
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutAccountsInput,
      UserUncheckedCreateWithoutAccountsInput
    >;
  };

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<
      UserUpdateWithoutAccountsInput,
      UserUncheckedUpdateWithoutAccountsInput
    >;
    create: XOR<
      UserCreateWithoutAccountsInput,
      UserUncheckedCreateWithoutAccountsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutAccountsInput,
      UserUncheckedUpdateWithoutAccountsInput
    >;
  };

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mykadNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    mykadVerifiedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profileType?:
      | EnumProfileTypeFieldUpdateOperationsInput
      | $Enums.ProfileType;
    sessions?: SessionUpdateManyWithoutUserNestedInput;
    profile?: UserProfileUpdateOneWithoutUserNestedInput;
    createdOrganizations?: OrganizationUpdateManyWithoutCreatedByNestedInput;
    eventsCreated?: EventUpdateManyWithoutCreatedByNestedInput;
    jobsCreated?: JobPostingUpdateManyWithoutCreatedByNestedInput;
    experiences?: ExperienceUpdateManyWithoutUserNestedInput;
    checkIns?: CheckInUpdateManyWithoutUserNestedInput;
    checkInsAdded?: CheckInUpdateManyWithoutAddedByNestedInput;
    certificates?: CertificateUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mykadNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    mykadVerifiedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profileType?:
      | EnumProfileTypeFieldUpdateOperationsInput
      | $Enums.ProfileType;
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput;
    createdOrganizations?: OrganizationUncheckedUpdateManyWithoutCreatedByNestedInput;
    eventsCreated?: EventUncheckedUpdateManyWithoutCreatedByNestedInput;
    jobsCreated?: JobPostingUncheckedUpdateManyWithoutCreatedByNestedInput;
    experiences?: ExperienceUncheckedUpdateManyWithoutUserNestedInput;
    checkIns?: CheckInUncheckedUpdateManyWithoutUserNestedInput;
    checkInsAdded?: CheckInUncheckedUpdateManyWithoutAddedByNestedInput;
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutProfileInput = {
    id: string;
    name: string;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mykadNumber?: string | null;
    mykadVerifiedAt?: Date | string | null;
    profileType?: $Enums.ProfileType;
    sessions?: SessionCreateNestedManyWithoutUserInput;
    accounts?: AccountCreateNestedManyWithoutUserInput;
    createdOrganizations?: OrganizationCreateNestedManyWithoutCreatedByInput;
    eventsCreated?: EventCreateNestedManyWithoutCreatedByInput;
    jobsCreated?: JobPostingCreateNestedManyWithoutCreatedByInput;
    experiences?: ExperienceCreateNestedManyWithoutUserInput;
    checkIns?: CheckInCreateNestedManyWithoutUserInput;
    checkInsAdded?: CheckInCreateNestedManyWithoutAddedByInput;
    certificates?: CertificateCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutProfileInput = {
    id: string;
    name: string;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mykadNumber?: string | null;
    mykadVerifiedAt?: Date | string | null;
    profileType?: $Enums.ProfileType;
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;
    createdOrganizations?: OrganizationUncheckedCreateNestedManyWithoutCreatedByInput;
    eventsCreated?: EventUncheckedCreateNestedManyWithoutCreatedByInput;
    jobsCreated?: JobPostingUncheckedCreateNestedManyWithoutCreatedByInput;
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput;
    checkIns?: CheckInUncheckedCreateNestedManyWithoutUserInput;
    checkInsAdded?: CheckInUncheckedCreateNestedManyWithoutAddedByInput;
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutProfileInput,
      UserUncheckedCreateWithoutProfileInput
    >;
  };

  export type UserUpsertWithoutProfileInput = {
    update: XOR<
      UserUpdateWithoutProfileInput,
      UserUncheckedUpdateWithoutProfileInput
    >;
    create: XOR<
      UserCreateWithoutProfileInput,
      UserUncheckedCreateWithoutProfileInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutProfileInput,
      UserUncheckedUpdateWithoutProfileInput
    >;
  };

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mykadNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    mykadVerifiedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profileType?:
      | EnumProfileTypeFieldUpdateOperationsInput
      | $Enums.ProfileType;
    sessions?: SessionUpdateManyWithoutUserNestedInput;
    accounts?: AccountUpdateManyWithoutUserNestedInput;
    createdOrganizations?: OrganizationUpdateManyWithoutCreatedByNestedInput;
    eventsCreated?: EventUpdateManyWithoutCreatedByNestedInput;
    jobsCreated?: JobPostingUpdateManyWithoutCreatedByNestedInput;
    experiences?: ExperienceUpdateManyWithoutUserNestedInput;
    checkIns?: CheckInUpdateManyWithoutUserNestedInput;
    checkInsAdded?: CheckInUpdateManyWithoutAddedByNestedInput;
    certificates?: CertificateUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mykadNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    mykadVerifiedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profileType?:
      | EnumProfileTypeFieldUpdateOperationsInput
      | $Enums.ProfileType;
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;
    createdOrganizations?: OrganizationUncheckedUpdateManyWithoutCreatedByNestedInput;
    eventsCreated?: EventUncheckedUpdateManyWithoutCreatedByNestedInput;
    jobsCreated?: JobPostingUncheckedUpdateManyWithoutCreatedByNestedInput;
    experiences?: ExperienceUncheckedUpdateManyWithoutUserNestedInput;
    checkIns?: CheckInUncheckedUpdateManyWithoutUserNestedInput;
    checkInsAdded?: CheckInUncheckedUpdateManyWithoutAddedByNestedInput;
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutCreatedOrganizationsInput = {
    id: string;
    name: string;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mykadNumber?: string | null;
    mykadVerifiedAt?: Date | string | null;
    profileType?: $Enums.ProfileType;
    sessions?: SessionCreateNestedManyWithoutUserInput;
    accounts?: AccountCreateNestedManyWithoutUserInput;
    profile?: UserProfileCreateNestedOneWithoutUserInput;
    eventsCreated?: EventCreateNestedManyWithoutCreatedByInput;
    jobsCreated?: JobPostingCreateNestedManyWithoutCreatedByInput;
    experiences?: ExperienceCreateNestedManyWithoutUserInput;
    checkIns?: CheckInCreateNestedManyWithoutUserInput;
    checkInsAdded?: CheckInCreateNestedManyWithoutAddedByInput;
    certificates?: CertificateCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutCreatedOrganizationsInput = {
    id: string;
    name: string;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mykadNumber?: string | null;
    mykadVerifiedAt?: Date | string | null;
    profileType?: $Enums.ProfileType;
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput;
    eventsCreated?: EventUncheckedCreateNestedManyWithoutCreatedByInput;
    jobsCreated?: JobPostingUncheckedCreateNestedManyWithoutCreatedByInput;
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput;
    checkIns?: CheckInUncheckedCreateNestedManyWithoutUserInput;
    checkInsAdded?: CheckInUncheckedCreateNestedManyWithoutAddedByInput;
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutCreatedOrganizationsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutCreatedOrganizationsInput,
      UserUncheckedCreateWithoutCreatedOrganizationsInput
    >;
  };

  export type EventCreateWithoutOrganizationInput = {
    id?: string;
    title: string;
    description?: string | null;
    location?: string | null;
    skills?: EventCreateskillsInput | string[];
    startsAt: Date | string;
    endsAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy: UserCreateNestedOneWithoutEventsCreatedInput;
    checkIns?: CheckInCreateNestedManyWithoutEventInput;
    experiences?: ExperienceCreateNestedManyWithoutEventInput;
    certificates?: CertificateCreateNestedManyWithoutEventInput;
  };

  export type EventUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    title: string;
    description?: string | null;
    location?: string | null;
    skills?: EventCreateskillsInput | string[];
    startsAt: Date | string;
    endsAt?: Date | string | null;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    checkIns?: CheckInUncheckedCreateNestedManyWithoutEventInput;
    experiences?: ExperienceUncheckedCreateNestedManyWithoutEventInput;
    certificates?: CertificateUncheckedCreateNestedManyWithoutEventInput;
  };

  export type EventCreateOrConnectWithoutOrganizationInput = {
    where: EventWhereUniqueInput;
    create: XOR<
      EventCreateWithoutOrganizationInput,
      EventUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type EventCreateManyOrganizationInputEnvelope = {
    data: EventCreateManyOrganizationInput | EventCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type JobPostingCreateWithoutOrganizationInput = {
    id?: string;
    title: string;
    description?: string | null;
    skills?: JobPostingCreateskillsInput | string[];
    status?: $Enums.JobStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy: UserCreateNestedOneWithoutJobsCreatedInput;
  };

  export type JobPostingUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    title: string;
    description?: string | null;
    skills?: JobPostingCreateskillsInput | string[];
    status?: $Enums.JobStatus;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type JobPostingCreateOrConnectWithoutOrganizationInput = {
    where: JobPostingWhereUniqueInput;
    create: XOR<
      JobPostingCreateWithoutOrganizationInput,
      JobPostingUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type JobPostingCreateManyOrganizationInputEnvelope = {
    data:
      | JobPostingCreateManyOrganizationInput
      | JobPostingCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type ExperienceCreateWithoutOrganizationInput = {
    id?: string;
    type: $Enums.ExperienceType;
    title: string;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    isCurrent?: boolean;
    skills?: ExperienceCreateskillsInput | string[];
    verificationStatus?: $Enums.VerificationStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutExperiencesInput;
    event?: EventCreateNestedOneWithoutExperiencesInput;
  };

  export type ExperienceUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    userId: string;
    eventId?: string | null;
    type: $Enums.ExperienceType;
    title: string;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    isCurrent?: boolean;
    skills?: ExperienceCreateskillsInput | string[];
    verificationStatus?: $Enums.VerificationStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ExperienceCreateOrConnectWithoutOrganizationInput = {
    where: ExperienceWhereUniqueInput;
    create: XOR<
      ExperienceCreateWithoutOrganizationInput,
      ExperienceUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type ExperienceCreateManyOrganizationInputEnvelope = {
    data:
      | ExperienceCreateManyOrganizationInput
      | ExperienceCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type CheckInCreateWithoutOrganizationInput = {
    id?: string;
    type: $Enums.CheckInType;
    note?: string | null;
    verificationStatus?: $Enums.VerificationStatus;
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutCheckInsInput;
    event?: EventCreateNestedOneWithoutCheckInsInput;
    addedBy?: UserCreateNestedOneWithoutCheckInsAddedInput;
  };

  export type CheckInUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    userId: string;
    eventId?: string | null;
    type: $Enums.CheckInType;
    note?: string | null;
    verificationStatus?: $Enums.VerificationStatus;
    addedById?: string | null;
    createdAt?: Date | string;
  };

  export type CheckInCreateOrConnectWithoutOrganizationInput = {
    where: CheckInWhereUniqueInput;
    create: XOR<
      CheckInCreateWithoutOrganizationInput,
      CheckInUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type CheckInCreateManyOrganizationInputEnvelope = {
    data:
      | CheckInCreateManyOrganizationInput
      | CheckInCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type CertificateCreateWithoutOrganizationInput = {
    id?: string;
    type?: $Enums.CertificateType;
    description?: string | null;
    skills?: CertificateCreateskillsInput | string[];
    hash?: string | null;
    title: string;
    issueDate: Date | string;
    url?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutCertificatesInput;
    event?: EventCreateNestedOneWithoutCertificatesInput;
  };

  export type CertificateUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    userId: string;
    eventId?: string | null;
    type?: $Enums.CertificateType;
    description?: string | null;
    skills?: CertificateCreateskillsInput | string[];
    hash?: string | null;
    title: string;
    issueDate: Date | string;
    url?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CertificateCreateOrConnectWithoutOrganizationInput = {
    where: CertificateWhereUniqueInput;
    create: XOR<
      CertificateCreateWithoutOrganizationInput,
      CertificateUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type CertificateCreateManyOrganizationInputEnvelope = {
    data:
      | CertificateCreateManyOrganizationInput
      | CertificateCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutCreatedOrganizationsInput = {
    update: XOR<
      UserUpdateWithoutCreatedOrganizationsInput,
      UserUncheckedUpdateWithoutCreatedOrganizationsInput
    >;
    create: XOR<
      UserCreateWithoutCreatedOrganizationsInput,
      UserUncheckedCreateWithoutCreatedOrganizationsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCreatedOrganizationsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutCreatedOrganizationsInput,
      UserUncheckedUpdateWithoutCreatedOrganizationsInput
    >;
  };

  export type UserUpdateWithoutCreatedOrganizationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mykadNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    mykadVerifiedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profileType?:
      | EnumProfileTypeFieldUpdateOperationsInput
      | $Enums.ProfileType;
    sessions?: SessionUpdateManyWithoutUserNestedInput;
    accounts?: AccountUpdateManyWithoutUserNestedInput;
    profile?: UserProfileUpdateOneWithoutUserNestedInput;
    eventsCreated?: EventUpdateManyWithoutCreatedByNestedInput;
    jobsCreated?: JobPostingUpdateManyWithoutCreatedByNestedInput;
    experiences?: ExperienceUpdateManyWithoutUserNestedInput;
    checkIns?: CheckInUpdateManyWithoutUserNestedInput;
    checkInsAdded?: CheckInUpdateManyWithoutAddedByNestedInput;
    certificates?: CertificateUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutCreatedOrganizationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mykadNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    mykadVerifiedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profileType?:
      | EnumProfileTypeFieldUpdateOperationsInput
      | $Enums.ProfileType;
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput;
    eventsCreated?: EventUncheckedUpdateManyWithoutCreatedByNestedInput;
    jobsCreated?: JobPostingUncheckedUpdateManyWithoutCreatedByNestedInput;
    experiences?: ExperienceUncheckedUpdateManyWithoutUserNestedInput;
    checkIns?: CheckInUncheckedUpdateManyWithoutUserNestedInput;
    checkInsAdded?: CheckInUncheckedUpdateManyWithoutAddedByNestedInput;
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type EventUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: EventWhereUniqueInput;
    update: XOR<
      EventUpdateWithoutOrganizationInput,
      EventUncheckedUpdateWithoutOrganizationInput
    >;
    create: XOR<
      EventCreateWithoutOrganizationInput,
      EventUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type EventUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: EventWhereUniqueInput;
    data: XOR<
      EventUpdateWithoutOrganizationInput,
      EventUncheckedUpdateWithoutOrganizationInput
    >;
  };

  export type EventUpdateManyWithWhereWithoutOrganizationInput = {
    where: EventScalarWhereInput;
    data: XOR<
      EventUpdateManyMutationInput,
      EventUncheckedUpdateManyWithoutOrganizationInput
    >;
  };

  export type JobPostingUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: JobPostingWhereUniqueInput;
    update: XOR<
      JobPostingUpdateWithoutOrganizationInput,
      JobPostingUncheckedUpdateWithoutOrganizationInput
    >;
    create: XOR<
      JobPostingCreateWithoutOrganizationInput,
      JobPostingUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type JobPostingUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: JobPostingWhereUniqueInput;
    data: XOR<
      JobPostingUpdateWithoutOrganizationInput,
      JobPostingUncheckedUpdateWithoutOrganizationInput
    >;
  };

  export type JobPostingUpdateManyWithWhereWithoutOrganizationInput = {
    where: JobPostingScalarWhereInput;
    data: XOR<
      JobPostingUpdateManyMutationInput,
      JobPostingUncheckedUpdateManyWithoutOrganizationInput
    >;
  };

  export type ExperienceUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: ExperienceWhereUniqueInput;
    update: XOR<
      ExperienceUpdateWithoutOrganizationInput,
      ExperienceUncheckedUpdateWithoutOrganizationInput
    >;
    create: XOR<
      ExperienceCreateWithoutOrganizationInput,
      ExperienceUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type ExperienceUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: ExperienceWhereUniqueInput;
    data: XOR<
      ExperienceUpdateWithoutOrganizationInput,
      ExperienceUncheckedUpdateWithoutOrganizationInput
    >;
  };

  export type ExperienceUpdateManyWithWhereWithoutOrganizationInput = {
    where: ExperienceScalarWhereInput;
    data: XOR<
      ExperienceUpdateManyMutationInput,
      ExperienceUncheckedUpdateManyWithoutOrganizationInput
    >;
  };

  export type CheckInUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: CheckInWhereUniqueInput;
    update: XOR<
      CheckInUpdateWithoutOrganizationInput,
      CheckInUncheckedUpdateWithoutOrganizationInput
    >;
    create: XOR<
      CheckInCreateWithoutOrganizationInput,
      CheckInUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type CheckInUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: CheckInWhereUniqueInput;
    data: XOR<
      CheckInUpdateWithoutOrganizationInput,
      CheckInUncheckedUpdateWithoutOrganizationInput
    >;
  };

  export type CheckInUpdateManyWithWhereWithoutOrganizationInput = {
    where: CheckInScalarWhereInput;
    data: XOR<
      CheckInUpdateManyMutationInput,
      CheckInUncheckedUpdateManyWithoutOrganizationInput
    >;
  };

  export type CertificateUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: CertificateWhereUniqueInput;
    update: XOR<
      CertificateUpdateWithoutOrganizationInput,
      CertificateUncheckedUpdateWithoutOrganizationInput
    >;
    create: XOR<
      CertificateCreateWithoutOrganizationInput,
      CertificateUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type CertificateUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: CertificateWhereUniqueInput;
    data: XOR<
      CertificateUpdateWithoutOrganizationInput,
      CertificateUncheckedUpdateWithoutOrganizationInput
    >;
  };

  export type CertificateUpdateManyWithWhereWithoutOrganizationInput = {
    where: CertificateScalarWhereInput;
    data: XOR<
      CertificateUpdateManyMutationInput,
      CertificateUncheckedUpdateManyWithoutOrganizationInput
    >;
  };

  export type OrganizationCreateWithoutEventsInput = {
    id?: string;
    name: string;
    type: $Enums.OrganizationType;
    ssmNumber?: string | null;
    industry?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy: UserCreateNestedOneWithoutCreatedOrganizationsInput;
    jobs?: JobPostingCreateNestedManyWithoutOrganizationInput;
    experiences?: ExperienceCreateNestedManyWithoutOrganizationInput;
    checkIns?: CheckInCreateNestedManyWithoutOrganizationInput;
    certificates?: CertificateCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationUncheckedCreateWithoutEventsInput = {
    id?: string;
    name: string;
    type: $Enums.OrganizationType;
    ssmNumber?: string | null;
    industry?: string | null;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    jobs?: JobPostingUncheckedCreateNestedManyWithoutOrganizationInput;
    experiences?: ExperienceUncheckedCreateNestedManyWithoutOrganizationInput;
    checkIns?: CheckInUncheckedCreateNestedManyWithoutOrganizationInput;
    certificates?: CertificateUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationCreateOrConnectWithoutEventsInput = {
    where: OrganizationWhereUniqueInput;
    create: XOR<
      OrganizationCreateWithoutEventsInput,
      OrganizationUncheckedCreateWithoutEventsInput
    >;
  };

  export type UserCreateWithoutEventsCreatedInput = {
    id: string;
    name: string;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mykadNumber?: string | null;
    mykadVerifiedAt?: Date | string | null;
    profileType?: $Enums.ProfileType;
    sessions?: SessionCreateNestedManyWithoutUserInput;
    accounts?: AccountCreateNestedManyWithoutUserInput;
    profile?: UserProfileCreateNestedOneWithoutUserInput;
    createdOrganizations?: OrganizationCreateNestedManyWithoutCreatedByInput;
    jobsCreated?: JobPostingCreateNestedManyWithoutCreatedByInput;
    experiences?: ExperienceCreateNestedManyWithoutUserInput;
    checkIns?: CheckInCreateNestedManyWithoutUserInput;
    checkInsAdded?: CheckInCreateNestedManyWithoutAddedByInput;
    certificates?: CertificateCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutEventsCreatedInput = {
    id: string;
    name: string;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mykadNumber?: string | null;
    mykadVerifiedAt?: Date | string | null;
    profileType?: $Enums.ProfileType;
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput;
    createdOrganizations?: OrganizationUncheckedCreateNestedManyWithoutCreatedByInput;
    jobsCreated?: JobPostingUncheckedCreateNestedManyWithoutCreatedByInput;
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput;
    checkIns?: CheckInUncheckedCreateNestedManyWithoutUserInput;
    checkInsAdded?: CheckInUncheckedCreateNestedManyWithoutAddedByInput;
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutEventsCreatedInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutEventsCreatedInput,
      UserUncheckedCreateWithoutEventsCreatedInput
    >;
  };

  export type CheckInCreateWithoutEventInput = {
    id?: string;
    type: $Enums.CheckInType;
    note?: string | null;
    verificationStatus?: $Enums.VerificationStatus;
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutCheckInsInput;
    organization: OrganizationCreateNestedOneWithoutCheckInsInput;
    addedBy?: UserCreateNestedOneWithoutCheckInsAddedInput;
  };

  export type CheckInUncheckedCreateWithoutEventInput = {
    id?: string;
    userId: string;
    organizationId: string;
    type: $Enums.CheckInType;
    note?: string | null;
    verificationStatus?: $Enums.VerificationStatus;
    addedById?: string | null;
    createdAt?: Date | string;
  };

  export type CheckInCreateOrConnectWithoutEventInput = {
    where: CheckInWhereUniqueInput;
    create: XOR<
      CheckInCreateWithoutEventInput,
      CheckInUncheckedCreateWithoutEventInput
    >;
  };

  export type CheckInCreateManyEventInputEnvelope = {
    data: CheckInCreateManyEventInput | CheckInCreateManyEventInput[];
    skipDuplicates?: boolean;
  };

  export type ExperienceCreateWithoutEventInput = {
    id?: string;
    type: $Enums.ExperienceType;
    title: string;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    isCurrent?: boolean;
    skills?: ExperienceCreateskillsInput | string[];
    verificationStatus?: $Enums.VerificationStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutExperiencesInput;
    organization?: OrganizationCreateNestedOneWithoutExperiencesInput;
  };

  export type ExperienceUncheckedCreateWithoutEventInput = {
    id?: string;
    userId: string;
    organizationId?: string | null;
    type: $Enums.ExperienceType;
    title: string;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    isCurrent?: boolean;
    skills?: ExperienceCreateskillsInput | string[];
    verificationStatus?: $Enums.VerificationStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ExperienceCreateOrConnectWithoutEventInput = {
    where: ExperienceWhereUniqueInput;
    create: XOR<
      ExperienceCreateWithoutEventInput,
      ExperienceUncheckedCreateWithoutEventInput
    >;
  };

  export type ExperienceCreateManyEventInputEnvelope = {
    data: ExperienceCreateManyEventInput | ExperienceCreateManyEventInput[];
    skipDuplicates?: boolean;
  };

  export type CertificateCreateWithoutEventInput = {
    id?: string;
    type?: $Enums.CertificateType;
    description?: string | null;
    skills?: CertificateCreateskillsInput | string[];
    hash?: string | null;
    title: string;
    issueDate: Date | string;
    url?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutCertificatesInput;
    organization?: OrganizationCreateNestedOneWithoutCertificatesInput;
  };

  export type CertificateUncheckedCreateWithoutEventInput = {
    id?: string;
    userId: string;
    organizationId?: string | null;
    type?: $Enums.CertificateType;
    description?: string | null;
    skills?: CertificateCreateskillsInput | string[];
    hash?: string | null;
    title: string;
    issueDate: Date | string;
    url?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CertificateCreateOrConnectWithoutEventInput = {
    where: CertificateWhereUniqueInput;
    create: XOR<
      CertificateCreateWithoutEventInput,
      CertificateUncheckedCreateWithoutEventInput
    >;
  };

  export type CertificateCreateManyEventInputEnvelope = {
    data: CertificateCreateManyEventInput | CertificateCreateManyEventInput[];
    skipDuplicates?: boolean;
  };

  export type OrganizationUpsertWithoutEventsInput = {
    update: XOR<
      OrganizationUpdateWithoutEventsInput,
      OrganizationUncheckedUpdateWithoutEventsInput
    >;
    create: XOR<
      OrganizationCreateWithoutEventsInput,
      OrganizationUncheckedCreateWithoutEventsInput
    >;
    where?: OrganizationWhereInput;
  };

  export type OrganizationUpdateToOneWithWhereWithoutEventsInput = {
    where?: OrganizationWhereInput;
    data: XOR<
      OrganizationUpdateWithoutEventsInput,
      OrganizationUncheckedUpdateWithoutEventsInput
    >;
  };

  export type OrganizationUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumOrganizationTypeFieldUpdateOperationsInput
      | $Enums.OrganizationType;
    ssmNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: UserUpdateOneRequiredWithoutCreatedOrganizationsNestedInput;
    jobs?: JobPostingUpdateManyWithoutOrganizationNestedInput;
    experiences?: ExperienceUpdateManyWithoutOrganizationNestedInput;
    checkIns?: CheckInUpdateManyWithoutOrganizationNestedInput;
    certificates?: CertificateUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumOrganizationTypeFieldUpdateOperationsInput
      | $Enums.OrganizationType;
    ssmNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    jobs?: JobPostingUncheckedUpdateManyWithoutOrganizationNestedInput;
    experiences?: ExperienceUncheckedUpdateManyWithoutOrganizationNestedInput;
    checkIns?: CheckInUncheckedUpdateManyWithoutOrganizationNestedInput;
    certificates?: CertificateUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type UserUpsertWithoutEventsCreatedInput = {
    update: XOR<
      UserUpdateWithoutEventsCreatedInput,
      UserUncheckedUpdateWithoutEventsCreatedInput
    >;
    create: XOR<
      UserCreateWithoutEventsCreatedInput,
      UserUncheckedCreateWithoutEventsCreatedInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutEventsCreatedInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutEventsCreatedInput,
      UserUncheckedUpdateWithoutEventsCreatedInput
    >;
  };

  export type UserUpdateWithoutEventsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mykadNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    mykadVerifiedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profileType?:
      | EnumProfileTypeFieldUpdateOperationsInput
      | $Enums.ProfileType;
    sessions?: SessionUpdateManyWithoutUserNestedInput;
    accounts?: AccountUpdateManyWithoutUserNestedInput;
    profile?: UserProfileUpdateOneWithoutUserNestedInput;
    createdOrganizations?: OrganizationUpdateManyWithoutCreatedByNestedInput;
    jobsCreated?: JobPostingUpdateManyWithoutCreatedByNestedInput;
    experiences?: ExperienceUpdateManyWithoutUserNestedInput;
    checkIns?: CheckInUpdateManyWithoutUserNestedInput;
    checkInsAdded?: CheckInUpdateManyWithoutAddedByNestedInput;
    certificates?: CertificateUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutEventsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mykadNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    mykadVerifiedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profileType?:
      | EnumProfileTypeFieldUpdateOperationsInput
      | $Enums.ProfileType;
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput;
    createdOrganizations?: OrganizationUncheckedUpdateManyWithoutCreatedByNestedInput;
    jobsCreated?: JobPostingUncheckedUpdateManyWithoutCreatedByNestedInput;
    experiences?: ExperienceUncheckedUpdateManyWithoutUserNestedInput;
    checkIns?: CheckInUncheckedUpdateManyWithoutUserNestedInput;
    checkInsAdded?: CheckInUncheckedUpdateManyWithoutAddedByNestedInput;
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type CheckInUpsertWithWhereUniqueWithoutEventInput = {
    where: CheckInWhereUniqueInput;
    update: XOR<
      CheckInUpdateWithoutEventInput,
      CheckInUncheckedUpdateWithoutEventInput
    >;
    create: XOR<
      CheckInCreateWithoutEventInput,
      CheckInUncheckedCreateWithoutEventInput
    >;
  };

  export type CheckInUpdateWithWhereUniqueWithoutEventInput = {
    where: CheckInWhereUniqueInput;
    data: XOR<
      CheckInUpdateWithoutEventInput,
      CheckInUncheckedUpdateWithoutEventInput
    >;
  };

  export type CheckInUpdateManyWithWhereWithoutEventInput = {
    where: CheckInScalarWhereInput;
    data: XOR<
      CheckInUpdateManyMutationInput,
      CheckInUncheckedUpdateManyWithoutEventInput
    >;
  };

  export type ExperienceUpsertWithWhereUniqueWithoutEventInput = {
    where: ExperienceWhereUniqueInput;
    update: XOR<
      ExperienceUpdateWithoutEventInput,
      ExperienceUncheckedUpdateWithoutEventInput
    >;
    create: XOR<
      ExperienceCreateWithoutEventInput,
      ExperienceUncheckedCreateWithoutEventInput
    >;
  };

  export type ExperienceUpdateWithWhereUniqueWithoutEventInput = {
    where: ExperienceWhereUniqueInput;
    data: XOR<
      ExperienceUpdateWithoutEventInput,
      ExperienceUncheckedUpdateWithoutEventInput
    >;
  };

  export type ExperienceUpdateManyWithWhereWithoutEventInput = {
    where: ExperienceScalarWhereInput;
    data: XOR<
      ExperienceUpdateManyMutationInput,
      ExperienceUncheckedUpdateManyWithoutEventInput
    >;
  };

  export type CertificateUpsertWithWhereUniqueWithoutEventInput = {
    where: CertificateWhereUniqueInput;
    update: XOR<
      CertificateUpdateWithoutEventInput,
      CertificateUncheckedUpdateWithoutEventInput
    >;
    create: XOR<
      CertificateCreateWithoutEventInput,
      CertificateUncheckedCreateWithoutEventInput
    >;
  };

  export type CertificateUpdateWithWhereUniqueWithoutEventInput = {
    where: CertificateWhereUniqueInput;
    data: XOR<
      CertificateUpdateWithoutEventInput,
      CertificateUncheckedUpdateWithoutEventInput
    >;
  };

  export type CertificateUpdateManyWithWhereWithoutEventInput = {
    where: CertificateScalarWhereInput;
    data: XOR<
      CertificateUpdateManyMutationInput,
      CertificateUncheckedUpdateManyWithoutEventInput
    >;
  };

  export type OrganizationCreateWithoutJobsInput = {
    id?: string;
    name: string;
    type: $Enums.OrganizationType;
    ssmNumber?: string | null;
    industry?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy: UserCreateNestedOneWithoutCreatedOrganizationsInput;
    events?: EventCreateNestedManyWithoutOrganizationInput;
    experiences?: ExperienceCreateNestedManyWithoutOrganizationInput;
    checkIns?: CheckInCreateNestedManyWithoutOrganizationInput;
    certificates?: CertificateCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationUncheckedCreateWithoutJobsInput = {
    id?: string;
    name: string;
    type: $Enums.OrganizationType;
    ssmNumber?: string | null;
    industry?: string | null;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: EventUncheckedCreateNestedManyWithoutOrganizationInput;
    experiences?: ExperienceUncheckedCreateNestedManyWithoutOrganizationInput;
    checkIns?: CheckInUncheckedCreateNestedManyWithoutOrganizationInput;
    certificates?: CertificateUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationCreateOrConnectWithoutJobsInput = {
    where: OrganizationWhereUniqueInput;
    create: XOR<
      OrganizationCreateWithoutJobsInput,
      OrganizationUncheckedCreateWithoutJobsInput
    >;
  };

  export type UserCreateWithoutJobsCreatedInput = {
    id: string;
    name: string;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mykadNumber?: string | null;
    mykadVerifiedAt?: Date | string | null;
    profileType?: $Enums.ProfileType;
    sessions?: SessionCreateNestedManyWithoutUserInput;
    accounts?: AccountCreateNestedManyWithoutUserInput;
    profile?: UserProfileCreateNestedOneWithoutUserInput;
    createdOrganizations?: OrganizationCreateNestedManyWithoutCreatedByInput;
    eventsCreated?: EventCreateNestedManyWithoutCreatedByInput;
    experiences?: ExperienceCreateNestedManyWithoutUserInput;
    checkIns?: CheckInCreateNestedManyWithoutUserInput;
    checkInsAdded?: CheckInCreateNestedManyWithoutAddedByInput;
    certificates?: CertificateCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutJobsCreatedInput = {
    id: string;
    name: string;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mykadNumber?: string | null;
    mykadVerifiedAt?: Date | string | null;
    profileType?: $Enums.ProfileType;
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput;
    createdOrganizations?: OrganizationUncheckedCreateNestedManyWithoutCreatedByInput;
    eventsCreated?: EventUncheckedCreateNestedManyWithoutCreatedByInput;
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput;
    checkIns?: CheckInUncheckedCreateNestedManyWithoutUserInput;
    checkInsAdded?: CheckInUncheckedCreateNestedManyWithoutAddedByInput;
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutJobsCreatedInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutJobsCreatedInput,
      UserUncheckedCreateWithoutJobsCreatedInput
    >;
  };

  export type OrganizationUpsertWithoutJobsInput = {
    update: XOR<
      OrganizationUpdateWithoutJobsInput,
      OrganizationUncheckedUpdateWithoutJobsInput
    >;
    create: XOR<
      OrganizationCreateWithoutJobsInput,
      OrganizationUncheckedCreateWithoutJobsInput
    >;
    where?: OrganizationWhereInput;
  };

  export type OrganizationUpdateToOneWithWhereWithoutJobsInput = {
    where?: OrganizationWhereInput;
    data: XOR<
      OrganizationUpdateWithoutJobsInput,
      OrganizationUncheckedUpdateWithoutJobsInput
    >;
  };

  export type OrganizationUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumOrganizationTypeFieldUpdateOperationsInput
      | $Enums.OrganizationType;
    ssmNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: UserUpdateOneRequiredWithoutCreatedOrganizationsNestedInput;
    events?: EventUpdateManyWithoutOrganizationNestedInput;
    experiences?: ExperienceUpdateManyWithoutOrganizationNestedInput;
    checkIns?: CheckInUpdateManyWithoutOrganizationNestedInput;
    certificates?: CertificateUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationUncheckedUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumOrganizationTypeFieldUpdateOperationsInput
      | $Enums.OrganizationType;
    ssmNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    events?: EventUncheckedUpdateManyWithoutOrganizationNestedInput;
    experiences?: ExperienceUncheckedUpdateManyWithoutOrganizationNestedInput;
    checkIns?: CheckInUncheckedUpdateManyWithoutOrganizationNestedInput;
    certificates?: CertificateUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type UserUpsertWithoutJobsCreatedInput = {
    update: XOR<
      UserUpdateWithoutJobsCreatedInput,
      UserUncheckedUpdateWithoutJobsCreatedInput
    >;
    create: XOR<
      UserCreateWithoutJobsCreatedInput,
      UserUncheckedCreateWithoutJobsCreatedInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutJobsCreatedInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutJobsCreatedInput,
      UserUncheckedUpdateWithoutJobsCreatedInput
    >;
  };

  export type UserUpdateWithoutJobsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mykadNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    mykadVerifiedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profileType?:
      | EnumProfileTypeFieldUpdateOperationsInput
      | $Enums.ProfileType;
    sessions?: SessionUpdateManyWithoutUserNestedInput;
    accounts?: AccountUpdateManyWithoutUserNestedInput;
    profile?: UserProfileUpdateOneWithoutUserNestedInput;
    createdOrganizations?: OrganizationUpdateManyWithoutCreatedByNestedInput;
    eventsCreated?: EventUpdateManyWithoutCreatedByNestedInput;
    experiences?: ExperienceUpdateManyWithoutUserNestedInput;
    checkIns?: CheckInUpdateManyWithoutUserNestedInput;
    checkInsAdded?: CheckInUpdateManyWithoutAddedByNestedInput;
    certificates?: CertificateUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutJobsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mykadNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    mykadVerifiedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profileType?:
      | EnumProfileTypeFieldUpdateOperationsInput
      | $Enums.ProfileType;
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput;
    createdOrganizations?: OrganizationUncheckedUpdateManyWithoutCreatedByNestedInput;
    eventsCreated?: EventUncheckedUpdateManyWithoutCreatedByNestedInput;
    experiences?: ExperienceUncheckedUpdateManyWithoutUserNestedInput;
    checkIns?: CheckInUncheckedUpdateManyWithoutUserNestedInput;
    checkInsAdded?: CheckInUncheckedUpdateManyWithoutAddedByNestedInput;
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutExperiencesInput = {
    id: string;
    name: string;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mykadNumber?: string | null;
    mykadVerifiedAt?: Date | string | null;
    profileType?: $Enums.ProfileType;
    sessions?: SessionCreateNestedManyWithoutUserInput;
    accounts?: AccountCreateNestedManyWithoutUserInput;
    profile?: UserProfileCreateNestedOneWithoutUserInput;
    createdOrganizations?: OrganizationCreateNestedManyWithoutCreatedByInput;
    eventsCreated?: EventCreateNestedManyWithoutCreatedByInput;
    jobsCreated?: JobPostingCreateNestedManyWithoutCreatedByInput;
    checkIns?: CheckInCreateNestedManyWithoutUserInput;
    checkInsAdded?: CheckInCreateNestedManyWithoutAddedByInput;
    certificates?: CertificateCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutExperiencesInput = {
    id: string;
    name: string;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mykadNumber?: string | null;
    mykadVerifiedAt?: Date | string | null;
    profileType?: $Enums.ProfileType;
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput;
    createdOrganizations?: OrganizationUncheckedCreateNestedManyWithoutCreatedByInput;
    eventsCreated?: EventUncheckedCreateNestedManyWithoutCreatedByInput;
    jobsCreated?: JobPostingUncheckedCreateNestedManyWithoutCreatedByInput;
    checkIns?: CheckInUncheckedCreateNestedManyWithoutUserInput;
    checkInsAdded?: CheckInUncheckedCreateNestedManyWithoutAddedByInput;
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutExperiencesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutExperiencesInput,
      UserUncheckedCreateWithoutExperiencesInput
    >;
  };

  export type OrganizationCreateWithoutExperiencesInput = {
    id?: string;
    name: string;
    type: $Enums.OrganizationType;
    ssmNumber?: string | null;
    industry?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy: UserCreateNestedOneWithoutCreatedOrganizationsInput;
    events?: EventCreateNestedManyWithoutOrganizationInput;
    jobs?: JobPostingCreateNestedManyWithoutOrganizationInput;
    checkIns?: CheckInCreateNestedManyWithoutOrganizationInput;
    certificates?: CertificateCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationUncheckedCreateWithoutExperiencesInput = {
    id?: string;
    name: string;
    type: $Enums.OrganizationType;
    ssmNumber?: string | null;
    industry?: string | null;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: EventUncheckedCreateNestedManyWithoutOrganizationInput;
    jobs?: JobPostingUncheckedCreateNestedManyWithoutOrganizationInput;
    checkIns?: CheckInUncheckedCreateNestedManyWithoutOrganizationInput;
    certificates?: CertificateUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationCreateOrConnectWithoutExperiencesInput = {
    where: OrganizationWhereUniqueInput;
    create: XOR<
      OrganizationCreateWithoutExperiencesInput,
      OrganizationUncheckedCreateWithoutExperiencesInput
    >;
  };

  export type EventCreateWithoutExperiencesInput = {
    id?: string;
    title: string;
    description?: string | null;
    location?: string | null;
    skills?: EventCreateskillsInput | string[];
    startsAt: Date | string;
    endsAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: OrganizationCreateNestedOneWithoutEventsInput;
    createdBy: UserCreateNestedOneWithoutEventsCreatedInput;
    checkIns?: CheckInCreateNestedManyWithoutEventInput;
    certificates?: CertificateCreateNestedManyWithoutEventInput;
  };

  export type EventUncheckedCreateWithoutExperiencesInput = {
    id?: string;
    organizationId: string;
    title: string;
    description?: string | null;
    location?: string | null;
    skills?: EventCreateskillsInput | string[];
    startsAt: Date | string;
    endsAt?: Date | string | null;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    checkIns?: CheckInUncheckedCreateNestedManyWithoutEventInput;
    certificates?: CertificateUncheckedCreateNestedManyWithoutEventInput;
  };

  export type EventCreateOrConnectWithoutExperiencesInput = {
    where: EventWhereUniqueInput;
    create: XOR<
      EventCreateWithoutExperiencesInput,
      EventUncheckedCreateWithoutExperiencesInput
    >;
  };

  export type UserUpsertWithoutExperiencesInput = {
    update: XOR<
      UserUpdateWithoutExperiencesInput,
      UserUncheckedUpdateWithoutExperiencesInput
    >;
    create: XOR<
      UserCreateWithoutExperiencesInput,
      UserUncheckedCreateWithoutExperiencesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutExperiencesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutExperiencesInput,
      UserUncheckedUpdateWithoutExperiencesInput
    >;
  };

  export type UserUpdateWithoutExperiencesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mykadNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    mykadVerifiedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profileType?:
      | EnumProfileTypeFieldUpdateOperationsInput
      | $Enums.ProfileType;
    sessions?: SessionUpdateManyWithoutUserNestedInput;
    accounts?: AccountUpdateManyWithoutUserNestedInput;
    profile?: UserProfileUpdateOneWithoutUserNestedInput;
    createdOrganizations?: OrganizationUpdateManyWithoutCreatedByNestedInput;
    eventsCreated?: EventUpdateManyWithoutCreatedByNestedInput;
    jobsCreated?: JobPostingUpdateManyWithoutCreatedByNestedInput;
    checkIns?: CheckInUpdateManyWithoutUserNestedInput;
    checkInsAdded?: CheckInUpdateManyWithoutAddedByNestedInput;
    certificates?: CertificateUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutExperiencesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mykadNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    mykadVerifiedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profileType?:
      | EnumProfileTypeFieldUpdateOperationsInput
      | $Enums.ProfileType;
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput;
    createdOrganizations?: OrganizationUncheckedUpdateManyWithoutCreatedByNestedInput;
    eventsCreated?: EventUncheckedUpdateManyWithoutCreatedByNestedInput;
    jobsCreated?: JobPostingUncheckedUpdateManyWithoutCreatedByNestedInput;
    checkIns?: CheckInUncheckedUpdateManyWithoutUserNestedInput;
    checkInsAdded?: CheckInUncheckedUpdateManyWithoutAddedByNestedInput;
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type OrganizationUpsertWithoutExperiencesInput = {
    update: XOR<
      OrganizationUpdateWithoutExperiencesInput,
      OrganizationUncheckedUpdateWithoutExperiencesInput
    >;
    create: XOR<
      OrganizationCreateWithoutExperiencesInput,
      OrganizationUncheckedCreateWithoutExperiencesInput
    >;
    where?: OrganizationWhereInput;
  };

  export type OrganizationUpdateToOneWithWhereWithoutExperiencesInput = {
    where?: OrganizationWhereInput;
    data: XOR<
      OrganizationUpdateWithoutExperiencesInput,
      OrganizationUncheckedUpdateWithoutExperiencesInput
    >;
  };

  export type OrganizationUpdateWithoutExperiencesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumOrganizationTypeFieldUpdateOperationsInput
      | $Enums.OrganizationType;
    ssmNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: UserUpdateOneRequiredWithoutCreatedOrganizationsNestedInput;
    events?: EventUpdateManyWithoutOrganizationNestedInput;
    jobs?: JobPostingUpdateManyWithoutOrganizationNestedInput;
    checkIns?: CheckInUpdateManyWithoutOrganizationNestedInput;
    certificates?: CertificateUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationUncheckedUpdateWithoutExperiencesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumOrganizationTypeFieldUpdateOperationsInput
      | $Enums.OrganizationType;
    ssmNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    events?: EventUncheckedUpdateManyWithoutOrganizationNestedInput;
    jobs?: JobPostingUncheckedUpdateManyWithoutOrganizationNestedInput;
    checkIns?: CheckInUncheckedUpdateManyWithoutOrganizationNestedInput;
    certificates?: CertificateUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type EventUpsertWithoutExperiencesInput = {
    update: XOR<
      EventUpdateWithoutExperiencesInput,
      EventUncheckedUpdateWithoutExperiencesInput
    >;
    create: XOR<
      EventCreateWithoutExperiencesInput,
      EventUncheckedCreateWithoutExperiencesInput
    >;
    where?: EventWhereInput;
  };

  export type EventUpdateToOneWithWhereWithoutExperiencesInput = {
    where?: EventWhereInput;
    data: XOR<
      EventUpdateWithoutExperiencesInput,
      EventUncheckedUpdateWithoutExperiencesInput
    >;
  };

  export type EventUpdateWithoutExperiencesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: EventUpdateskillsInput | string[];
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: OrganizationUpdateOneRequiredWithoutEventsNestedInput;
    createdBy?: UserUpdateOneRequiredWithoutEventsCreatedNestedInput;
    checkIns?: CheckInUpdateManyWithoutEventNestedInput;
    certificates?: CertificateUpdateManyWithoutEventNestedInput;
  };

  export type EventUncheckedUpdateWithoutExperiencesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: EventUpdateskillsInput | string[];
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    checkIns?: CheckInUncheckedUpdateManyWithoutEventNestedInput;
    certificates?: CertificateUncheckedUpdateManyWithoutEventNestedInput;
  };

  export type UserCreateWithoutCheckInsInput = {
    id: string;
    name: string;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mykadNumber?: string | null;
    mykadVerifiedAt?: Date | string | null;
    profileType?: $Enums.ProfileType;
    sessions?: SessionCreateNestedManyWithoutUserInput;
    accounts?: AccountCreateNestedManyWithoutUserInput;
    profile?: UserProfileCreateNestedOneWithoutUserInput;
    createdOrganizations?: OrganizationCreateNestedManyWithoutCreatedByInput;
    eventsCreated?: EventCreateNestedManyWithoutCreatedByInput;
    jobsCreated?: JobPostingCreateNestedManyWithoutCreatedByInput;
    experiences?: ExperienceCreateNestedManyWithoutUserInput;
    checkInsAdded?: CheckInCreateNestedManyWithoutAddedByInput;
    certificates?: CertificateCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutCheckInsInput = {
    id: string;
    name: string;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mykadNumber?: string | null;
    mykadVerifiedAt?: Date | string | null;
    profileType?: $Enums.ProfileType;
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput;
    createdOrganizations?: OrganizationUncheckedCreateNestedManyWithoutCreatedByInput;
    eventsCreated?: EventUncheckedCreateNestedManyWithoutCreatedByInput;
    jobsCreated?: JobPostingUncheckedCreateNestedManyWithoutCreatedByInput;
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput;
    checkInsAdded?: CheckInUncheckedCreateNestedManyWithoutAddedByInput;
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutCheckInsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutCheckInsInput,
      UserUncheckedCreateWithoutCheckInsInput
    >;
  };

  export type OrganizationCreateWithoutCheckInsInput = {
    id?: string;
    name: string;
    type: $Enums.OrganizationType;
    ssmNumber?: string | null;
    industry?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy: UserCreateNestedOneWithoutCreatedOrganizationsInput;
    events?: EventCreateNestedManyWithoutOrganizationInput;
    jobs?: JobPostingCreateNestedManyWithoutOrganizationInput;
    experiences?: ExperienceCreateNestedManyWithoutOrganizationInput;
    certificates?: CertificateCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationUncheckedCreateWithoutCheckInsInput = {
    id?: string;
    name: string;
    type: $Enums.OrganizationType;
    ssmNumber?: string | null;
    industry?: string | null;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: EventUncheckedCreateNestedManyWithoutOrganizationInput;
    jobs?: JobPostingUncheckedCreateNestedManyWithoutOrganizationInput;
    experiences?: ExperienceUncheckedCreateNestedManyWithoutOrganizationInput;
    certificates?: CertificateUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationCreateOrConnectWithoutCheckInsInput = {
    where: OrganizationWhereUniqueInput;
    create: XOR<
      OrganizationCreateWithoutCheckInsInput,
      OrganizationUncheckedCreateWithoutCheckInsInput
    >;
  };

  export type EventCreateWithoutCheckInsInput = {
    id?: string;
    title: string;
    description?: string | null;
    location?: string | null;
    skills?: EventCreateskillsInput | string[];
    startsAt: Date | string;
    endsAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: OrganizationCreateNestedOneWithoutEventsInput;
    createdBy: UserCreateNestedOneWithoutEventsCreatedInput;
    experiences?: ExperienceCreateNestedManyWithoutEventInput;
    certificates?: CertificateCreateNestedManyWithoutEventInput;
  };

  export type EventUncheckedCreateWithoutCheckInsInput = {
    id?: string;
    organizationId: string;
    title: string;
    description?: string | null;
    location?: string | null;
    skills?: EventCreateskillsInput | string[];
    startsAt: Date | string;
    endsAt?: Date | string | null;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    experiences?: ExperienceUncheckedCreateNestedManyWithoutEventInput;
    certificates?: CertificateUncheckedCreateNestedManyWithoutEventInput;
  };

  export type EventCreateOrConnectWithoutCheckInsInput = {
    where: EventWhereUniqueInput;
    create: XOR<
      EventCreateWithoutCheckInsInput,
      EventUncheckedCreateWithoutCheckInsInput
    >;
  };

  export type UserCreateWithoutCheckInsAddedInput = {
    id: string;
    name: string;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mykadNumber?: string | null;
    mykadVerifiedAt?: Date | string | null;
    profileType?: $Enums.ProfileType;
    sessions?: SessionCreateNestedManyWithoutUserInput;
    accounts?: AccountCreateNestedManyWithoutUserInput;
    profile?: UserProfileCreateNestedOneWithoutUserInput;
    createdOrganizations?: OrganizationCreateNestedManyWithoutCreatedByInput;
    eventsCreated?: EventCreateNestedManyWithoutCreatedByInput;
    jobsCreated?: JobPostingCreateNestedManyWithoutCreatedByInput;
    experiences?: ExperienceCreateNestedManyWithoutUserInput;
    checkIns?: CheckInCreateNestedManyWithoutUserInput;
    certificates?: CertificateCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutCheckInsAddedInput = {
    id: string;
    name: string;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mykadNumber?: string | null;
    mykadVerifiedAt?: Date | string | null;
    profileType?: $Enums.ProfileType;
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput;
    createdOrganizations?: OrganizationUncheckedCreateNestedManyWithoutCreatedByInput;
    eventsCreated?: EventUncheckedCreateNestedManyWithoutCreatedByInput;
    jobsCreated?: JobPostingUncheckedCreateNestedManyWithoutCreatedByInput;
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput;
    checkIns?: CheckInUncheckedCreateNestedManyWithoutUserInput;
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutCheckInsAddedInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutCheckInsAddedInput,
      UserUncheckedCreateWithoutCheckInsAddedInput
    >;
  };

  export type UserUpsertWithoutCheckInsInput = {
    update: XOR<
      UserUpdateWithoutCheckInsInput,
      UserUncheckedUpdateWithoutCheckInsInput
    >;
    create: XOR<
      UserCreateWithoutCheckInsInput,
      UserUncheckedCreateWithoutCheckInsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCheckInsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutCheckInsInput,
      UserUncheckedUpdateWithoutCheckInsInput
    >;
  };

  export type UserUpdateWithoutCheckInsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mykadNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    mykadVerifiedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profileType?:
      | EnumProfileTypeFieldUpdateOperationsInput
      | $Enums.ProfileType;
    sessions?: SessionUpdateManyWithoutUserNestedInput;
    accounts?: AccountUpdateManyWithoutUserNestedInput;
    profile?: UserProfileUpdateOneWithoutUserNestedInput;
    createdOrganizations?: OrganizationUpdateManyWithoutCreatedByNestedInput;
    eventsCreated?: EventUpdateManyWithoutCreatedByNestedInput;
    jobsCreated?: JobPostingUpdateManyWithoutCreatedByNestedInput;
    experiences?: ExperienceUpdateManyWithoutUserNestedInput;
    checkInsAdded?: CheckInUpdateManyWithoutAddedByNestedInput;
    certificates?: CertificateUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutCheckInsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mykadNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    mykadVerifiedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profileType?:
      | EnumProfileTypeFieldUpdateOperationsInput
      | $Enums.ProfileType;
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput;
    createdOrganizations?: OrganizationUncheckedUpdateManyWithoutCreatedByNestedInput;
    eventsCreated?: EventUncheckedUpdateManyWithoutCreatedByNestedInput;
    jobsCreated?: JobPostingUncheckedUpdateManyWithoutCreatedByNestedInput;
    experiences?: ExperienceUncheckedUpdateManyWithoutUserNestedInput;
    checkInsAdded?: CheckInUncheckedUpdateManyWithoutAddedByNestedInput;
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type OrganizationUpsertWithoutCheckInsInput = {
    update: XOR<
      OrganizationUpdateWithoutCheckInsInput,
      OrganizationUncheckedUpdateWithoutCheckInsInput
    >;
    create: XOR<
      OrganizationCreateWithoutCheckInsInput,
      OrganizationUncheckedCreateWithoutCheckInsInput
    >;
    where?: OrganizationWhereInput;
  };

  export type OrganizationUpdateToOneWithWhereWithoutCheckInsInput = {
    where?: OrganizationWhereInput;
    data: XOR<
      OrganizationUpdateWithoutCheckInsInput,
      OrganizationUncheckedUpdateWithoutCheckInsInput
    >;
  };

  export type OrganizationUpdateWithoutCheckInsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumOrganizationTypeFieldUpdateOperationsInput
      | $Enums.OrganizationType;
    ssmNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: UserUpdateOneRequiredWithoutCreatedOrganizationsNestedInput;
    events?: EventUpdateManyWithoutOrganizationNestedInput;
    jobs?: JobPostingUpdateManyWithoutOrganizationNestedInput;
    experiences?: ExperienceUpdateManyWithoutOrganizationNestedInput;
    certificates?: CertificateUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationUncheckedUpdateWithoutCheckInsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumOrganizationTypeFieldUpdateOperationsInput
      | $Enums.OrganizationType;
    ssmNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    events?: EventUncheckedUpdateManyWithoutOrganizationNestedInput;
    jobs?: JobPostingUncheckedUpdateManyWithoutOrganizationNestedInput;
    experiences?: ExperienceUncheckedUpdateManyWithoutOrganizationNestedInput;
    certificates?: CertificateUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type EventUpsertWithoutCheckInsInput = {
    update: XOR<
      EventUpdateWithoutCheckInsInput,
      EventUncheckedUpdateWithoutCheckInsInput
    >;
    create: XOR<
      EventCreateWithoutCheckInsInput,
      EventUncheckedCreateWithoutCheckInsInput
    >;
    where?: EventWhereInput;
  };

  export type EventUpdateToOneWithWhereWithoutCheckInsInput = {
    where?: EventWhereInput;
    data: XOR<
      EventUpdateWithoutCheckInsInput,
      EventUncheckedUpdateWithoutCheckInsInput
    >;
  };

  export type EventUpdateWithoutCheckInsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: EventUpdateskillsInput | string[];
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: OrganizationUpdateOneRequiredWithoutEventsNestedInput;
    createdBy?: UserUpdateOneRequiredWithoutEventsCreatedNestedInput;
    experiences?: ExperienceUpdateManyWithoutEventNestedInput;
    certificates?: CertificateUpdateManyWithoutEventNestedInput;
  };

  export type EventUncheckedUpdateWithoutCheckInsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: EventUpdateskillsInput | string[];
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    experiences?: ExperienceUncheckedUpdateManyWithoutEventNestedInput;
    certificates?: CertificateUncheckedUpdateManyWithoutEventNestedInput;
  };

  export type UserUpsertWithoutCheckInsAddedInput = {
    update: XOR<
      UserUpdateWithoutCheckInsAddedInput,
      UserUncheckedUpdateWithoutCheckInsAddedInput
    >;
    create: XOR<
      UserCreateWithoutCheckInsAddedInput,
      UserUncheckedCreateWithoutCheckInsAddedInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCheckInsAddedInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutCheckInsAddedInput,
      UserUncheckedUpdateWithoutCheckInsAddedInput
    >;
  };

  export type UserUpdateWithoutCheckInsAddedInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mykadNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    mykadVerifiedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profileType?:
      | EnumProfileTypeFieldUpdateOperationsInput
      | $Enums.ProfileType;
    sessions?: SessionUpdateManyWithoutUserNestedInput;
    accounts?: AccountUpdateManyWithoutUserNestedInput;
    profile?: UserProfileUpdateOneWithoutUserNestedInput;
    createdOrganizations?: OrganizationUpdateManyWithoutCreatedByNestedInput;
    eventsCreated?: EventUpdateManyWithoutCreatedByNestedInput;
    jobsCreated?: JobPostingUpdateManyWithoutCreatedByNestedInput;
    experiences?: ExperienceUpdateManyWithoutUserNestedInput;
    checkIns?: CheckInUpdateManyWithoutUserNestedInput;
    certificates?: CertificateUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutCheckInsAddedInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mykadNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    mykadVerifiedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profileType?:
      | EnumProfileTypeFieldUpdateOperationsInput
      | $Enums.ProfileType;
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput;
    createdOrganizations?: OrganizationUncheckedUpdateManyWithoutCreatedByNestedInput;
    eventsCreated?: EventUncheckedUpdateManyWithoutCreatedByNestedInput;
    jobsCreated?: JobPostingUncheckedUpdateManyWithoutCreatedByNestedInput;
    experiences?: ExperienceUncheckedUpdateManyWithoutUserNestedInput;
    checkIns?: CheckInUncheckedUpdateManyWithoutUserNestedInput;
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutCertificatesInput = {
    id: string;
    name: string;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mykadNumber?: string | null;
    mykadVerifiedAt?: Date | string | null;
    profileType?: $Enums.ProfileType;
    sessions?: SessionCreateNestedManyWithoutUserInput;
    accounts?: AccountCreateNestedManyWithoutUserInput;
    profile?: UserProfileCreateNestedOneWithoutUserInput;
    createdOrganizations?: OrganizationCreateNestedManyWithoutCreatedByInput;
    eventsCreated?: EventCreateNestedManyWithoutCreatedByInput;
    jobsCreated?: JobPostingCreateNestedManyWithoutCreatedByInput;
    experiences?: ExperienceCreateNestedManyWithoutUserInput;
    checkIns?: CheckInCreateNestedManyWithoutUserInput;
    checkInsAdded?: CheckInCreateNestedManyWithoutAddedByInput;
  };

  export type UserUncheckedCreateWithoutCertificatesInput = {
    id: string;
    name: string;
    email: string;
    emailVerified?: boolean;
    image?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    mykadNumber?: string | null;
    mykadVerifiedAt?: Date | string | null;
    profileType?: $Enums.ProfileType;
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput;
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput;
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput;
    createdOrganizations?: OrganizationUncheckedCreateNestedManyWithoutCreatedByInput;
    eventsCreated?: EventUncheckedCreateNestedManyWithoutCreatedByInput;
    jobsCreated?: JobPostingUncheckedCreateNestedManyWithoutCreatedByInput;
    experiences?: ExperienceUncheckedCreateNestedManyWithoutUserInput;
    checkIns?: CheckInUncheckedCreateNestedManyWithoutUserInput;
    checkInsAdded?: CheckInUncheckedCreateNestedManyWithoutAddedByInput;
  };

  export type UserCreateOrConnectWithoutCertificatesInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutCertificatesInput,
      UserUncheckedCreateWithoutCertificatesInput
    >;
  };

  export type OrganizationCreateWithoutCertificatesInput = {
    id?: string;
    name: string;
    type: $Enums.OrganizationType;
    ssmNumber?: string | null;
    industry?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy: UserCreateNestedOneWithoutCreatedOrganizationsInput;
    events?: EventCreateNestedManyWithoutOrganizationInput;
    jobs?: JobPostingCreateNestedManyWithoutOrganizationInput;
    experiences?: ExperienceCreateNestedManyWithoutOrganizationInput;
    checkIns?: CheckInCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationUncheckedCreateWithoutCertificatesInput = {
    id?: string;
    name: string;
    type: $Enums.OrganizationType;
    ssmNumber?: string | null;
    industry?: string | null;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    events?: EventUncheckedCreateNestedManyWithoutOrganizationInput;
    jobs?: JobPostingUncheckedCreateNestedManyWithoutOrganizationInput;
    experiences?: ExperienceUncheckedCreateNestedManyWithoutOrganizationInput;
    checkIns?: CheckInUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationCreateOrConnectWithoutCertificatesInput = {
    where: OrganizationWhereUniqueInput;
    create: XOR<
      OrganizationCreateWithoutCertificatesInput,
      OrganizationUncheckedCreateWithoutCertificatesInput
    >;
  };

  export type EventCreateWithoutCertificatesInput = {
    id?: string;
    title: string;
    description?: string | null;
    location?: string | null;
    skills?: EventCreateskillsInput | string[];
    startsAt: Date | string;
    endsAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: OrganizationCreateNestedOneWithoutEventsInput;
    createdBy: UserCreateNestedOneWithoutEventsCreatedInput;
    checkIns?: CheckInCreateNestedManyWithoutEventInput;
    experiences?: ExperienceCreateNestedManyWithoutEventInput;
  };

  export type EventUncheckedCreateWithoutCertificatesInput = {
    id?: string;
    organizationId: string;
    title: string;
    description?: string | null;
    location?: string | null;
    skills?: EventCreateskillsInput | string[];
    startsAt: Date | string;
    endsAt?: Date | string | null;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    checkIns?: CheckInUncheckedCreateNestedManyWithoutEventInput;
    experiences?: ExperienceUncheckedCreateNestedManyWithoutEventInput;
  };

  export type EventCreateOrConnectWithoutCertificatesInput = {
    where: EventWhereUniqueInput;
    create: XOR<
      EventCreateWithoutCertificatesInput,
      EventUncheckedCreateWithoutCertificatesInput
    >;
  };

  export type UserUpsertWithoutCertificatesInput = {
    update: XOR<
      UserUpdateWithoutCertificatesInput,
      UserUncheckedUpdateWithoutCertificatesInput
    >;
    create: XOR<
      UserCreateWithoutCertificatesInput,
      UserUncheckedCreateWithoutCertificatesInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCertificatesInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutCertificatesInput,
      UserUncheckedUpdateWithoutCertificatesInput
    >;
  };

  export type UserUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mykadNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    mykadVerifiedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profileType?:
      | EnumProfileTypeFieldUpdateOperationsInput
      | $Enums.ProfileType;
    sessions?: SessionUpdateManyWithoutUserNestedInput;
    accounts?: AccountUpdateManyWithoutUserNestedInput;
    profile?: UserProfileUpdateOneWithoutUserNestedInput;
    createdOrganizations?: OrganizationUpdateManyWithoutCreatedByNestedInput;
    eventsCreated?: EventUpdateManyWithoutCreatedByNestedInput;
    jobsCreated?: JobPostingUpdateManyWithoutCreatedByNestedInput;
    experiences?: ExperienceUpdateManyWithoutUserNestedInput;
    checkIns?: CheckInUpdateManyWithoutUserNestedInput;
    checkInsAdded?: CheckInUpdateManyWithoutAddedByNestedInput;
  };

  export type UserUncheckedUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    emailVerified?: BoolFieldUpdateOperationsInput | boolean;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    mykadNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    mykadVerifiedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    profileType?:
      | EnumProfileTypeFieldUpdateOperationsInput
      | $Enums.ProfileType;
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput;
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput;
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput;
    createdOrganizations?: OrganizationUncheckedUpdateManyWithoutCreatedByNestedInput;
    eventsCreated?: EventUncheckedUpdateManyWithoutCreatedByNestedInput;
    jobsCreated?: JobPostingUncheckedUpdateManyWithoutCreatedByNestedInput;
    experiences?: ExperienceUncheckedUpdateManyWithoutUserNestedInput;
    checkIns?: CheckInUncheckedUpdateManyWithoutUserNestedInput;
    checkInsAdded?: CheckInUncheckedUpdateManyWithoutAddedByNestedInput;
  };

  export type OrganizationUpsertWithoutCertificatesInput = {
    update: XOR<
      OrganizationUpdateWithoutCertificatesInput,
      OrganizationUncheckedUpdateWithoutCertificatesInput
    >;
    create: XOR<
      OrganizationCreateWithoutCertificatesInput,
      OrganizationUncheckedCreateWithoutCertificatesInput
    >;
    where?: OrganizationWhereInput;
  };

  export type OrganizationUpdateToOneWithWhereWithoutCertificatesInput = {
    where?: OrganizationWhereInput;
    data: XOR<
      OrganizationUpdateWithoutCertificatesInput,
      OrganizationUncheckedUpdateWithoutCertificatesInput
    >;
  };

  export type OrganizationUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumOrganizationTypeFieldUpdateOperationsInput
      | $Enums.OrganizationType;
    ssmNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: UserUpdateOneRequiredWithoutCreatedOrganizationsNestedInput;
    events?: EventUpdateManyWithoutOrganizationNestedInput;
    jobs?: JobPostingUpdateManyWithoutOrganizationNestedInput;
    experiences?: ExperienceUpdateManyWithoutOrganizationNestedInput;
    checkIns?: CheckInUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationUncheckedUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumOrganizationTypeFieldUpdateOperationsInput
      | $Enums.OrganizationType;
    ssmNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    events?: EventUncheckedUpdateManyWithoutOrganizationNestedInput;
    jobs?: JobPostingUncheckedUpdateManyWithoutOrganizationNestedInput;
    experiences?: ExperienceUncheckedUpdateManyWithoutOrganizationNestedInput;
    checkIns?: CheckInUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type EventUpsertWithoutCertificatesInput = {
    update: XOR<
      EventUpdateWithoutCertificatesInput,
      EventUncheckedUpdateWithoutCertificatesInput
    >;
    create: XOR<
      EventCreateWithoutCertificatesInput,
      EventUncheckedCreateWithoutCertificatesInput
    >;
    where?: EventWhereInput;
  };

  export type EventUpdateToOneWithWhereWithoutCertificatesInput = {
    where?: EventWhereInput;
    data: XOR<
      EventUpdateWithoutCertificatesInput,
      EventUncheckedUpdateWithoutCertificatesInput
    >;
  };

  export type EventUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: EventUpdateskillsInput | string[];
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: OrganizationUpdateOneRequiredWithoutEventsNestedInput;
    createdBy?: UserUpdateOneRequiredWithoutEventsCreatedNestedInput;
    checkIns?: CheckInUpdateManyWithoutEventNestedInput;
    experiences?: ExperienceUpdateManyWithoutEventNestedInput;
  };

  export type EventUncheckedUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: EventUpdateskillsInput | string[];
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    checkIns?: CheckInUncheckedUpdateManyWithoutEventNestedInput;
    experiences?: ExperienceUncheckedUpdateManyWithoutEventNestedInput;
  };

  export type SessionCreateManyUserInput = {
    id: string;
    expiresAt: Date | string;
    token: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ipAddress?: string | null;
    userAgent?: string | null;
  };

  export type AccountCreateManyUserInput = {
    id: string;
    accountId: string;
    providerId: string;
    accessToken?: string | null;
    refreshToken?: string | null;
    idToken?: string | null;
    accessTokenExpiresAt?: Date | string | null;
    refreshTokenExpiresAt?: Date | string | null;
    scope?: string | null;
    password?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrganizationCreateManyCreatedByInput = {
    id?: string;
    name: string;
    type: $Enums.OrganizationType;
    ssmNumber?: string | null;
    industry?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type EventCreateManyCreatedByInput = {
    id?: string;
    organizationId: string;
    title: string;
    description?: string | null;
    location?: string | null;
    skills?: EventCreateskillsInput | string[];
    startsAt: Date | string;
    endsAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type JobPostingCreateManyCreatedByInput = {
    id?: string;
    organizationId: string;
    title: string;
    description?: string | null;
    skills?: JobPostingCreateskillsInput | string[];
    status?: $Enums.JobStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ExperienceCreateManyUserInput = {
    id?: string;
    organizationId?: string | null;
    eventId?: string | null;
    type: $Enums.ExperienceType;
    title: string;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    isCurrent?: boolean;
    skills?: ExperienceCreateskillsInput | string[];
    verificationStatus?: $Enums.VerificationStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CheckInCreateManyUserInput = {
    id?: string;
    organizationId: string;
    eventId?: string | null;
    type: $Enums.CheckInType;
    note?: string | null;
    verificationStatus?: $Enums.VerificationStatus;
    addedById?: string | null;
    createdAt?: Date | string;
  };

  export type CheckInCreateManyAddedByInput = {
    id?: string;
    userId: string;
    organizationId: string;
    eventId?: string | null;
    type: $Enums.CheckInType;
    note?: string | null;
    verificationStatus?: $Enums.VerificationStatus;
    createdAt?: Date | string;
  };

  export type CertificateCreateManyUserInput = {
    id?: string;
    organizationId?: string | null;
    eventId?: string | null;
    type?: $Enums.CertificateType;
    description?: string | null;
    skills?: CertificateCreateskillsInput | string[];
    hash?: string | null;
    title: string;
    issueDate: Date | string;
    url?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    token?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    token?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    token?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null;
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    accountId?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    idToken?: NullableStringFieldUpdateOperationsInput | string | null;
    accessTokenExpiresAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    refreshTokenExpiresAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    scope?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    accountId?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    idToken?: NullableStringFieldUpdateOperationsInput | string | null;
    accessTokenExpiresAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    refreshTokenExpiresAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    scope?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    accountId?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    idToken?: NullableStringFieldUpdateOperationsInput | string | null;
    accessTokenExpiresAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    refreshTokenExpiresAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    scope?: NullableStringFieldUpdateOperationsInput | string | null;
    password?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizationUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumOrganizationTypeFieldUpdateOperationsInput
      | $Enums.OrganizationType;
    ssmNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    events?: EventUpdateManyWithoutOrganizationNestedInput;
    jobs?: JobPostingUpdateManyWithoutOrganizationNestedInput;
    experiences?: ExperienceUpdateManyWithoutOrganizationNestedInput;
    checkIns?: CheckInUpdateManyWithoutOrganizationNestedInput;
    certificates?: CertificateUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumOrganizationTypeFieldUpdateOperationsInput
      | $Enums.OrganizationType;
    ssmNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    events?: EventUncheckedUpdateManyWithoutOrganizationNestedInput;
    jobs?: JobPostingUncheckedUpdateManyWithoutOrganizationNestedInput;
    experiences?: ExperienceUncheckedUpdateManyWithoutOrganizationNestedInput;
    checkIns?: CheckInUncheckedUpdateManyWithoutOrganizationNestedInput;
    certificates?: CertificateUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumOrganizationTypeFieldUpdateOperationsInput
      | $Enums.OrganizationType;
    ssmNumber?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: EventUpdateskillsInput | string[];
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: OrganizationUpdateOneRequiredWithoutEventsNestedInput;
    checkIns?: CheckInUpdateManyWithoutEventNestedInput;
    experiences?: ExperienceUpdateManyWithoutEventNestedInput;
    certificates?: CertificateUpdateManyWithoutEventNestedInput;
  };

  export type EventUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: EventUpdateskillsInput | string[];
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    checkIns?: CheckInUncheckedUpdateManyWithoutEventNestedInput;
    experiences?: ExperienceUncheckedUpdateManyWithoutEventNestedInput;
    certificates?: CertificateUncheckedUpdateManyWithoutEventNestedInput;
  };

  export type EventUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: EventUpdateskillsInput | string[];
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobPostingUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: JobPostingUpdateskillsInput | string[];
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: OrganizationUpdateOneRequiredWithoutJobsNestedInput;
  };

  export type JobPostingUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: JobPostingUpdateskillsInput | string[];
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobPostingUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: JobPostingUpdateskillsInput | string[];
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ExperienceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumExperienceTypeFieldUpdateOperationsInput | $Enums.ExperienceType;
    title?: StringFieldUpdateOperationsInput | string;
    startDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isCurrent?: BoolFieldUpdateOperationsInput | boolean;
    skills?: ExperienceUpdateskillsInput | string[];
    verificationStatus?:
      | EnumVerificationStatusFieldUpdateOperationsInput
      | $Enums.VerificationStatus;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: OrganizationUpdateOneWithoutExperiencesNestedInput;
    event?: EventUpdateOneWithoutExperiencesNestedInput;
  };

  export type ExperienceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null;
    eventId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumExperienceTypeFieldUpdateOperationsInput | $Enums.ExperienceType;
    title?: StringFieldUpdateOperationsInput | string;
    startDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isCurrent?: BoolFieldUpdateOperationsInput | boolean;
    skills?: ExperienceUpdateskillsInput | string[];
    verificationStatus?:
      | EnumVerificationStatusFieldUpdateOperationsInput
      | $Enums.VerificationStatus;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ExperienceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null;
    eventId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumExperienceTypeFieldUpdateOperationsInput | $Enums.ExperienceType;
    title?: StringFieldUpdateOperationsInput | string;
    startDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isCurrent?: BoolFieldUpdateOperationsInput | boolean;
    skills?: ExperienceUpdateskillsInput | string[];
    verificationStatus?:
      | EnumVerificationStatusFieldUpdateOperationsInput
      | $Enums.VerificationStatus;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CheckInUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumCheckInTypeFieldUpdateOperationsInput | $Enums.CheckInType;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?:
      | EnumVerificationStatusFieldUpdateOperationsInput
      | $Enums.VerificationStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: OrganizationUpdateOneRequiredWithoutCheckInsNestedInput;
    event?: EventUpdateOneWithoutCheckInsNestedInput;
    addedBy?: UserUpdateOneWithoutCheckInsAddedNestedInput;
  };

  export type CheckInUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    eventId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumCheckInTypeFieldUpdateOperationsInput | $Enums.CheckInType;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?:
      | EnumVerificationStatusFieldUpdateOperationsInput
      | $Enums.VerificationStatus;
    addedById?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CheckInUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    eventId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumCheckInTypeFieldUpdateOperationsInput | $Enums.CheckInType;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?:
      | EnumVerificationStatusFieldUpdateOperationsInput
      | $Enums.VerificationStatus;
    addedById?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CheckInUpdateWithoutAddedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumCheckInTypeFieldUpdateOperationsInput | $Enums.CheckInType;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?:
      | EnumVerificationStatusFieldUpdateOperationsInput
      | $Enums.VerificationStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutCheckInsNestedInput;
    organization?: OrganizationUpdateOneRequiredWithoutCheckInsNestedInput;
    event?: EventUpdateOneWithoutCheckInsNestedInput;
  };

  export type CheckInUncheckedUpdateWithoutAddedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    eventId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumCheckInTypeFieldUpdateOperationsInput | $Enums.CheckInType;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?:
      | EnumVerificationStatusFieldUpdateOperationsInput
      | $Enums.VerificationStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CheckInUncheckedUpdateManyWithoutAddedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    eventId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumCheckInTypeFieldUpdateOperationsInput | $Enums.CheckInType;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?:
      | EnumVerificationStatusFieldUpdateOperationsInput
      | $Enums.VerificationStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CertificateUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumCertificateTypeFieldUpdateOperationsInput
      | $Enums.CertificateType;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: CertificateUpdateskillsInput | string[];
    hash?: NullableStringFieldUpdateOperationsInput | string | null;
    title?: StringFieldUpdateOperationsInput | string;
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: OrganizationUpdateOneWithoutCertificatesNestedInput;
    event?: EventUpdateOneWithoutCertificatesNestedInput;
  };

  export type CertificateUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null;
    eventId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?:
      | EnumCertificateTypeFieldUpdateOperationsInput
      | $Enums.CertificateType;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: CertificateUpdateskillsInput | string[];
    hash?: NullableStringFieldUpdateOperationsInput | string | null;
    title?: StringFieldUpdateOperationsInput | string;
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CertificateUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null;
    eventId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?:
      | EnumCertificateTypeFieldUpdateOperationsInput
      | $Enums.CertificateType;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: CertificateUpdateskillsInput | string[];
    hash?: NullableStringFieldUpdateOperationsInput | string | null;
    title?: StringFieldUpdateOperationsInput | string;
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventCreateManyOrganizationInput = {
    id?: string;
    title: string;
    description?: string | null;
    location?: string | null;
    skills?: EventCreateskillsInput | string[];
    startsAt: Date | string;
    endsAt?: Date | string | null;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type JobPostingCreateManyOrganizationInput = {
    id?: string;
    title: string;
    description?: string | null;
    skills?: JobPostingCreateskillsInput | string[];
    status?: $Enums.JobStatus;
    createdById: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ExperienceCreateManyOrganizationInput = {
    id?: string;
    userId: string;
    eventId?: string | null;
    type: $Enums.ExperienceType;
    title: string;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    isCurrent?: boolean;
    skills?: ExperienceCreateskillsInput | string[];
    verificationStatus?: $Enums.VerificationStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CheckInCreateManyOrganizationInput = {
    id?: string;
    userId: string;
    eventId?: string | null;
    type: $Enums.CheckInType;
    note?: string | null;
    verificationStatus?: $Enums.VerificationStatus;
    addedById?: string | null;
    createdAt?: Date | string;
  };

  export type CertificateCreateManyOrganizationInput = {
    id?: string;
    userId: string;
    eventId?: string | null;
    type?: $Enums.CertificateType;
    description?: string | null;
    skills?: CertificateCreateskillsInput | string[];
    hash?: string | null;
    title: string;
    issueDate: Date | string;
    url?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type EventUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: EventUpdateskillsInput | string[];
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: UserUpdateOneRequiredWithoutEventsCreatedNestedInput;
    checkIns?: CheckInUpdateManyWithoutEventNestedInput;
    experiences?: ExperienceUpdateManyWithoutEventNestedInput;
    certificates?: CertificateUpdateManyWithoutEventNestedInput;
  };

  export type EventUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: EventUpdateskillsInput | string[];
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    checkIns?: CheckInUncheckedUpdateManyWithoutEventNestedInput;
    experiences?: ExperienceUncheckedUpdateManyWithoutEventNestedInput;
    certificates?: CertificateUncheckedUpdateManyWithoutEventNestedInput;
  };

  export type EventUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: EventUpdateskillsInput | string[];
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobPostingUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: JobPostingUpdateskillsInput | string[];
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: UserUpdateOneRequiredWithoutJobsCreatedNestedInput;
  };

  export type JobPostingUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: JobPostingUpdateskillsInput | string[];
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobPostingUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: JobPostingUpdateskillsInput | string[];
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
    createdById?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ExperienceUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumExperienceTypeFieldUpdateOperationsInput | $Enums.ExperienceType;
    title?: StringFieldUpdateOperationsInput | string;
    startDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isCurrent?: BoolFieldUpdateOperationsInput | boolean;
    skills?: ExperienceUpdateskillsInput | string[];
    verificationStatus?:
      | EnumVerificationStatusFieldUpdateOperationsInput
      | $Enums.VerificationStatus;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutExperiencesNestedInput;
    event?: EventUpdateOneWithoutExperiencesNestedInput;
  };

  export type ExperienceUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    eventId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumExperienceTypeFieldUpdateOperationsInput | $Enums.ExperienceType;
    title?: StringFieldUpdateOperationsInput | string;
    startDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isCurrent?: BoolFieldUpdateOperationsInput | boolean;
    skills?: ExperienceUpdateskillsInput | string[];
    verificationStatus?:
      | EnumVerificationStatusFieldUpdateOperationsInput
      | $Enums.VerificationStatus;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ExperienceUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    eventId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumExperienceTypeFieldUpdateOperationsInput | $Enums.ExperienceType;
    title?: StringFieldUpdateOperationsInput | string;
    startDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isCurrent?: BoolFieldUpdateOperationsInput | boolean;
    skills?: ExperienceUpdateskillsInput | string[];
    verificationStatus?:
      | EnumVerificationStatusFieldUpdateOperationsInput
      | $Enums.VerificationStatus;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CheckInUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumCheckInTypeFieldUpdateOperationsInput | $Enums.CheckInType;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?:
      | EnumVerificationStatusFieldUpdateOperationsInput
      | $Enums.VerificationStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutCheckInsNestedInput;
    event?: EventUpdateOneWithoutCheckInsNestedInput;
    addedBy?: UserUpdateOneWithoutCheckInsAddedNestedInput;
  };

  export type CheckInUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    eventId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumCheckInTypeFieldUpdateOperationsInput | $Enums.CheckInType;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?:
      | EnumVerificationStatusFieldUpdateOperationsInput
      | $Enums.VerificationStatus;
    addedById?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CheckInUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    eventId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumCheckInTypeFieldUpdateOperationsInput | $Enums.CheckInType;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?:
      | EnumVerificationStatusFieldUpdateOperationsInput
      | $Enums.VerificationStatus;
    addedById?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CertificateUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumCertificateTypeFieldUpdateOperationsInput
      | $Enums.CertificateType;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: CertificateUpdateskillsInput | string[];
    hash?: NullableStringFieldUpdateOperationsInput | string | null;
    title?: StringFieldUpdateOperationsInput | string;
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutCertificatesNestedInput;
    event?: EventUpdateOneWithoutCertificatesNestedInput;
  };

  export type CertificateUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    eventId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?:
      | EnumCertificateTypeFieldUpdateOperationsInput
      | $Enums.CertificateType;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: CertificateUpdateskillsInput | string[];
    hash?: NullableStringFieldUpdateOperationsInput | string | null;
    title?: StringFieldUpdateOperationsInput | string;
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CertificateUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    eventId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?:
      | EnumCertificateTypeFieldUpdateOperationsInput
      | $Enums.CertificateType;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: CertificateUpdateskillsInput | string[];
    hash?: NullableStringFieldUpdateOperationsInput | string | null;
    title?: StringFieldUpdateOperationsInput | string;
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CheckInCreateManyEventInput = {
    id?: string;
    userId: string;
    organizationId: string;
    type: $Enums.CheckInType;
    note?: string | null;
    verificationStatus?: $Enums.VerificationStatus;
    addedById?: string | null;
    createdAt?: Date | string;
  };

  export type ExperienceCreateManyEventInput = {
    id?: string;
    userId: string;
    organizationId?: string | null;
    type: $Enums.ExperienceType;
    title: string;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    isCurrent?: boolean;
    skills?: ExperienceCreateskillsInput | string[];
    verificationStatus?: $Enums.VerificationStatus;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CertificateCreateManyEventInput = {
    id?: string;
    userId: string;
    organizationId?: string | null;
    type?: $Enums.CertificateType;
    description?: string | null;
    skills?: CertificateCreateskillsInput | string[];
    hash?: string | null;
    title: string;
    issueDate: Date | string;
    url?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CheckInUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumCheckInTypeFieldUpdateOperationsInput | $Enums.CheckInType;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?:
      | EnumVerificationStatusFieldUpdateOperationsInput
      | $Enums.VerificationStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutCheckInsNestedInput;
    organization?: OrganizationUpdateOneRequiredWithoutCheckInsNestedInput;
    addedBy?: UserUpdateOneWithoutCheckInsAddedNestedInput;
  };

  export type CheckInUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    type?: EnumCheckInTypeFieldUpdateOperationsInput | $Enums.CheckInType;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?:
      | EnumVerificationStatusFieldUpdateOperationsInput
      | $Enums.VerificationStatus;
    addedById?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CheckInUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    type?: EnumCheckInTypeFieldUpdateOperationsInput | $Enums.CheckInType;
    note?: NullableStringFieldUpdateOperationsInput | string | null;
    verificationStatus?:
      | EnumVerificationStatusFieldUpdateOperationsInput
      | $Enums.VerificationStatus;
    addedById?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ExperienceUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?: EnumExperienceTypeFieldUpdateOperationsInput | $Enums.ExperienceType;
    title?: StringFieldUpdateOperationsInput | string;
    startDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isCurrent?: BoolFieldUpdateOperationsInput | boolean;
    skills?: ExperienceUpdateskillsInput | string[];
    verificationStatus?:
      | EnumVerificationStatusFieldUpdateOperationsInput
      | $Enums.VerificationStatus;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutExperiencesNestedInput;
    organization?: OrganizationUpdateOneWithoutExperiencesNestedInput;
  };

  export type ExperienceUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumExperienceTypeFieldUpdateOperationsInput | $Enums.ExperienceType;
    title?: StringFieldUpdateOperationsInput | string;
    startDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isCurrent?: BoolFieldUpdateOperationsInput | boolean;
    skills?: ExperienceUpdateskillsInput | string[];
    verificationStatus?:
      | EnumVerificationStatusFieldUpdateOperationsInput
      | $Enums.VerificationStatus;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ExperienceUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: EnumExperienceTypeFieldUpdateOperationsInput | $Enums.ExperienceType;
    title?: StringFieldUpdateOperationsInput | string;
    startDate?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isCurrent?: BoolFieldUpdateOperationsInput | boolean;
    skills?: ExperienceUpdateskillsInput | string[];
    verificationStatus?:
      | EnumVerificationStatusFieldUpdateOperationsInput
      | $Enums.VerificationStatus;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CertificateUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type?:
      | EnumCertificateTypeFieldUpdateOperationsInput
      | $Enums.CertificateType;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: CertificateUpdateskillsInput | string[];
    hash?: NullableStringFieldUpdateOperationsInput | string | null;
    title?: StringFieldUpdateOperationsInput | string;
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutCertificatesNestedInput;
    organization?: OrganizationUpdateOneWithoutCertificatesNestedInput;
  };

  export type CertificateUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?:
      | EnumCertificateTypeFieldUpdateOperationsInput
      | $Enums.CertificateType;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: CertificateUpdateskillsInput | string[];
    hash?: NullableStringFieldUpdateOperationsInput | string | null;
    title?: StringFieldUpdateOperationsInput | string;
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CertificateUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null;
    type?:
      | EnumCertificateTypeFieldUpdateOperationsInput
      | $Enums.CertificateType;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: CertificateUpdateskillsInput | string[];
    hash?: NullableStringFieldUpdateOperationsInput | string | null;
    title?: StringFieldUpdateOperationsInput | string;
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    url?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
