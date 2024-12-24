import className from '../../lib/classJSX'

export default function Sephora({
  className: classNameX,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 125 17" className={className(classNameX)} {...props}>
      <path
        fillRule="evenodd"
        d="M8.94 1.645s-.05.142-.747 2.032c-1.992-1.586-5.33-1.47-5.33.97 0 2.861 6.972 2.502 6.755 7.61C9.445 16.36 4.395 17.302.5 15.326c.34-.723.694-1.42.936-1.99 2.945 1.741 5.481.943 5.898-.458C8.473 9.044.53 10.228.53 4.793c0-2.286 2.647-5.84 8.41-3.148ZM16.465 1.33h9.124s-.027.822-.01 1.991H18.75v4.082h4.844c-.017.814-.008 1.453-.008 1.873H18.75v5.088h6.83a104.28 104.28 0 0 0 0 1.954h-9.106L16.465 1.33ZM38.195 8.675c-.55 0-.958-.006-1.516-.009 0-2.796.005-5.41.005-5.41s.666-.003 1.295-.003c.602 0 4.106-.273 4.22 2.523.11 2.757-2.648 2.9-4.004 2.9Zm.136-7.316c-.81-.02-2.501-.029-3.945-.029l.005 14.988h2.296s-.007-2.861-.008-5.682c.569-.01 1.75-.041 2.705-.068 1.323-.04 4.8-.701 4.776-4.811-.027-4.62-5.025-4.38-5.83-4.398ZM97.183 8.268c-.536 0-.923-.01-1.466-.014.002-2.632.008-5.058.008-5.058s.628-.009 1.236-.009c.58 0 3.685-.175 3.948 2.267.312 2.885-3.092 2.814-3.726 2.814Zm5.053 8.05h2.854l-4.737-6.725c1.275-.469 2.753-1.557 2.566-4.043-.334-4.454-4.686-4.124-5.618-4.167-.785-.037-2.475-.059-3.94-.052v14.987h2.364s-.007-3.354-.009-6.318c.784.003 1.064-.011 2.246-.042l4.274 6.36ZM61.063 6.976V1.33h2.321v14.336h-2.322V8.851l-7.738.01v6.805h-2.321V1.33h2.32v5.646h7.74ZM79.167.68c-4.823 0-7.963 3.501-7.963 7.82 0 4.319 3.14 7.82 7.963 7.82s7.962-3.501 7.962-7.82c0-4.319-3.14-7.82-7.962-7.82Zm0 2.128c-3.536 0-5.544 2.548-5.544 5.691 0 3.144 1.988 5.692 5.544 5.692 3.555 0 5.543-2.548 5.543-5.692 0-3.143-2.008-5.691-5.543-5.691Zm36.209 7.99 4.935-.03-2.507-7.306h-.033l-2.395 7.336Zm1.084-9.688h2.745l5.435 14.855-2.43-.006s-.537-1.499-1.253-3.484l-6.13.038s-.246.764-.977 3.447h-2.343l4.953-14.85Z"
      ></path>
    </svg>
  )
}