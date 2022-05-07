import {types} from '../../types/types'

describe('Pruebas con nuestros tipos', () => {
    test('debe de tener estos tipos', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',

            uiSetError: '[UI] Set Error',
            uiRemoveError: '[UI] Remove Error',

            uiStartLoading: '[UI] Start Loading',
            uiFinishLoading: '[UI] Finish Loading',

            notesAddNew: '[Note] New Note',
            notesActive: '[Note] Active Note',
            notesLoad: '[Note] Load Note',
            notesUpdate: '[Note] Update Note Saved',
            notesFileUrl: '[Note] Update Image Url',
            notesDelete: '[Note] Delete Note',
            notesLogoutCleaning: '[Note] Logout Cleaning',
        });
    });
});