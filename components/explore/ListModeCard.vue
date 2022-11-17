<template>
  <div class="flex flex-col">
    <div class="w-full flex justify-end my-8">
      <div class="hidden w-[400px] flex-row items-center gap-1 rounded-xl border-2 border-gray-300 px-4 text-gray-400 hover:cursor-not-allowed dark:border-stone-600 xl:flex">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="1em"
            height="1em"
            fill="currentColor"
            class="h-5 w-5"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z">
          </path>
        </svg>
        <input
            v-model="textSearch"
            type="text"
            class="h-10 w-full border-0 bg-transparent text-sm text-black placeholder:text-gray-400 focus:ring-0 dark:text-white"
            placeholder="Search by item name"
        >
      </div>
    </div>
    <div class="grid md:grid-cols-4 gap-4">
        <div v-for="i in 12" :key="i" class="p-3 bg-white rounded-xl">
          <img src="/s5/1.png" alt="">
          <div class="pt-4 text-black space-y-3">
            <div class="flex gap-3 items-center">
              <div class="w-8 h-8">
                <img src="/avatar.png" alt="">
              </div>
              <div class="flex-1">
                <p>by Arkhan</p>
              </div>
            </div>
            <div class="font-bold text-xl">ArtCrypto</div>
            <div class="flex justify-between items-center">
              <div class="flex justify-end gap-2 font-bold items-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M0.117371 10.5656H2.29548C3.226 10.5656 4.15652 10.5393 5.08704 10.5745C5.74978 10.5998 6.26674 10.4339 6.68271 9.8757C7.06974 9.35727 7.38543 9.35727 7.7635 9.88503C8.15673 10.4346 8.63784 10.5866 9.28645 10.5763C11.5611 10.5455 13.8395 10.5642 16.1158 10.5642H16.895C16.6631 11.2499 16.4742 11.8637 16.2378 12.4585C16.1933 12.5701 15.9621 12.6679 15.8146 12.6686C13.1026 12.6807 10.3903 12.6911 7.67872 12.6548C7.40301 12.651 7.08318 12.3921 6.87123 12.1685C6.2433 11.506 6.10269 11.4628 5.52129 12.1298C5.14735 12.5587 4.73965 12.715 4.1772 12.6901C3.20911 12.6472 2.23758 12.6655 1.26811 12.6873C0.935884 12.6946 0.75495 12.5802 0.660864 12.2691C0.496816 11.7299 0.318639 11.1956 0.117371 10.5656Z"
                      fill="#00AC4F"/>
                  <path
                      d="M17.0015 8.26244C14.8014 8.26244 12.726 8.28491 10.6523 8.23583C10.3704 8.22926 10.0612 7.89954 9.82515 7.6583C9.31164 7.1295 9.09279 7.07455 8.6358 7.63342C8.21431 8.14908 7.73216 8.28836 7.08976 8.27869C4.7769 8.24412 2.46335 8.26521 -0.00012207 8.26521C0.148417 7.59747 0.257667 6.98642 0.437567 6.39887C0.472031 6.28447 0.782205 6.19599 0.965552 6.19495C3.32115 6.18147 5.67675 6.17076 8.03062 6.19495C8.7099 6.20221 9.24753 6.05671 9.68212 5.48505C10.0874 4.95107 10.3624 4.94831 10.7588 5.4809C11.1882 6.05705 11.7089 6.22157 12.3968 6.19703C13.6227 6.15348 14.851 6.19703 16.0779 6.17802C16.4105 6.17318 16.5921 6.26442 16.6538 6.60589C16.751 7.13192 16.8726 7.65104 17.0015 8.26244Z"
                      fill="#00AC4F"/>
                  <path
                      d="M15.1336 3.88733C14.6431 3.88733 14.1403 3.95369 13.6678 3.86279C13.3783 3.80715 13.0964 3.54621 12.8789 3.3136C12.3027 2.69737 12.1421 2.65416 11.6159 3.27455C11.223 3.73699 10.7887 3.91118 10.1808 3.90323C7.59186 3.87316 5.00226 3.89079 2.413 3.89079H1.69202C3.39866 1.7604 5.47097 0.624348 8.05058 0.49405C10.9734 0.346471 13.3263 1.49945 15.1797 3.71072C15.1641 3.76994 15.1487 3.82881 15.1336 3.88733Z"
                      fill="#00AC4F"/>
                  <path
                      d="M14.6783 14.7877C11.5494 18.3721 5.38589 18.3448 2.42407 14.9115C2.74148 14.6239 3.0682 14.3522 3.36631 14.0519C3.79952 13.6161 4.0256 13.568 4.37541 14.0519C4.82344 14.6723 5.37727 14.8147 6.10756 14.8036C8.73576 14.7646 11.3653 14.7888 13.9942 14.7891L14.6783 14.7877Z"
                      fill="#00AC4F"/>
                </svg>
                <span class="text-[#00AC4F]">0.25 APT</span>
              </div>
              <div class="text-[#838383]">1 of 321</div>
            </div>
            <div class="flex justify-between items-center">
              <div class="py-2 px-3 rounded-full bg-[#EEEEEE] text-xs">3h 50m 2s left</div>
              <div class="">Place a bid</div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";

@Component({
  name: "ListModeCard"
})
export default class ListModeCard extends Vue{
  private textSearch: string = '';

}
</script>

<style scoped>

</style>
