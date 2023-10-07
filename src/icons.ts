/**
 * This file adds the font awesome icon "faUsers" to the font awesome library.
 * 
 * @packageDocumentation
 */

import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faUsers as usersIcon } from '@fortawesome/free-solid-svg-icons';

/**
 * Adds the font awesome icon "faUsers" to the font awesome library.
 * 
 * @param iconDefinition - The font awesome icon definition.
 */
function addFontAwesomeIcon(iconDefinition: IconDefinition): void {
  library.add(iconDefinition);
}

// Adds the font awesome "faUsers" icon to the library
addFontAwesomeIcon(usersIcon);