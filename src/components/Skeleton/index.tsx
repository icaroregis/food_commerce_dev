import { SkeletonElement } from './style'

export interface SkeletonProps {
  type: 'title' | 'text' | 'image' | 'thumbnail'
}

export function Skeleton({ type }: SkeletonProps) {
  return (
    <div>
      <SkeletonElement type={type}></SkeletonElement>
    </div>
  )
}
