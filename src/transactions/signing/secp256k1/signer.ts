/**
 * Copyright 2020 Cargill Incorporated
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ISigner } from '../index';
import { Context, PrivateKey, PublicKey } from './index';

export default class Secp256k1Signer implements ISigner {
  context: Context;

  privateKey: PrivateKey;

  constructor(privateKey: PrivateKey) {
    this.privateKey = privateKey;
    this.context = new Context();
  }

  /**
   * Signs a message with a Secp256k1 private key
   * @param {Uint8Array} message the message to sign
   * @return {string} the signed message
   */
  sign(message: Uint8Array): string {
    return this.context.sign(message, this.privateKey);
  }

  /**
   * gets the public key associated with the signer
   * @return {PublicKey} the public key associated with the signer
   */
  getPublicKey(): PublicKey {
    return this.context.getPublicKey(this.privateKey);
  }
}
