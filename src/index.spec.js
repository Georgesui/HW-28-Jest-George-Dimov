import {
	sum,
	sumSpread,
	minus,
	multiply,
	divide,
	pow,
	isBigger,
	isSmaller,
	getUserInfo
} from './index'

describe('sum of two numbers', () => {
	test('should return as a result 3', () => {
		expect(sum(1, 2)).toBe(3)
	})
	test('should return as a result 3.2', () => {
		expect(sum(1.5, 1.7)).toBe(3.2)
	})

	// почему 0.19999999999999996
})

describe('sum of a lot of numbers', () => {
	test('should return as a result 8', () => {
		expect(sumSpread(1, 7)).toBe(8)
	})

	test('should return as a result 249', () => {
		expect(sumSpread(1, 7, 15, 220, 6)).toBe(249)
	})

	test('should return as a result 0', () => {
		expect(sumSpread(1, 14, -15)).toBe(0)
	})

	test('should return as a result -1', () => {
		expect(sumSpread(1, 14, -16)).toBe(-1)
	})

	test('should return as a result 0.5', () => {
		expect(sumSpread(1, 14, -14.5)).toBe(0.5)
	})

	test('should return as a result 256', () => {
		expect(sumSpread(1, 7, 15, 220, 6, 1, 1, 1, 1, 1, 1, 1)).toBe(256)
	})
})

describe('difference of two numbers', () => {
	test('should return as a difference 2', () => {
		expect(minus(4, 2)).toBe(2)
	})

	test('should return as a difference 0.5', () => {
		expect(minus(2, 1.5)).toBe(0.5)
	})
})

describe('multiply two numbers', () => {
	test('should return as a multiply 8', () => {
		expect(multiply(4, 2)).toBe(8)
	})

	test('should return as a multiply 0.5', () => {
		expect(multiply(2.5, 1)).toBe(2.5)
	})

	test('should return as a difference 0.5', () => {
		expect(multiply(2.5, -1)).toBe(-2.5)
	})

	test('should return as a difference 0.5', () => {
		expect(multiply(0, 1)).toBe(0)
	})
})

describe('multiply two numbers', () => {
	test('should return as a multiply 2', () => {
		expect(multiply(4, 2)).toBe(8)
	})

	test('should return as a multiply 0.5', () => {
		expect(multiply(2.5, 1)).toBe(2.5)
	})

	test('should return as a multiply -2.5', () => {
		expect(multiply(2.5, -1)).toBe(-2.5)
	})

	test('should return as a multiply 0', () => {
		expect(multiply(0, 1)).toBe(0)
	})
})

describe('divide two numbers', () => {
	test('should return as a divide 2', () => {
		expect(divide(4, 2)).toBe(2)
	})

	test('should return as a divide -2.5', () => {
		expect(divide(-2.5, 1)).toBe(-2.5)
	})

	test('should return as a divide 2.5', () => {
		expect(divide(-2.5, -1)).toBe(2.5)
	})

	test('should return as a divide 0', () => {
		expect(divide(0, 1)).toBe(0)
	})

	test('impossible to divie for 0', () => {
		try {
			divide(2, 0)
		} catch (error) {
			expect(error.message).toBe('impossible to divie for 0')
		}
	})
})

describe('pow of two numbers', () => {
	test('should return as a pow 16', () => {
		expect(pow(4, 2)).toBe(16)
	})

	test('square of 0 return 1', () => {
		try {
			pow(2, 0)
		} catch (error) {
			expect(error.message).toBe('1')
		}
	})

	test('number is less than 0', () => {
		try {
			pow(2, -1)
		} catch (error) {
			expect(error.message).toBe('-2')
		}
	})
})

describe('What number of two is bigger?', () => {
	test('4 is bigger than 2', () => {
		expect(isBigger(4, 2)).toBe(true)
	})

	test('-1 is bigger than -2', () => {
		expect(isBigger(-1, -2)).toBe(true)
	})

	test('b is bigger than a', () => {
		try {
			isBigger(2, 5)
		} catch (error) {
			expect(error.message).toBe('false')
		}
	})
})

describe('What number of two is smaller?', () => {
	test('2 is smaller than 4', () => {
		expect(isSmaller(2, 4)).toBe(true)
	})

	test('-3 is smaller than -2', () => {
		expect(isSmaller(-3, -2)).toBe(true)
	})

	test('a is bigger than b', () => {
		try {
			isSmaller(7, 5)
		} catch (error) {
			expect(error.message).toBe('false')
		}
	})
})

describe('If Vick was called in Object', () => {
	test('Vick was fined', () => {
		const newObject = getUserInfo();
		expect(newObject.fullName).toContain('Vick')
	})
})