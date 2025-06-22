import { Card } from "../components/ui/card"
import { Grid } from "../components/ui/grid"



const GridA=()=>{
    return(
        <>
<Grid cols={3}>
  <Card
    title="מדריך כתיבת קורות חיים"
    category="קורות חיים"
    description="טיפים מקצועיים לכתיבת קו״ח שיתנו לך יתרון בגיוס."
  />
  <Card
    title="איך להתלבש לראיון עבודה"
    category="הופעה חיצונית"
    description="מדריך קצר לבחירת לבוש מתאים לפי סוג ריאיון ותפקיד."
  />
</Grid>

        </>
    )
}
export default GridA