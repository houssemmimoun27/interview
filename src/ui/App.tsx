import Counter from '@/ui/component/counter/counter'
import DropDown from '@/ui/component/dropdown/dropdown'
import Task from '@/ui/component/task/task'
import Posts from './component/fetch/posts'
import Visibility from './component/visibility/visible'
import Form from './component/form/form'
import Accordion from './component/accordion/accordion'
import Rating from './component/rating/rating'
import Modal from './component/modal/modal'
import StopWatch from './component/stopWatch/stopWatch'
import Search from './component/search/search'

const App = (): JSX.Element => {
  return (
    <>
      <DropDown />
      <Task />
      <Counter />
      <Posts />
      <Visibility />
      <Form />
      <Accordion />
      <Rating />
      <Modal />
      <StopWatch />
      <Search/>
    </>
  )
}

export default App
