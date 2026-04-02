import { createContext,useContext,  useReducer } from "react";

 const StateContext = createContext();
const DispatchContext = createContext();

const initialState = {
    step: 1,
    formData: {
        name: "",
        destination: "",
        date: "",
        activities: [],
        budget: "",
        transport: "",
    },
    errors: {},
    touched: {},
    submitted: false,
};

function reducer(state, action) {
    switch (action.type) {
        case "SET_FIELD":
            return {
                ...state,
                formData: {
                    ...state.formData,
                    [action.field]: action.value,
                },
            };

        case "SET_STEP":
            return {
                ...state,
                step: action.step,
            };

        case "NEXT_STEP": {
            const errors = validateStep(state);

            if (Object.keys(errors).length > 0) {
                return {
                    ...state,
                    errors,
                    touched: {
                        ...state.touched,
                        name: true,
                        destination: true,
                        date: true,
                        activities: true,
                        transport: true,
                    },
                };
            }

            return {
                ...state,
                errors: {},
                step: state.step + 1,
            };
        }

        case "PREV_STEP":
            return {
                ...state,
                step: state.step - 1,
            };
        case "TOUCH_FIELD":
            return {
                ...state,
                touched: {
                    ...state.touched,
                    [action.field]: true,
                },
            };

        case "SET_ERRORS":
            return {
                ...state,
                errors: action.errors,
            };
        case "SUBMIT":
            return {
                ...state,
                submitted: true,
            };

        case "RESET":
            return initialState;

        default:
            return state;
    }
}
function validateStep(state) {
    const errors = {};

    if (state.step === 1) {
        if (!state.formData.name) {
            errors.name = "Numele este obligatoriu";
        }

        if (!state.formData.destination) {
            errors.destination = "Alege o destinație";
        }

        if (!state.formData.date) {
            errors.date = "Alege o dată";
        }
    }

    if (state.step === 2) {
        if (state.formData.activities.length === 0) {
            errors.activities = "Selectează cel puțin o activitate";
        }
    }

    if (state.step === 3) {
        if (!state.formData.transport) {
            errors.transport = "Alege transportul";
        }
    }

    return errors;
}


export function FormProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StateContext value={state}>
            <DispatchContext value={dispatch}>
                {children}
            </DispatchContext>
        </StateContext>
    );
}

export function useFormState() {
    return useContext(StateContext);
}

export function useFormDispatch() {
    return useContext(DispatchContext);
}