import * as code from "./node_modules/immutable/dist/immutable.es.js";
import * as types from "./node_modules/immutable/dist/immutable-nonambient.d.ts";

// if you find something more practical
//  to reexport with the right types
//  please tell me.
//
//  I tried: export default code as any as typeof types
//   => Works when using with "import im from './index.ts'
//   => But fails to compile  "import {List} from './index.ts'"
//  ... go figure :(
export const {
  List,
  Collection,
  Map,
  OrderedMap,
  OrderedSet,
  Range,
  Record,
  Repeat,
  set,
  Seq,
  is,
  Set,
  Stack,
  fromJS,
  get,
  getIn,
  has,
  hasIn,
  hash,
  isAssociative,
  isCollection,
  isImmutable,
  isIndexed,
  isKeyed,
  isList,
  isMap,
  isOrdered,
  isOrderedMap,
  isOrderedSet,
  isRecord,
  isSeq,
  isSet,
  isStack,
  isValueObject,
  merge,
  mergeDeep,
  mergeDeepWith,
  mergeWith,
  remove,
  removeIn,
  setIn,
  update,
  updateIn,
} = code as any as typeof types;
