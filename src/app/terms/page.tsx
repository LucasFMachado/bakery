import { Hero } from '@/components'
import { MainLayout } from '@/layouts'

export default function Terms() {
  return (
    <MainLayout>
      <Hero title="Terms and Conditions" shrink />
      <div className="container mx-auto px-4 py-16 sm:py-28 max-w-[800px]">
        <div className="flex flex-col gap-4 font-light">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            ratione quos corporis sint fugit quae dolore harum provident
            molestias incidunt temporibus quis cum aliquid qui, assumenda ab
            consequatur ipsa impedit?
          </p>
          <h4 className="text-2xl font-medium">Lorem ipsum dolor sit amet</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            ratione natus consequuntur animi ad facilis, quis dignissimos ipsum,
            aperiam, rem cum. Odit officia ratione quia quasi, est quos, et
            eaque incidunt qui placeat distinctio eos possimus consectetur quam
            dolore? Mollitia sunt velit, possimus reprehenderit esse a amet odit
            tempore necessitatibus accusamus non cupiditate quam repellat
            ratione reiciendis numquam voluptas illo?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae aliquam perferendis rem maxime laudantium, quos quasi.
            Debitis quidem eius fugit.
          </p>
          <h4 className="text-2xl font-medium">
            Repudiandae aliquam perferendis
          </h4>
          <ul className="list-decimal list-inside">
            <li>amet consectetur</li>
            <li>ratione quia quasi</li>
            <li>incidunt temporibus</li>
            <li>quis dignissimos ipsum</li>
          </ul>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quia
            maiores, tempore nihil numquam dolorem obcaecati nesciunt molestiae
            explicabo soluta repellendus ea, error reiciendis consequatur.
          </p>
          <h4 className="text-2xl font-medium">Lorem ipsum dolor sit</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            ullam laudantium, sit veniam vel eos fugit? Excepturi, iure tempore?
            Dolorem possimus, laborum sapiente recusandae corporis et quaerat
            dolores ab, nobis excepturi quibusdam officiis debitis laboriosam,
            fugit aperiam ducimus odit nihil optio libero provident beatae odio!
            Tempore enim accusantium quos natus minus. Iste, cum magni
            reiciendis deserunt cumque voluptate quaerat similique. Eius fugiat
            qui aliquam. Quae voluptatum exercitationem autem dolor quas!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            nihil debitis mollitia eveniet obcaecati ipsum tenetur quae nostrum
            quibusdam fugiat optio doloremque, voluptatibus illo minima iste.
            Accusamus totam modi porro.
          </p>
        </div>
      </div>
    </MainLayout>
  )
}
