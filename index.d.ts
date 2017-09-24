import * as Abstract from 'abstract-leveldown';
import { CodecOptions as _CodecOptions, CodecEncoder as _CodecEncoder } from 'level-codec';

declare namespace encoding {
  export type CodecOptions = _CodecOptions;
  export type CodecEncoder = _CodecEncoder;
}

declare function encoding<
  TKey=any,
  TValue=any,
  TOptions=any,
  TPutOptions=any,
  TGetOptions=any,
  TDeleteOptions=any,
  TIteratorOptions=any,
  TBatchOptions=any
  >(
  db: Abstract.LevelDOWN<TKey, TValue, TOptions, TPutOptions, TGetOptions, TDeleteOptions, TIteratorOptions, TBatchOptions>,
  options?: encoding.CodecOptions
  ): Abstract.LevelDOWN<
  TKey,
  TValue,
  TOptions,
  TPutOptions & encoding.CodecOptions,
  TGetOptions & encoding.CodecOptions,
  TDeleteOptions & encoding.CodecOptions,
  TIteratorOptions & encoding.CodecOptions,
  TBatchOptions & encoding.CodecOptions>;

export = encoding;