<template>
  <div class="flex flex-row mx-auto">
    <div class="grow flex flex-col mx-auto md:text-left">
      <div class="bg-linear text-white py-4 px-4 text-center items-center md:items-start">
        <div class="
            mb-6
            flex
            w-full
            flex-col
            items-center
            gap-4
            md:flex-row md:items-start
          ">
          <img class="
              h-36
              w-36
              flex-shrink-0
              rounded-xl
              border-4 border-white
              bg-gray-200
              object-cover
              drop-shadow-md
              dark:border-stone-500
            " :src="collection_info.logo_uri || '/none_image.png'" @error="setErrorImg" loading="lazy" />
          <div class="w-full">
            <div class="
                flex
                w-full
                flex-col
                items-center
                justify-center
                gap-3
                md:flex-row md:justify-start md:gap-4
              ">
              <div class="flex flex-row items-center gap-2 text-2xl font-bold">
                {{ collection_info.name }}
              </div>
              <div class="hidden grow md:block"></div>
              <div class="
                  flex flex-row
                  gap-1
                  text-xs text-gray-500
                  dark:text-stone-400
                  md:hidden
                ">
                Created by
                <a class="underline" href="https://explorer.aptoslabs.com/account/collection_info.collection_id"
                  target="_blank" rel="noopener noreferrer">{{ shortenAddress(collection_info.collection_id) }}</a>
              </div>
              <div class="my-2 flex flex-row justify-center gap-1 md:my-0" v-if="!showSidebar">
                <div class="
                    ml-3
                    border-l-2 border-black/20
                    pl-4
                    dark:border-white/20
                  ">
                  <a class="
                      flex flex-row
                      items-center
                      justify-center
                      gap-3
                      whitespace-nowrap
                      rounded-xl
                      bg-opacity-60
                      px-4
                      py-2
                      text-sm text-black
                      hover:bg-gray-200
                      dark:bg-stone-700
                      dark:text-stone-300
                      dark:hover:bg-stone-600
                      false
                      bg-gray-200
                      undefined
                    " rel="noreferrer noopener" @click="toggleSideBar">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="
                mt-2
                hidden
                flex-row
                gap-1
                text-xs text-gray-500
                dark:text-stone-400
                md:flex
              ">
              Created by
              <a class="underline"
                href="https://explorer.aptoslabs.com/account/0xf49e91c4bcf494013b8dda4155859f63b3f3ab7a01a62313c944722a31db97d1"
                target="_blank" rel="noopener noreferrer">0xf49e...db97d1</a>
              <div>• {{ prettyFloat(collection_info.royal_fee) }}% creator royalty</div>
            </div>
            <div class="mt-4 text-left text-base text-gray-500 dark:text-stone-400">
              {{ collection_info.description }}
            </div>
          </div>
        </div>
        <div class="
            flex-row-2 flex-col-2
            md:flex-col-4 md:flex-row-1
            flex flex-row flex-wrap
            justify-center
            gap-2
            md:justify-start
          ">
          <div class="
              w-[150px]
              flex
              h-full
              flex-col
              items-start items-center
              justify-start
              rounded-lg
              border-2 border-gray-300
              px-3
              py-2
              md:w-auto md:gap-2
            ">
            <div class="text-center text-xs text-gray-500 dark:text-stone-500">
              Floor Price
            </div>
            <div class="
                flex flex-row
                items-center
                justify-center
                gap-2
                pt-2
                text-center text-sm
                dark:text-stone-300
                md:pt-0
              ">
              <div class="w-4">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.117371 10.5656H2.29548C3.226 10.5656 4.15652 10.5393 5.08704 10.5745C5.74978 10.5998 6.26674 10.4339 6.68271 9.8757C7.06974 9.35727 7.38543 9.35727 7.7635 9.88503C8.15673 10.4346 8.63784 10.5866 9.28645 10.5763C11.5611 10.5455 13.8395 10.5642 16.1158 10.5642H16.895C16.6631 11.2499 16.4742 11.8637 16.2378 12.4585C16.1933 12.5701 15.9621 12.6679 15.8146 12.6686C13.1026 12.6807 10.3903 12.6911 7.67872 12.6548C7.40301 12.651 7.08318 12.3921 6.87123 12.1685C6.2433 11.506 6.10269 11.4628 5.52129 12.1298C5.14735 12.5587 4.73965 12.715 4.1772 12.6901C3.20911 12.6472 2.23758 12.6655 1.26811 12.6873C0.935884 12.6946 0.75495 12.5802 0.660864 12.2691C0.496816 11.7299 0.318639 11.1956 0.117371 10.5656Z"
                    fill="#00AC4F" />
                  <path
                    d="M17.0015 8.26244C14.8014 8.26244 12.726 8.28491 10.6523 8.23583C10.3704 8.22926 10.0612 7.89954 9.82515 7.6583C9.31164 7.1295 9.09279 7.07455 8.6358 7.63342C8.21431 8.14908 7.73216 8.28836 7.08976 8.27869C4.7769 8.24412 2.46335 8.26521 -0.00012207 8.26521C0.148417 7.59747 0.257667 6.98642 0.437567 6.39887C0.472031 6.28447 0.782205 6.19599 0.965552 6.19495C3.32115 6.18147 5.67675 6.17076 8.03062 6.19495C8.7099 6.20221 9.24753 6.05671 9.68212 5.48505C10.0874 4.95107 10.3624 4.94831 10.7588 5.4809C11.1882 6.05705 11.7089 6.22157 12.3968 6.19703C13.6227 6.15348 14.851 6.19703 16.0779 6.17802C16.4105 6.17318 16.5921 6.26442 16.6538 6.60589C16.751 7.13192 16.8726 7.65104 17.0015 8.26244Z"
                    fill="#00AC4F" />
                  <path
                    d="M15.1336 3.88733C14.6431 3.88733 14.1403 3.95369 13.6678 3.86279C13.3783 3.80715 13.0964 3.54621 12.8789 3.3136C12.3027 2.69737 12.1421 2.65416 11.6159 3.27455C11.223 3.73699 10.7887 3.91118 10.1808 3.90323C7.59186 3.87316 5.00226 3.89079 2.413 3.89079H1.69202C3.39866 1.7604 5.47097 0.624348 8.05058 0.49405C10.9734 0.346471 13.3263 1.49945 15.1797 3.71072C15.1641 3.76994 15.1487 3.82881 15.1336 3.88733Z"
                    fill="#00AC4F" />
                  <path
                    d="M14.6783 14.7877C11.5494 18.3721 5.38589 18.3448 2.42407 14.9115C2.74148 14.6239 3.0682 14.3522 3.36631 14.0519C3.79952 13.6161 4.0256 13.568 4.37541 14.0519C4.82344 14.6723 5.37727 14.8147 6.10756 14.8036C8.73576 14.7646 11.3653 14.7888 13.9942 14.7891L14.6783 14.7877Z"
                    fill="#00AC4F" />
                </svg>
              </div>
              <div>{{ priceWei(collection_info.floor) }}</div>
            </div>
          </div>
          <div class="
              w-[150px]
              flex
              h-full
              flex-col
              items-start items-center
              justify-start
              rounded-lg
              border-2 border-gray-300
              px-3
              py-2
              md:w-auto md:gap-2
            ">
            <div class="text-center text-xs text-gray-500 dark:text-stone-500">
              Volume (24 hours)
            </div>
            <div class="
                flex flex-row
                items-center
                justify-center
                gap-2
                pt-2
                text-center text-sm
                dark:text-stone-300
                md:pt-0
              ">
              <div class="flex flex-row items-center gap-2">
                <div class="w-4">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.117371 10.5656H2.29548C3.226 10.5656 4.15652 10.5393 5.08704 10.5745C5.74978 10.5998 6.26674 10.4339 6.68271 9.8757C7.06974 9.35727 7.38543 9.35727 7.7635 9.88503C8.15673 10.4346 8.63784 10.5866 9.28645 10.5763C11.5611 10.5455 13.8395 10.5642 16.1158 10.5642H16.895C16.6631 11.2499 16.4742 11.8637 16.2378 12.4585C16.1933 12.5701 15.9621 12.6679 15.8146 12.6686C13.1026 12.6807 10.3903 12.6911 7.67872 12.6548C7.40301 12.651 7.08318 12.3921 6.87123 12.1685C6.2433 11.506 6.10269 11.4628 5.52129 12.1298C5.14735 12.5587 4.73965 12.715 4.1772 12.6901C3.20911 12.6472 2.23758 12.6655 1.26811 12.6873C0.935884 12.6946 0.75495 12.5802 0.660864 12.2691C0.496816 11.7299 0.318639 11.1956 0.117371 10.5656Z"
                      fill="#00AC4F" />
                    <path
                      d="M17.0015 8.26244C14.8014 8.26244 12.726 8.28491 10.6523 8.23583C10.3704 8.22926 10.0612 7.89954 9.82515 7.6583C9.31164 7.1295 9.09279 7.07455 8.6358 7.63342C8.21431 8.14908 7.73216 8.28836 7.08976 8.27869C4.7769 8.24412 2.46335 8.26521 -0.00012207 8.26521C0.148417 7.59747 0.257667 6.98642 0.437567 6.39887C0.472031 6.28447 0.782205 6.19599 0.965552 6.19495C3.32115 6.18147 5.67675 6.17076 8.03062 6.19495C8.7099 6.20221 9.24753 6.05671 9.68212 5.48505C10.0874 4.95107 10.3624 4.94831 10.7588 5.4809C11.1882 6.05705 11.7089 6.22157 12.3968 6.19703C13.6227 6.15348 14.851 6.19703 16.0779 6.17802C16.4105 6.17318 16.5921 6.26442 16.6538 6.60589C16.751 7.13192 16.8726 7.65104 17.0015 8.26244Z"
                      fill="#00AC4F" />
                    <path
                      d="M15.1336 3.88733C14.6431 3.88733 14.1403 3.95369 13.6678 3.86279C13.3783 3.80715 13.0964 3.54621 12.8789 3.3136C12.3027 2.69737 12.1421 2.65416 11.6159 3.27455C11.223 3.73699 10.7887 3.91118 10.1808 3.90323C7.59186 3.87316 5.00226 3.89079 2.413 3.89079H1.69202C3.39866 1.7604 5.47097 0.624348 8.05058 0.49405C10.9734 0.346471 13.3263 1.49945 15.1797 3.71072C15.1641 3.76994 15.1487 3.82881 15.1336 3.88733Z"
                      fill="#00AC4F" />
                    <path
                      d="M14.6783 14.7877C11.5494 18.3721 5.38589 18.3448 2.42407 14.9115C2.74148 14.6239 3.0682 14.3522 3.36631 14.0519C3.79952 13.6161 4.0256 13.568 4.37541 14.0519C4.82344 14.6723 5.37727 14.8147 6.10756 14.8036C8.73576 14.7646 11.3653 14.7888 13.9942 14.7891L14.6783 14.7877Z"
                      fill="#00AC4F" />
                  </svg>
                </div>
                <div>{{ priceWei(collection_info.volume_24) }}</div>
              </div>
            </div>
          </div>
          <div class="
              w-[150px]
              flex
              h-full
              flex-col
              items-start items-center
              justify-start
              rounded-lg
              border-2 border-gray-300
              px-3
              py-2
              md:w-auto md:gap-2
            ">
            <div class="text-center text-xs text-gray-500 dark:text-stone-500">
              Total Volume
            </div>
            <div class="
                flex flex-row
                items-center
                justify-center
                gap-2
                pt-2
                text-center text-sm
                dark:text-stone-300
                md:pt-0
              ">
              <div class="flex flex-row items-center gap-2">
                <div class="w-4">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.117371 10.5656H2.29548C3.226 10.5656 4.15652 10.5393 5.08704 10.5745C5.74978 10.5998 6.26674 10.4339 6.68271 9.8757C7.06974 9.35727 7.38543 9.35727 7.7635 9.88503C8.15673 10.4346 8.63784 10.5866 9.28645 10.5763C11.5611 10.5455 13.8395 10.5642 16.1158 10.5642H16.895C16.6631 11.2499 16.4742 11.8637 16.2378 12.4585C16.1933 12.5701 15.9621 12.6679 15.8146 12.6686C13.1026 12.6807 10.3903 12.6911 7.67872 12.6548C7.40301 12.651 7.08318 12.3921 6.87123 12.1685C6.2433 11.506 6.10269 11.4628 5.52129 12.1298C5.14735 12.5587 4.73965 12.715 4.1772 12.6901C3.20911 12.6472 2.23758 12.6655 1.26811 12.6873C0.935884 12.6946 0.75495 12.5802 0.660864 12.2691C0.496816 11.7299 0.318639 11.1956 0.117371 10.5656Z"
                      fill="#00AC4F" />
                    <path
                      d="M17.0015 8.26244C14.8014 8.26244 12.726 8.28491 10.6523 8.23583C10.3704 8.22926 10.0612 7.89954 9.82515 7.6583C9.31164 7.1295 9.09279 7.07455 8.6358 7.63342C8.21431 8.14908 7.73216 8.28836 7.08976 8.27869C4.7769 8.24412 2.46335 8.26521 -0.00012207 8.26521C0.148417 7.59747 0.257667 6.98642 0.437567 6.39887C0.472031 6.28447 0.782205 6.19599 0.965552 6.19495C3.32115 6.18147 5.67675 6.17076 8.03062 6.19495C8.7099 6.20221 9.24753 6.05671 9.68212 5.48505C10.0874 4.95107 10.3624 4.94831 10.7588 5.4809C11.1882 6.05705 11.7089 6.22157 12.3968 6.19703C13.6227 6.15348 14.851 6.19703 16.0779 6.17802C16.4105 6.17318 16.5921 6.26442 16.6538 6.60589C16.751 7.13192 16.8726 7.65104 17.0015 8.26244Z"
                      fill="#00AC4F" />
                    <path
                      d="M15.1336 3.88733C14.6431 3.88733 14.1403 3.95369 13.6678 3.86279C13.3783 3.80715 13.0964 3.54621 12.8789 3.3136C12.3027 2.69737 12.1421 2.65416 11.6159 3.27455C11.223 3.73699 10.7887 3.91118 10.1808 3.90323C7.59186 3.87316 5.00226 3.89079 2.413 3.89079H1.69202C3.39866 1.7604 5.47097 0.624348 8.05058 0.49405C10.9734 0.346471 13.3263 1.49945 15.1797 3.71072C15.1641 3.76994 15.1487 3.82881 15.1336 3.88733Z"
                      fill="#00AC4F" />
                    <path
                      d="M14.6783 14.7877C11.5494 18.3721 5.38589 18.3448 2.42407 14.9115C2.74148 14.6239 3.0682 14.3522 3.36631 14.0519C3.79952 13.6161 4.0256 13.568 4.37541 14.0519C4.82344 14.6723 5.37727 14.8147 6.10756 14.8036C8.73576 14.7646 11.3653 14.7888 13.9942 14.7891L14.6783 14.7877Z"
                      fill="#00AC4F" />
                  </svg>
                </div>
                <div>{{ priceWei(collection_info.total_volume) }}</div>
              </div>
            </div>
          </div>
          <div class="
              w-[150px]
              flex
              h-full
              flex-col
              items-start items-center
              justify-start
              rounded-lg
              border-2 border-gray-300
              px-3
              py-2
              md:w-auto md:gap-2
            ">
            <div class="text-center text-xs text-gray-500 dark:text-stone-500">
              Items
            </div>
            <div class="
                flex flex-row
                items-center
                justify-center
                gap-2
                pt-2
                text-center text-sm
                dark:text-stone-300
                md:pt-0
              ">
              {{ prettyInt(collection_info.num_tokens) }}
            </div>
          </div>
          <div class="
              w-[150px]
              flex
              h-full
              flex-col
              items-start items-center
              justify-start
              rounded-lg
              border-2 border-gray-300
              px-3
              py-2
              md:w-auto md:gap-2
            ">
            <div class="text-center text-xs text-gray-500 dark:text-stone-500">
              Owners
            </div>
            <div class="
                flex flex-row
                items-center
                justify-center
                gap-2
                pt-2
                text-center text-sm
                dark:text-stone-300
                md:pt-0
              ">
              {{ prettyInt(collection_info.num_unique_owners) }}
            </div>
          </div>
        </div>
      </div>
      <div class="pt-16 md:pb-16 pb-16 bg-gray-100">
        <div class="px-4 max-w-6xl mx-auto space-y-10">
          <div class="grid md:grid-cols-4 gap-4">
            <div v-for="item in collection_nfts" :key="item.token_name" class="p-3 cursor-pointer bg-white rounded-xl"
              :class="{ 'border-double border-4 border-blue-200': isInCart(item) }" @click="toggleCart(item)">
              <img :src="prettyImg(item.preview_uri, item.image_url)" @error="setErrorImg" alt="" />
              <div class="pt-4 text-black space-y-3">
                <div class="font-bold text-xl">{{ item.token_name }}</div>
                <div class="flex justify-between items-center">
                  <div class="flex justify-end gap-2 font-bold items-center">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0.117371 10.5656H2.29548C3.226 10.5656 4.15652 10.5393 5.08704 10.5745C5.74978 10.5998 6.26674 10.4339 6.68271 9.8757C7.06974 9.35727 7.38543 9.35727 7.7635 9.88503C8.15673 10.4346 8.63784 10.5866 9.28645 10.5763C11.5611 10.5455 13.8395 10.5642 16.1158 10.5642H16.895C16.6631 11.2499 16.4742 11.8637 16.2378 12.4585C16.1933 12.5701 15.9621 12.6679 15.8146 12.6686C13.1026 12.6807 10.3903 12.6911 7.67872 12.6548C7.40301 12.651 7.08318 12.3921 6.87123 12.1685C6.2433 11.506 6.10269 11.4628 5.52129 12.1298C5.14735 12.5587 4.73965 12.715 4.1772 12.6901C3.20911 12.6472 2.23758 12.6655 1.26811 12.6873C0.935884 12.6946 0.75495 12.5802 0.660864 12.2691C0.496816 11.7299 0.318639 11.1956 0.117371 10.5656Z"
                        fill="#00AC4F" />
                      <path
                        d="M17.0015 8.26244C14.8014 8.26244 12.726 8.28491 10.6523 8.23583C10.3704 8.22926 10.0612 7.89954 9.82515 7.6583C9.31164 7.1295 9.09279 7.07455 8.6358 7.63342C8.21431 8.14908 7.73216 8.28836 7.08976 8.27869C4.7769 8.24412 2.46335 8.26521 -0.00012207 8.26521C0.148417 7.59747 0.257667 6.98642 0.437567 6.39887C0.472031 6.28447 0.782205 6.19599 0.965552 6.19495C3.32115 6.18147 5.67675 6.17076 8.03062 6.19495C8.7099 6.20221 9.24753 6.05671 9.68212 5.48505C10.0874 4.95107 10.3624 4.94831 10.7588 5.4809C11.1882 6.05705 11.7089 6.22157 12.3968 6.19703C13.6227 6.15348 14.851 6.19703 16.0779 6.17802C16.4105 6.17318 16.5921 6.26442 16.6538 6.60589C16.751 7.13192 16.8726 7.65104 17.0015 8.26244Z"
                        fill="#00AC4F" />
                      <path
                        d="M15.1336 3.88733C14.6431 3.88733 14.1403 3.95369 13.6678 3.86279C13.3783 3.80715 13.0964 3.54621 12.8789 3.3136C12.3027 2.69737 12.1421 2.65416 11.6159 3.27455C11.223 3.73699 10.7887 3.91118 10.1808 3.90323C7.59186 3.87316 5.00226 3.89079 2.413 3.89079H1.69202C3.39866 1.7604 5.47097 0.624348 8.05058 0.49405C10.9734 0.346471 13.3263 1.49945 15.1797 3.71072C15.1641 3.76994 15.1487 3.82881 15.1336 3.88733Z"
                        fill="#00AC4F" />
                      <path
                        d="M14.6783 14.7877C11.5494 18.3721 5.38589 18.3448 2.42407 14.9115C2.74148 14.6239 3.0682 14.3522 3.36631 14.0519C3.79952 13.6161 4.0256 13.568 4.37541 14.0519C4.82344 14.6723 5.37727 14.8147 6.10756 14.8036C8.73576 14.7646 11.3653 14.7888 13.9942 14.7891L14.6783 14.7877Z"
                        fill="#00AC4F" />
                    </svg>
                    <span class="text-[#00AC4F]">{{ priceWei(item.price) }} APT</span>
                  </div>
                  <!-- <div class="text-[#838383]">1 of 321</div> -->
                </div>
                <div class="flex justify-between items-center">
                  <div @click="buyNow(item)" class="
                      py-2
                      px-3
                      cursor-pointer
                      hover:bg-yellow-100
                      dark:hover:bg-[#cacaca]
                      rounded-full
                      bg-[#EEEEEE]
                      text-xs
                    ">
                    Buy Now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="
        flex-none
        top-[85px]
        bottom-0
        right-0
        border-gray-200
        bg-[#111827]
        text-white
        px-4
        pb-48
        text-sm
      " style="width: 290px" v-show="showSidebar">
      <div class="
          flex flex-row
          items-center
          gap-2
          border-b-2 border-gray-200
          py-2
          dark:border-stone-700
        ">
        <div class="flex flex-row items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor"
            class="h-6 w-6">
            <path
              d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z">
            </path>
          </svg>My Cart
        </div>
        <div class="grow"></div>
        <a v-if="cart_nfts.length > 0" class="
            flex flex-row
            items-center
            justify-center
            gap-3
            whitespace-nowrap
            rounded-xl
            bg-opacity-60
            px-4
            py-2
            text-sm
            hover:bg-gray-800
            false
            text-white
            cursor-pointer
            undefined
          " @click="clearCart()">Clear</a><a class="
            flex flex-row
            items-center
            justify-center
            gap-3
            whitespace-nowrap
            rounded-xl
            bg-opacity-60
            px-4
            py-2
            text-sm
            hover:bg-gray-800
            false
            text-white
            cursor-pointer
            undefined
          " rel="noreferrer noopener" target="" @click="toggleSideBar">Close</a>
      </div>
      <div v-for="item in cart_nfts" :key="item.token_name" class="flex flex-col gap-1 py-2">
        <div class="
            -mx-2
            flex flex-row
            items-center
            rounded-lg
            py-2
            px-2
            hover:cursor-pointer hover:bg-gray-100
            dark:hover:bg-stone-700
          " @click="toggleCart(item)">
          <img class="
                mx-auto
                aspect-square
                h-12
                w-12
                rounded-md
                mr-2
                border-[1px] border-gray-300
                object-cover
                dark:border-stone-700
              " :src="prettyImg(item.preview_uri, item.image_url)" @error="setErrorImg" loading="lazy" />
          <div class="
              max-w-[120px]
              overflow-hidden
              text-ellipsis
              whitespace-nowrap
            ">
            {{ item.token_name }}
          </div>
          <div class="grow"></div>
          <div class="flex flex-row items-center gap-2">
            <div class="h-4 w-4">
              <svg data-name="Icon Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="white">
                <path
                  d="M46.47,20.07H41.16a2.15,2.15,0,0,1-1.61-.72l-2.16-2.42a1.69,1.69,0,0,0-2.53,0L33,19a3.21,3.21,0,0,1-2.39,1.07h-29A30.26,30.26,0,0,0,0,27.48H27.42a1.78,1.78,0,0,0,1.28-.54l2.56-2.66a1.67,1.67,0,0,1,1.22-.52h.1a1.7,1.7,0,0,1,1.27.57L36,26.75a2.17,2.17,0,0,0,1.61.73H60a30.26,30.26,0,0,0-1.58-7.41h-12Z">
                </path>
                <path
                  d="M16.6,43.05a1.78,1.78,0,0,0,1.27-.54l2.56-2.66a1.7,1.7,0,0,1,1.22-.52h.1A1.7,1.7,0,0,1,23,39.9l2.15,2.42a2.14,2.14,0,0,0,1.62.73H57.12a29.73,29.73,0,0,0,2.47-7.48H30.47a2.17,2.17,0,0,1-1.62-.72L26.7,32.42a1.69,1.69,0,0,0-2.53,0L22.32,34.5a3.18,3.18,0,0,1-2.38,1.07H.41a29.73,29.73,0,0,0,2.47,7.48Z">
                </path>
                <path
                  d="M38.12,12a1.74,1.74,0,0,0,1.27-.54L42,8.78a1.69,1.69,0,0,1,1.22-.51h.1a1.69,1.69,0,0,1,1.27.56l2.15,2.43a2.17,2.17,0,0,0,1.62.72h5.77A30.19,30.19,0,0,0,5.92,12Z">
                </path>
                <path
                  d="M26.53,50.46H18.64A2.17,2.17,0,0,1,17,49.74l-2.15-2.43a1.71,1.71,0,0,0-2.53,0l-1.85,2.08a3.18,3.18,0,0,1-2.38,1.07H8a30.16,30.16,0,0,0,44,0Z">
                </path>
              </svg>
            </div>
            {{ priceWei(item.price) }}
          </div>
        </div>
      </div>
      <div>
        <div class="
            mb-4
            flex flex-row
            items-center
            gap-2
            border-t-2 border-b-2 border-gray-200
            py-4
            dark:border-stone-700
          ">
          <div>Total</div>
          <div class="grow"></div>
          <div class="flex flex-row items-center gap-2">{{ priceWei(totalPriceCart()) }} APTOS</div>
        </div>
        <button class="
            w-full
            text-center
            gap-3
            whitespace-nowrap
            rounded-xl
            px-4
            py-2
            text-sm
            text-white bg-gray-800
            hover:bg-gray-400
          " @click="buyAll()">Buy Now</button>
      </div>
    </div>
  </div>
</template>

<script>
import APTLogo from '@/components/Icon/svg/AptosCoinLogo.vue';

export default {
  name: "CollectionPage",
  data() {
    return {
      collection_info: [],
      collection_nfts: [],
      cart_nfts: [],
      showSidebar: true,
      collection_name: this.$route.params.collection_id,
      ipfs_gateway: [
        "https://ipfs.io/ipfs/",
        "https://dweb.link/ipfs/",
        "https://cloudflare-ipfs.com/ipfs/",
      ],
    };
  },
  async fetch() {
    this.collection_info = await this.$axios
      .$get(
        "https://api.aptosgem.xyz/collection_info?collection=" +
        this.collection_name
      )
      .then((res) => res.data);
    const pretty_url = (url) => {
      const ipfs_gw =
        this.ipfs_gateway[Math.floor(Math.random() * this.ipfs_gateway.length)];
      return url
        .replace("ipfs://", ipfs_gw)
        .replace("https://nftstorage.link/ipfs/", ipfs_gw);
    };
    // this.collection_info = await this.$axios.$get('https://api.aptosgem.xyz/collection_info?collection='+this.collection_name).then(res => res.data)
    const collection_nfts = await this.$axios
      .$get(
        "https://api.aptosgem.xyz/collection_nfts?collection=" +
        this.collection_name
      )
      .then((res) => res.data.splice(0, 20));
    this.collection_nfts = collection_nfts;
    this.cart_nfts = collection_nfts.slice(0, 3);
    const res = await Promise.allSettled(
      collection_nfts.map((x) => {
        return this.$axios.$get(pretty_url(x.token_uri), { timeout: 3000 });
      })
    );
    this.collection_nfts = collection_nfts.map((x, i) => {
      if (!res[i].reason) {
        x.image_url = pretty_url(res[i].value.image);
      }
      return x;
    });
  },
  methods: {
    setErrorImg(event) {
      event.target.src = "/none_image.png";
    },
    toggleSideBar() {
      this.showSidebar = !this.showSidebar;
    },
    isInCart(token) {
      return this.cart_nfts.includes(token)
    },
    clearCart() {
      this.cart_nfts = []
    },
    toggleCart(token) {
      const index = this.cart_nfts.indexOf(token);

      if (index > -1) {
        this.cart_nfts.splice(index, 1);
      } else {
        this.cart_nfts.push(token);
      }
    },
    priceWei(str) {
      return str
        ? Number.parseFloat(
          (Number.parseInt(str) / Math.pow(10, 8)).toFixed(4)
        ).toLocaleString()
        : "_";
    },
    totalPriceCart() {
      let sum = 0;

      if (!this.cart_nfts.length) return 0;

      this.cart_nfts.forEach(element => {
        sum += element.price;
      });
      return sum;
    },
    prettyInt(num) {
      return num ? num.toLocaleString() : "_";
    },
    prettyImg(url1, url2) {
      const url = url1 || url2;
      if (!url) return "";
      const ipfs_gw =
        this.ipfs_gateway[Math.floor(Math.random() * this.ipfs_gateway.length)];
      return url
        .replace("ipfs://", ipfs_gw)
        .replace("https://nftstorage.link/ipfs/", ipfs_gw);
    },
    shortenAddress(str) {
      if (!str) return "_";
      const first5 = str.split("::")[0].slice(0, 8);
      const last5 = str.split("::")[0].slice(-5);
      return first5 + "..." + last5;
    },
    prettyFloat(num) {
      return (num * 100).toFixed(1);
    },
    async buyNow(item) {
      const tx_payload = {
        function:
          "0x2c7bccf7b31baf770fdbcc768d9e9cb3d87805e255355df5db32ac9a669010a2::marketplace_v2::buy",
        type_arguments: ["0x1::aptos_coin::AptosCoin"],
        arguments: [
          item.seller,
          item.price.toString(),
          item.amount,
          item.collection_id.split("::")[0],
          item.collection_id.split("::")[1],
          item.token_name,
          item.property_version,
        ],
      };
      if (this.$store.state.auth.account) {
        this.$aptos.adapter
          .signAndSubmitTransaction(tx_payload)
          .then((res) => {
            console.log("hello", res);
          })
          .catch(() => {
            console.log("something wrong wrong!");
          });
      } else {
        this.$store.dispatch("config/setModal", {
          name: "connect_wallet",
        });
      }
    },
    async buyAll() {
      if (this.cart_nfts.length == 0) {
        console.log('buying nothing');
        return
      }
      console.log('buying all');
      const tx_payload = {
        function:
          "0x2c7bccf7b31baf770fdbcc768d9e9cb3d87805e255355df5db32ac9a669010a2::marketplace_v2::buy_many",
        type_arguments: ["0x1::aptos_coin::AptosCoin"],
        arguments: [
          this.cart_nfts.map(a => a.seller),
          this.cart_nfts.map(a => a.price.toString()),
          this.cart_nfts.map(a => a.amount),
          this.cart_nfts.map(a => a.collection_id.split("::")[0]),
          this.cart_nfts.map(a => a.collection_id.split("::")[1]),
          this.cart_nfts.map(a => a.token_name),
          this.cart_nfts.map(a => a.property_version),
        ],
      };
      if (this.$store.state.auth.account) {
        this.$aptos.adapter
          .signAndSubmitTransaction(tx_payload)
          .then((res) => {
            console.log("hello", res);
          })
          .catch((e) => {
            console.log("something wrong wrong!", e);
          });
      } else {
        this.$store.dispatch("config/setModal", {
          name: "connect_wallet",
        });
      }
    }
  },
};
</script>

<style>
.bg-linear {
  background: linear-gradient(180deg, #08135c 0%, #111827 100%);
}
</style>
