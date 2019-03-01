const {findUserById, findUserByEmail} = require('../async');

describe('async package tests', () => {

    describe('findUserById tests suite', () => {
        it('Should find user with name bahd coder by id 1', async () => {
            const result = await findUserById(1);
            expect(result.user.name).toBe('bahdcoder');
        });
        it('Should return an error message in case of user not found', () => {
            return findUserById(9999).catch(error => {
                expect(error.message).toBe('User with id: 9999 was not found.');

            });
        });
    });

    describe('findUserByEmail tests suite', () => {
        it('Should find user Miss Myers by email miss_myers@models.co.uk', async () => {
            const result = await findUserByEmail('miss_myers@models.co.uk');
            expect(result.user.name).toBe('Miss Myers');
        });
        it('Should return an error message in case of user not found', () => {
            return findUserByEmail('example@mail.com').catch(error => {
                expect(error.message).toBe('User with email: example@mail.com was not found.');
            });
        });
    });
});