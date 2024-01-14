export const weaponSchema = {
  type: 'object',
  required: ['requiredAttributes', 'additionalAttributes', 'statistics', 'ATK', 'specialEffects', 'damageReduction'],
  properties: {
    requiredAttributes: {
      type: 'object',
      properties: {
        strength: { type: 'number' },
        dexterity: { type: 'number' },
      },
      required: ['strength', 'dexterity'],
    },
    additionalAttributes: {
      type: 'object',
      properties: {
        strength: { type: 'string' },
        dexterity: { type: 'string' },
      },
      required: ['strength', 'dexterity'],
    },
    statistics: {
      type: 'object',
      properties: {
        weaponType: { type: 'string' },
        attackType: { type: 'string' },
        duration: { type: 'number' },
        weight: { type: 'number' },
      },
      required: ['weaponType', 'attackType', 'duration', 'weight'],
    },
    ATK: {
      type: 'object',
      properties: {
        physical: { type: 'number' },
        magic: { type: 'number' },
        fire: { type: 'number' },
        electric: { type: 'number' },
        critical: { type: 'number' },
      },
      required: ['physical', 'magic', 'fire', 'electric', 'critical'],
    },
    specialEffects: {
      type: 'object',
      properties: {
        bleeding: { type: 'number' },
        toxic: { type: 'number' },
        divine: { type: 'string' },
        hidden: { type: 'string' },
      },
      required: ['bleeding', 'toxic', 'divine', 'hidden'],
    },
    damageReduction: {
      type: 'object',
      properties: {
        physical: { type: 'number' },
        magic: { type: 'number' },
        fire: { type: 'number' },
        electric: { type: 'number' },
        stability: { type: 'number' },
      },
      required: ['physical', 'magic', 'fire', 'electric', 'stability'],
    },
  },
};