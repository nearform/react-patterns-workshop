/**
 * Please go back to step 03 and import this component and use it for the year input
 * instead of the existing plain input element. E.g.
 * ```js
 * import {FancyInputChallenge} from "../FancyInputChallenge"
 * ...
 * // In the component
 * <FancyInputChallenge .../>
 * ...
 * ```
 * Initially it will trigger an error. We will fix it in this step by forwarding
 * refs.
 */
export const FancyInputChallenge = props => {
  return (
    <input
      {...props}
      style={{
        padding: '16px',
        fontWeight: 'bold',
        border: '1px solid azure',
        fontSize: '24px'
      }}
    />
  )
}
