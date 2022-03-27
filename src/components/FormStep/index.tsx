import { Stepper, Step, StepLabel } from "@mui/material";
import { Formik, Form, FormikConfig, FormikValues } from "formik"
import React, { useState } from "react"

export interface StepProps extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> { label: string }

export function FormStep({ children }: StepProps) {
   return <>{children}</>;
 }

const FormSteps: React.FC<FormikConfig<FormikValues>> = ({ children, ...props}) => {

   const childrenArray = React.Children.toArray(children) as React.ReactElement<StepProps>[]
   const [step, setStep] = useState(0)
   const currentChild = childrenArray[step]

   function isLastStep() {
      return step === childrenArray.length - 1;
    }

   return (
      <Formik
         {...props}
         validationSchema={currentChild.props.validationSchema}
         onSubmit={async (values, helpers) => {
            if (isLastStep()) {
              await props.onSubmit(values, helpers);
            } else {
              setStep((s) => s + 1);
            }
         }}
      >
         <Form autoComplete="off">
            <Stepper alternativeLabel activeStep={step}>
               {childrenArray.map((child, index) => (
               <Step key={child.props.label}>
                  <StepLabel>{child.props.label}</StepLabel>
               </Step>
               ))}
            </Stepper>
            {currentChild}
            { step > 0 ? <button className="rounded-full py-2 px-4 mr-4 focus:outline-none bg-brandColor text-white font-medium" onClick={() => setStep(s => s-1)}>Back</button> : null}
            <button className="rounded-full py-2 px-4 focus:outline-none bg-brandColor text-white font-medium" type="submit">{isLastStep() ? 'Submit' : 'Next'}</button>
         </Form>
      </Formik>
   )
}

export default FormSteps