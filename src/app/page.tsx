'use client'
import Toast from '@/components/toast'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRef, useState } from 'react'
import { AiFillInstagram } from "react-icons/ai";


const getMediaUrl = async (url: string) => {
  console.log({ url })
  const res = await fetch(`/api/ig?url=${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ url }),
  })
  const data = await res.json()

  console.log({ data })

  return data.data
}

const formSchema = z.object({
  link: z.string().url()
})

export type FormTypeDL = z.infer<typeof formSchema>
export default function HomePage() {
  const [downloadUrl, setDownloadUrl] = useState(null)
  const { register, handleSubmit, reset, formState: { errors }, clearErrors } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      link: ''
    }
  })

  const formRef = useRef<HTMLFormElement>(null)

  const resetForm = () => {
    reset()
    clearErrors()
    setDownloadUrl(null)
  }

  const onSubmit = async (data: FormTypeDL) => {
    console.log({ data })

    const { url } = await getMediaUrl(data.link)
    setDownloadUrl(url)

  }
  return (
    <section className='w-full h-dvh flex flex-col mx-auto'>
      <h3 className='flex items-center justify-center my-2'>
        <AiFillInstagram className="text-3xl mx-2 " />
        Download from Instagram
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mx-auto w-full max-w-md rounded-xl p-6 max-h-96'
        ref={formRef}
      >
        <article className='card w-full mx-auto p-4'>
          <label className='label' htmlFor="link">Link</label>
          <input
            className="input input-bordered w-full"
            placeholder="Type here"
            type="text"
            {...register('link')}
          />
          {
            errors?.link?.message ?
              <div role="alert" className="alert alert-error my-2 duration-200 transition-all">
                {errors?.link?.message}
              </div> :
              null
          }
        </article>
        <article className='p-4 flex items-center justify-center w-full duration-300 transition-all'>
          {
            downloadUrl
              ? <button className='btn btn-secondary w-1/2' onClick={() => resetForm()}>Reset</button>
              : <button type='submit' className='btn btn-outline w-full'>Get link</button>
          }
          {
            downloadUrl
            && <a
              className='btn btn-primary w-1/2 mx-1'
              download="Example-PDF-document"
              href={downloadUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              Download
            </a>
          }
        </article>
        <Toast id={0} message={'Ready'} type={''} />
      </form>
    </section>
  )
}
