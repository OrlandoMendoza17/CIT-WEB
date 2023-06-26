import Head from "next/head";

const DEFAULT = "Centro de Innovación Tecnológica - Equipo de Proyecto (UNITEC)"

type Props = {
  text?: string,
}

const Title = ({ text = DEFAULT }: Props) => {
  return (
    <Head>
      <title>{text}</title>
    </Head>
  )
}

export default Title;