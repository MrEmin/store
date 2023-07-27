import styled from 'styled-components'

const Testing = () => {
  return (
    <Wrapper>
      <h3>hello world</h3>
      <p>hello people</p>
      <div className='article'>
        <p>this is article</p>
      </div>
      <button>click me</button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h3 {
    color: red;
  }
  /* bu şekilde iç içe yazım(nested selectors) çok önerilmez. Çünkü bu daha spesifik bir yazımdır ve ileride tüm p tagini seçmek istediğimizde bu iç içe olan p'yi değiştiremeyebiliriz. Aşırıya kaçmamak kaydıyla iç içe yazım kullanılabilir. */
  .article {
    p {
      color: green;
    }
  }
`

export default Testing
