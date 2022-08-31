import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTickets, reset } from '../features/tickets/ticketSlice'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'

function Tickets() {
  // Get data we need from the state
  const { tickets, isLoading, isSuccess } = useSelector((state) => state.tickets)

  // initialize dispatch
  const dispatch = useDispatch()

  // Clear the state on unmount - return a fn on useEffect for smth to happen on unmount
  useEffect(() => {
    return () => {
      if(isSuccess) {
        dispatch(reset)
      }
    }
  }, [dispatch, isSuccess])

  useEffect(() => {
    dispatch(getTickets())
  }, [dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div>
      <h1>Tickets</h1>
    </div>
  )
}

export default Tickets
