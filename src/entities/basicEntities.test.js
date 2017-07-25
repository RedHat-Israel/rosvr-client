import * as BasicEntities from './basicEntities.js'

describe('Basic Entities Suite', () => {
	describe('scene tests', () => {
		it('scene smoke test', () => {
			expect(BasicEntities.scene()).toBeDefined()
		})
	})
})
