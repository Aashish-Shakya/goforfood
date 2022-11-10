import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFood } from '../../../redux/reducers/food/food.action';
import DishList from '../../components/Dish/DishList'

// import "./dish.css"
const DishEditpage = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFood());
    }, []);


    // const foodList = useSelector((globalState) => globalState.food.foods)

    // const userData = Object.values(userList);
    return (
        <>

            <br /><br />
            <h2 class="OD">Dish Details</h2>
            <br /><br />
            <div class="container">

                <div class="card">


                    <div class="card-body">
                        <DishList />


                    </div>
                </div >
            </div >

            <br /><br />

            {/* <!-- <a href="#deleteModal" class="trigger-btn" data-toggle="modal"> --> */}



            <ng-template >
                {/* <!-- Modal->Add category --> */}
                <div class=" " id="add-category" aria-hidden="true" aria-labelledby="add-category" tabindex="-1">
                    {/* <!-- <div class="modal-dialog modal-dialog-centered"> */}
                    {/* <div class="modal-content"> --> */}
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalToggleLabel2">EDIT PRODUCT</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"  ></button>
                    </div>
                    <div class="modal-body">
                        <form action="#" >
                            <div class="form-group">
                                <input type="text" id="dishCat" class="form-control" name="dishCat" placeholder="Enter Category" value="{{dish?.category}}" required />
                                <br />
                                <input type="text" id="dishTitle" class="form-control" name="catTitle" placeholder="Enter Dish Name" value="{{dish?.name}}" required />
                                <br />
                                <input type="text" id="dishImg" class="form-control" name="dishImg" placeholder="Enter The Url of Image" value="{{dish?.image_url}}" required />
                                <br />
                                <input type="text" id="dishPrice" class="form-control" name="dishPrice" placeholder="Enter Original Price" value="{{dish?.price}}" required />
                                <br />
                                <input type="text" class="form-control" id="dishDP" name="dishDP" placeholder="Enter Discounted Price" value="{{dish?.discount}}" required />

                                <br />
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" data-bs-target="#preview" data-bs-toggle="modal">Preview</button>
                        <button class="btn btn-primary" data-bs-target="#DISHES" data-bs-toggle="modal" >Back to first</button>
                    </div>
                </div>
                {/* <!-- <a class="btn btn-primary" data-bs-toggle="modal" href="#DISHES"  >  -->
    <!-- </div>
          </div> --> */}
            </ng-template>


            {/* <!-- Modal HTML --> */}
            <ng-template >
                {/* <!-- <div id="deleteModal" class=""> --> */}
                <div class="modal-dialog modal-confirm">
                    <div class="modal-content">
                        <div class="modal-header flex-column">
                            <div class="icon-box">
                                <i class="material-icons">&#xE5CD;</i>
                            </div>
                            <h4 class="modal-title w-100">Are you sure?</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true" >&times</button>
                        </div>
                        <div class="modal-body">
                            <p>Do you really want to delete these records? This process cannot be undone.</p>
                        </div>
                        <div class="modal-footer justify-content-center">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" >Cancel</button>
                            <button type="button" class="btn btn-danger" >Delete</button>
                        </div>
                    </div>
                </div>
                {/* <!-- </div>      --> */}

            </ng-template>

            <div class="float-end">
                <a href="/home" class="button glow-button">Back To Home</a>
            </div>
            <br /><br /><br />
            {/* <!-- <h1>..</h1> --></br> */}
        </>
    )
}

export default DishEditpage