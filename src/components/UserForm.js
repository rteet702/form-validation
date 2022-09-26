import { useReducer } from 'react'

const REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

// define the initial state for the purposes of using the reducer.
const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
}

// set up the reducer.
const reducer = (state, action) => {
    switch (action.type) {
        // Managing the first name.
        case 'SET_FIRSTNAME_VALUE':
            return {
                ...state,
                firstName: {
                    ...state.firstName,
                    value: action.payload
                }
            }
        case 'SET_FIRSTNAME_ERROR':
            return {
                ...state,
                firstName:{
                    ...state.firstName,
                    error: action.payload
                }
            }
        // Managing the last name.
        case 'SET_LASTNAME_VALUE':
            return {
                ...state,
                lastName: {
                    ...state.lastName,
                    value: action.payload
                }
            }
        case 'SET_LASTNAME_ERROR':
            return {
                ...state,
                lastName:{
                    ...state.lastName,
                    error: action.payload
                }
            }
        // Managing the email.
        case 'SET_EMAIL_VALUE':
            return {
                ...state,
                email: {
                    ...state.email,
                    value: action.payload
                }
            }
        case 'SET_EMAIL_ERROR':
            return {
                ...state,
                email:{
                    ...state.email,
                    error: action.payload
                }
            }
        default:
            return state
    }
}

const UserForm = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    // handler for first name.
    const handleFirstName = (e) => {
        let fName = e.target.value

        if (fName.length < 3) {
            dispatch({
                type: 'SET_FIRSTNAME_ERROR',
                payload: 'First Name must be atleast 3 characters.'
            })
        }
        else {
            dispatch({
                type: 'SET_FIRSTNAME_ERROR',
                payload: ''
            })
        }

        dispatch({
            type: 'SET_FIRSTNAME_VALUE',
            payload: fName
        })
    }

    // handler for last name.
    const handleLastName = (e) => {
        let lName = e.target.value

        if (lName.length < 3) {
            dispatch({
                type: 'SET_LASTNAME_ERROR',
                payload: 'Last Name must be atleast 3 characters.'
            })
        }
        else {
            dispatch({
                type: 'SET_LASTNAME_ERROR',
                payload: ''
            })
        }

        dispatch({
            type: 'SET_LASTNAME_VALUE',
            payload: lName
        })
    }

    // handler for email.
    const handleEmail = (e) => {
        let email = e.target.value

        if (!REGEX.test(email)) {
            dispatch({
                type: 'SET_EMAIL_ERROR',
                payload: 'Invalid Email.'
            })
        }
        else {
            dispatch({
                type: 'SET_EMAIL_ERROR',
                payload: ''
            })
        }

        dispatch({
            type: 'SET_EMAIL_VALUE',
            payload: email
        })
    }

    // rendering woo
    return (
        <form>

            <div>
                <input type='text' placeholder='First name...' onChange={ handleFirstName } />
                {
                    state.firstName.error ?
                    <p>{ state.firstName.error }</p> : undefined
                }
            </div>

            <div>
                <input type='text' placeholder='Last name...' onChange={ handleLastName } />
                {
                    state.lastName.error ?
                    <p>{ state.lastName.error }</p> : undefined
                }
            </div>

            <div>
                <input type='email' placeholder='Email...' onChange={ handleEmail } />
                {
                    state.email.error ?
                    <p>{ state.email.error }</p> : undefined
                }
            </div>

        </form>
    )
}

export default UserForm