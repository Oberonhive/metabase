/* @flow */
import React from 'react'

import { normal } from 'metabase/lib/colors'

type Props = {
    activeDotColor?: string,
    currentStep: number,
    dotSize?: number,
    goToStep?: (step: number) => void,
    steps: []
}

const StepIndicators = ({
    activeDotColor = normal.blue,
    currentStep = 0,
    dotSize = 8,
    goToStep,
    steps,
}: Props) =>
    <ol className="flex">
        {
            steps.map((step, index) =>
                <li
                    onClick={() => goToStep && goToStep(index + 1)}
                    style={{
                        width: dotSize,
                        height: dotSize,
                        borderRadius: 99,
                        cursor: 'pointer',
                        marginLeft: 2,
                        marginRight: 2,
                        backgroundColor: index + 1 === currentStep ? activeDotColor : '#D8D8D8',
                        transition: 'background 600ms ease-in'
                    }}
                    key={index}
                >
                </li>
            )
        }
    </ol>

export default StepIndicators;
