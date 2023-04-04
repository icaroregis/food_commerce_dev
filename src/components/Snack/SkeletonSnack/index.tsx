import { Skeleton } from '../../Skeleton'
import { Container } from '../style'

export function SkeletonSnack() {
  return (
    <div className='skeleton-wrapper'>
      <Container>
        <Skeleton type='title' />
        <Skeleton type='thumbnail' />
        <Skeleton type='text' />
        <Skeleton type='text' />

        <div>
          <Skeleton type='title'></Skeleton>
          <Skeleton type='image'></Skeleton>
        </div>
      </Container>
    </div>
  )
}
