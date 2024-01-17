const DevImageMeta = ({ meta }) => {
  /* console.log('TESTTTTEETETETETETET', meta) */

  const {
    ISO,
    FNumber,
    ExposureTime,
    FocalLength,
    LensModel,
    LensSerialNumber,
    Flash,
    MeteringMode,
    CreatedDate,
    SubjectTimeOriginal,
  } = meta.exif

  return (
    <>
      <p>{ISO}</p>
      <p>{FNumber}</p>
      <p>{ExposureTime}</p>
      <p>{FocalLength}</p>
      <p>{LensModel}</p>
      <p>{LensSerialNumber}</p>
      <p>{Flash}</p>
      <p>{MeteringMode}</p>
      <p>{CreatedDate}</p>
      <p>{SubjectTimeOriginal}</p>
    </>
  )
}
export default DevImageMeta
