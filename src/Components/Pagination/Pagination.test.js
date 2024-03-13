import Pagination from "./Pagination";
import { render ,screen} from '@testing-library/react'

describe( Pagination, () => {
    it("renders pagination component with correct current page", () => {
        const currentPage = 5;
        const handleNext = jest.fn()
        const handlePrev = jest.fn()

        const { getByTestId } = render(<Pagination currentPage={currentPage} handleNext={handleNext} handlePrev={handlePrev} />)
        const current = Number(screen.getByTestId("currentPage").textContent);

        expect(current).toEqual(5);
    })
});